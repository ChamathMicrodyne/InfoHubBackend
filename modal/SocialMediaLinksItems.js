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


const SocialMediaLinksItems = mongoose.model("SocialMediaLinksItems", ItemSchema)

export default SocialMediaLinksItems;