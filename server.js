const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

// francis
// HSVKmzgrkIxiOEMu

const mongoURI = `mongodb+srv://francis:HSVKmzgrkIxiOEMu@cluster0.soln6fi.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(mongoURI,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
});

async function run(){
    try{
        await client.connect();
        console.log('connected')
    } finally {
        await client.close();
    }
}
run().catch(console.dir)

const port = process.env.PORT || 3001;
app.listen(port);