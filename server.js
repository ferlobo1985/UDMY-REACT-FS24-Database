const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// francis
// HSVKmzgrkIxiOEMu

const mongoURI = `mongodb+srv://francis:HSVKmzgrkIxiOEMu@cluster0.soln6fi.mongodb.net/myApp?retryWrites=true&w=majority`;
mongoose.connect(mongoURI);

app.use(bodyParser.json());

///////// SCHEMA  //////////////
const carSchema = mongoose.Schema({
    brand:String,
    model:String,
    year:Number,
    avail:Boolean
});

const Car = mongoose.model('Car',carSchema);
///////////////////////////////


app.post('/api/addcar',async(req,res)=>{
    try{
        const addCar = new Car({
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            avail: req.body.avail
        })
        const newCar = await addCar.save();
        res.sendStatus(200)
    } catch(err){
        console.log(err)
    }
})


const port = process.env.PORT || 3001;
app.listen(port);