const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const characterSchema = new Schema({
    name: { type: String, required: true },
    planet: { type: String, required: true },
    image: { type: String, required: true },
    ki: { type: Number }


},
    {
        collection: "characters",
        timestamps: true
    }
)
const Characters = mongoose.model("characters", characterSchema)
module.exports = Characters;