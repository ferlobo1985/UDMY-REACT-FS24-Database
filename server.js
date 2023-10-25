const express = require('express');
const app = express();
const mongoose = require('mongoose');

// francis
// HSVKmzgrkIxiOEMu

const mongoURI = `mongodb+srv://francis:HSVKmzgrkIxiOEMu@cluster0.soln6fi.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoURI);


///////// SCHEMA  //////////////
const carSchema = mongoose.Schema({
    brand:String,
    model:String,
    year:Number,
    avail:Boolean
});

const Car = mongoose.model('Car',carSchema);
///////////////////////////////



const port = process.env.PORT || 3001;
app.listen(port);