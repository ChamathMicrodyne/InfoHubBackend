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


const FraudAndRisksItems = mongoose.model("FraudAndRisksItems", ItemSchema)

export default FraudAndRisksItems;