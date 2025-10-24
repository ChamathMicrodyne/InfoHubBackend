import mongoose from "mongoose";

const ItemSchema = mongoose.Schema({
    id : {
        type : Number,
        required : true,
        unique : true
    },
    name : {
        type: String,
        required: true 
    },
    active : {
        type: Boolean,
        default: true
    }
})


const MainMenusItems = mongoose.model("MainMenusItems", ItemSchema)

export default MainMenusItems;