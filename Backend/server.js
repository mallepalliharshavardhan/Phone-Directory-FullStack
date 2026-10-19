const express = require('express')
const cors = require('cors')
const connectDB = require("./config/db")
const contact = require('./contact')


const app = express();

connectDB();

// Middlewares
app.use(express.json())
app.use(cors())

const port = 7000;

// create API

app.post("/api/contacts", async(req,res)=>{
    const newContact = await contact.create(req.body);
    res.send(newContact);
});

// Get all contacts

app.get("/api/contacts", async(req,res)=>{
    const newContact = await contact.find();
    res.send(newContact)
});

// Update contacts

app.put("/api/contacts/:id", async(req,res)=>{
    const newContact = await contact.findByIdAndUpdate(req.params.id,req.body);
    res.send(newContact);
});

// delete contact

app.delete("/api/contacts/:id", async(req,res)=>{
    await contact.findByIdAndDelete(req.params.id,req.body);
    res.send({message:"deleted contact"})
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})

