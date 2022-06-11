import mongoose from "mongoose";
const {
    model, Schema
} = mongoose;
const denemeSchema = new Schema ({
    stampName:{
        type : String,
        required: true,
        minlength:2,
        maxlength:200
    },
    stampYear:{
        type : Number,
        required: true,
        minlength:1,
        maxlength:300
    },
    stampPrice:{
        type : Number,
        required: true,
        minlength:0,
        maxlength:120
    },

},
{
    timestamps : true

});
export default model("stamps",denemeSchema);