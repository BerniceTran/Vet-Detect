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
        latitude: {type: mongoose.Types.Decimal128, required: true}, 
        longitude: {type: mongoose.Types.Decimal128, required: true},
        phone: {type: Number, required: true},
        image: {type: String},
    }, 
    {
        timestamps: true
    }
);

clinicSchema.index({name: "text", address: "text"});

const Clinic = mongoose.model("Clinic", clinicSchema); 

export default Clinic;