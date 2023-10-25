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
});


app.get('/api/getcars',async(req,res)=>{
    try{
        let doc = await Car.find({});
        // let doc = await Car.find({brand:'Ford'});
        // let doc = await Car.find({_id:'65397c30db3de906256bb6de'});
        // let doc = await Car.findOne({_id:'65397c24db3de906256bb6dc'});
        // let doc = await Car.findById('65397baedb3de906256bb6da');
        res.json(doc);
    } catch(err){
        console.log(err)
    }
});


app.post('/api/removecar', async(req,res)=>{
    try{
        const brand = req.body.brand;
        let doc =  await Car.deleteMany({});
        res.json(doc)
    } catch(error){
        console.log(error)
    }
})



const port = process.env.PORT || 3001;
app.listen(port);