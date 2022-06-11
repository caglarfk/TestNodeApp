import mongoose from "mongoose";
const {
    model, Schema
} = mongoose;
const newsSchema = new Schema ({
    title:{
        type : String,
        required: true,
        minlength:2,
        maxlength:200
    },
    description:{
        type : String,
        required: true,
        minlength:2,
        maxlength:1000
    },
    author:{
        type : String,
        required: true,
        minlength:3,
        maxlength:120
    }

},
{
    timestamps : true

})
export default model("news",newsSchema);