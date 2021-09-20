import mongoose from 'mongoose';

const clinicSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        zip: {type: String, required: true},
        image: {type: String, required: true}
    }, 
    {
        timestamps: true  // Created at and updated at
    }
);

const User = mongoose.model("User", userSchema); // Create model based on schema  

export default Clinic;