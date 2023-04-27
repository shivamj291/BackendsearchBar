const express = require('express')
const app = express();
const cors = require('cors')
const dataRouter = require('./Router/CompanyRoutes')
const AdsRouter = require("./Router/AdsRouter")

const {connectDb} = require('./config/db')
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
  res.send("Working");
})

app.use('/Ads',AdsRouter);
app.use('/Company',dataRouter);
connectDb().then(()=>{
    
  app.listen(process.env.port,()=>{
      console.log("hello ready for run")
  })
  
})
