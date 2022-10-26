
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({path:"backend/config/config.env"});



const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI, {useNewUrlParser:true,
 useUnifiedTopology:true}).then((data)=>{
    console.log(`MongoDB Connected with server:${process.env.PORT}`);

 });
};
module.exports = connectDatabase