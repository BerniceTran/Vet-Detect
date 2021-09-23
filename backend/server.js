import express, { query } from 'express';
import mongoose from 'mongoose';
import clinicRouter from './routers/clinicRouter.js'; //Server side, important to append .js extension
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/vetdetect', 
    async(err)=>{
        if(err) throw err;
        console.log("Connected to MongoDB");
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
