import path from 'path';
import dotenv from 'dotenv';
import express, { query } from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import passportLocal from 'passport-local';
import bcrypt from 'bcryptjs';
import clinicRouter from './routers/clinicRouter.js'; //Server side, important to append .js extension
import userRouter from './routers/userRouter.js';
import User from './models/userModel.js';
//import Strategy from './passportConfig.js';

const LocalStrategy = passportLocal.Strategy;
passport.use("localstrategy", new LocalStrategy(/*{passReqToCallback:true},*/ (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { message: 'Incorrect email address.' }); // null: no error, false: no user
        }
        bcrypt.compare(password, user.password, (err, isValid) => {
            if (err) { return done(err); }
            if (!isValid) { return done(null, false, { message: 'Incorrect password.' }); }
            return done(null, user);
        })
    });
}));
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Unravels session and returns user
passport.deserializeUser((id, done) => {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

dotenv.config();
const __dirname = path.resolve();
const app = express();

mongoose.connect(process.env.DB_URL, 
    async(err)=>{
        if(err) throw err;
        console.log("Connected to MongoDB");
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000", // location of the React app 
    credentials: true
}));
// app.use(cors());
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true 
    })
)
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
 
// app.use((req, res, next) => {
//     console.log(req.session);
//     console.log(user);
//     next();
// });


//Routes
app.post("/login",  (req, res, next) => {
   
    passport.authenticate("localstrategy", (err, user, info) => {
        //console.log(info);
        if (err) throw err;
        if (!user) {
            console.log(info);
            //res.send("User does not exist");
            res.send(info);
        }
        else {
            req.logIn(user, err => {
                if (err) throw err;
                res.send(true);
                //res.send(user);
                //res.send("Successfully authenticated");
            });
        }
    })(req, res, next);
});

app.get('/logout', function(req, res){
    req.logout();
    req.session.destroy();
    // console.log("Logging out");
    // console.log(res.user);
});

app.post("/register", (req, res) => {
    console.log("Request body", req.body);
    User.findOne({email: req.body.email}, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User already exists");
        if (!doc) {
            const newUser = new User(req.body);
            newUser.password = await bcrypt.hash(newUser.password, 8);

            newUser
            .save()
            .then(newUser => {
                console.log('Created:', newUser);
                res.send(`Successfully created user: ${newUser}`)
            })
            .catch(error => {
                res 
                    .status(400)
                    .send(`Unable to create user: ${error}`);
            });
        }
    });
});

app.use('/api/users', userRouter);
app.use('/api/clinics', clinicRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
}); 

// Middleware error catcher - error in router that is wrapped in expressAsyncHandler will be redirected here
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Serving at http://localhost:${port}`));
