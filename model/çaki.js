import mongoose from "mongoose";
const {
    model, Schema
} = mongoose;
const çakiSchema = new Schema ({
    name:{
        type : String,
        required: true,
        minlength:2,
        maxlength:200
    },
    surname:{
        type : String,
        required: true,
        minlength:4,
        maxlength:300
    },
    password:{
        type : String,
        required: true,
        minlength:5,
        maxlength:120
    }

},
{
    timestamps : true

})
export default model("çaki",çakiSchema);