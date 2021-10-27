const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 5000;

const uri = `mongodb+srv:${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a7yox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        await client.connect();
        const database = client.db("geniusCar");
        const servicesCollection = database.collection("service");

        //POST API
        app.post('/services', async (req, res) => {
            
            const service = {
                "name": "ENGINE DIAGNOSTIC",
                "price": "300",
                "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
                "img": "https://i.ibb.co/dGDkr4v/1.jpg"
            }
        })

        const result = await servicesCollection.insertOne(service)
    }
    finally {
        await client.close();
    }
}

main().catch(console.dir);

app.get('/', (req, res) => {
    res.send('This is checking database');
})

app.listen(port, () => {
    console.log('Checking server',port);
})