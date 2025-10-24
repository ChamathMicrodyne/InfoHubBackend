import mongoose from "mongoose";

const ItemSchema = mongoose.Schema({
    id : {
        type : Number,
        required : true,
        unique : true
    },
    username : {
        type: String,
        required: true 
    },
    password : {
        type: String,
        required: true 
    },
    active : {
        type: Boolean,
        default: true
    }
})


const Users = mongoose.model("users", ItemSchema)

export default Users;