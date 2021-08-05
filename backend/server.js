require('dotenv').config();
const express = require('express');
const app = express();
const { appConfig, db } = require('./config');
const connectDb = require('./db/mongodb')


connectDb(db)
app.listen(appConfig.port,()=>console.log(`listen on:${appConfig.port}`))
