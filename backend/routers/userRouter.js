import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        await User.remove({});
        const createdUsers = await User.insertMany(data.users); // Insert users objects from data array to User collection in MongoDB
        res.send({createdUsers});
    })
);

export default userRouter;