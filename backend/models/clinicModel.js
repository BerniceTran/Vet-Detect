import mongoose from 'mongoose';

const clinicSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        address: {
            street: {type: String, required: true},
            city: {type: String, required: true},
            state: {type: String, required: true},
            zip: {type: String, required: true},
        },
        // street: {type: String, required: true},
        // city: {type: String, required: true},
        // state: {type: String, required: true},
        // zip: {type: Number, required: true},
        phone: {type: Number, required: true},
        image: {type: String}
    }, 
    {
        timestamps: true
    }
);

clinicSchema.index({name: "text", address: "text"});

const Clinic = mongoose.model("Clinic", clinicSchema); 

export default Clinic;