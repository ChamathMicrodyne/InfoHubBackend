import mongoose from "mongoose";

const NavBarItemsSchema = mongoose.Schema({
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


const NavBarItems = mongoose.model("NavBarItems", NavBarItemsSchema)

export default NavBarItems;