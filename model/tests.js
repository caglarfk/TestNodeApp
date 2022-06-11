import  mongoose  from "mongoose";
const { model ,Schema} = mongoose;
const testsSchema = new Schema({
    lessons1:{
        type:String,
        required:true,
        minlength:2,
        maxlength:200,
    

    },
    lessons2:{
        type:Number,
        required:true,
        minlength:2,
        maxlength:200,
    }
},
{timestamps : true});
export default model("tests",testsSchema)