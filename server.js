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

// async function run(){
//     try{
//         await client.connect();
//         console.log('connected')
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);



app.get('/api/users',async(req,res)=>{
    try{
        await client.connect();
        const database = client.db('myApp');
        const collection = database.collection('users');
        const query = await collection.insertOne({
            name:'Francis',
            lastname:'Jones'
        });
        console.log(query);

        res.status(200).json({awesome:'Yes'});
    } catch(error){
        throw error;
    } finally{
        await client.close();
        console.log('all is done')
    }
});



const port = process.env.PORT || 3001;
app.listen(port);