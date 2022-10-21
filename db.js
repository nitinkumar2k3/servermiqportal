const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


module.exports = () => {
 
  try{
    mongoose.connect(process.env.DB || test)
    console.log('Connected to database successfully')
  } catch(error){
    console.log(error);
    console.log("could not connect to database");
  }
};


