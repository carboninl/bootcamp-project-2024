const express = require('express')
const app = express();
const mongoose = require('mongoose')
const MONGO_URI = "mongodb+srv://carboninl:L05Fr9Lo3JpusdR1@h4i.vp2gi.mongodb.net/?retryWrites=true&w=majority&appName=h4i"
mongoose.connect(MONGO_URI).then(() => console.log('Successfully connected'));