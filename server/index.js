const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config()
const connection = require('./db/main');
const TweetModel = require('./db/models/TweetModel');
const UserModel = require('./db/models/UserModel');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


//Defining the endpoints

app.get('/', async(req, res) => {
    const tweets = await TweetModel.find({})

    res.json(tweets)

})

app.post('/tweet', async(req, res) => {
    const username = await req.body.user
    const msg = await req.body.msg
    console.log(username, msg)

    
    let post = await TweetModel.create({
        name: username,
        message: msg
    })
   res.send(post)
})

app.post('/signup', async(req, res) => {
    let users = await UserModel.find({})
    if(!users.find(e => e.email == req.body.email)){
        let user = await UserModel.create({
            email: req.body.email,
            password: req.body.password
        })
        res.send(user)
    }else{
        res.json("An account with that email exists!")
    }
  

})

app.post('/login', async(req, res) => {
    let users = await UserModel.find({})
    if(users.find(e => e.email == req.body.email && e.password == req.body.password)){
        res.json("user found!")
    }else{
        res.json("User not found!")
    }
})

app.listen(process.env.PORT, () => {
    console.log("server is up!!")
})