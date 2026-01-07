const app = require("express");
const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 5001;

connectDB();

app.listen(PORT, ()=>{
    console.log(`it runs on ${PORT}`);
})