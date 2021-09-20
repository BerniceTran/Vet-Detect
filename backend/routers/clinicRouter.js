import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Clinic from '../models/clinicModel.js';

const clinicRouter = express.Router();

clinicRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        //await Clinic.remove({});
        const createdClinics = await Clinic.insertMany(data.clinics); 
        res.send({createdClinics});
    })
);

export default clinicRouter;