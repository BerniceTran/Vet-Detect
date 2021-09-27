import express, { response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Clinic from '../models/clinicModel.js';

const clinicRouter = express.Router();

// To send back to frontend
clinicRouter.get(
    '/', 
    expressAsyncHandler(async (req, res) => {
        const clinics =  await Clinic.find({}); 
        res.send(clinics); 
    })
);

clinicRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        //await Clinic.deleteMany({});
        const createdClinics = await Clinic.insertMany(data.clinics);
        res.send({createdClinics});
    })
);

clinicRouter.get(
    '/search-results', 
    expressAsyncHandler(async (req, res) => {

        const querySearch = req.query.search_input;
        const queryLocation = req.query.location;

        const clinics = await Clinic.find({$or:[{name: new RegExp(querySearch, 'i')}, {"address.city": queryLocation}, {"address.state": queryLocation}, {"address.zip": queryLocation}]});

        // const clinics = querySearch ? 
        //     await Clinic.find({$or:[{name: new RegExp(querySearch, 'i')}, {"address.city": queryLocation}, {"address.state": queryLocation}, {"address.zip": queryLocation}]}) :
        //     await Clinic.find({$or:[{"address.city": queryLocation}, {"address.state": queryLocation}, {"address.zip": queryLocation}]});

        if (clinics) {
            res.send(clinics);
        } else {
            res.status(404).send({message: 'Clinics not found'});
        }
    })
);


export default clinicRouter;