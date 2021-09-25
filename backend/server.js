import express, { query } from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import { Strategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import clinicRouter from './routers/clinicRouter.js'; //Server side, important to append .js extension
import userRouter from './routers/userRouter.js';
import User from './models/userModel.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/vetdetect', 
    async(err)=>{
        if(err) throw err;
        console.log("Connected to MongoDB");
});

// Middleware
// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000", // location of the React app 
    credentials: true
})); 
// app.use(cors());
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
        // store: new MongoStore   
    })
)
app.use(cookieParser("secretcode"));

//Routes
app.post("/login",  (req, res) => {
    console.log(req.body);
});

app.post("/register", (req, res) => {
    console.log("Request body", req.body);
    User.findOne({email: req.body.email}, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User already exists");
        if (!doc) {
            const newUser = new User(req.body);
            newUser.password = await bcrypt.hash(newUser.password, 8);
            // console.log(newUser.password);
            // console.log('After hashing', newUser);

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


// app.get('/search-results', (req, res) => {
//     //console.log('Request query value', req.query.search_input);

//     const querySearchParam = req.query.search_input.toLowerCase();
//     const queryLocationParam = req.query.location.toLowerCase();

//     let filteredData = [];

//     // console.log(querySearchParam);
//     // console.log(queryLocationParam);

//     if (querySearchParam == undefined || queryLocationParam == undefined) {
//         res.send(data);
//     } else {
//         // console.log(querySearchParam);
//         // console.log(data);
        
//         filteredData = data.clinics.filter(clinic => clinic.clinicName.toLowerCase().includes(querySearchParam));
//         // console.log(filteredData);

//         res.send(filteredData);
//     }
// });

app.use('/api/users', userRouter);
app.use('/api/clinics', clinicRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
}); 

// Middleware error catcher - error in router that is wrapped in expressAsyncHandler will be redirected here
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Serving at http://localhost:${port}`));
