const { timeStamp } = require("console");
const mongodb = require("mongoose");
const { type } = require("os");
const userSchema = new mongodb.Schema({
    name: {type: string, required: true, trim: true},
    email: {type: string, required: true, unique: true, trim: true}},
{
   timeStamp: true}
)

module.exports = mongoose.model("Users", userSchema)