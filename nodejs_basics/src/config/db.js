const mongoose = require("mongoose");

async function connectDB(){

    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
    console.log("mongoose db is connect");
    }
    catch(error){
console.error("error", error);
process.exit(1);

    }
    
}

module.export = connectDB;