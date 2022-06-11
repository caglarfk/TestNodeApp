import mongoose from "mongoose";
const {
    model, Schema
} = mongoose;
const lessonsSchema = new Schema ({
    lesson:{
        type : String,
        required: true,
        minlength:2,
        maxlength:200
    },
    lessonTeacher:{
        type : String,
        required: true,
        minlength:4,
        maxlength:300
    },
    

},
{
    timestamps : true

})
export default model("lessons",lessonsSchema);