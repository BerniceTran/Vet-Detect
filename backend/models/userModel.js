import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default: false, required: true}
    }, 
    {
        timestamps: true  // Created at and updated at
    }
);

const User = mongoose.model("User", userSchema); // Create model based on schema  

export default User;