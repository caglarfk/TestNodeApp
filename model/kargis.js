import mongoose from "mongoose";
const
    { model, Schema } = mongoose;
const kargisSchema = new Schema({
    father: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 10
    },
    mother: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 10
    }

}, { timestamps: true });
export default model("kargis",kargisSchema);