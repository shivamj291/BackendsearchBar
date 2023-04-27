const mongoose = require('mongoose')

require('dotenv').config()
async function connectDb(){
  await mongoose.connect(process.env.mongo_url);
}
module.exports = {connectDb}


//
// 