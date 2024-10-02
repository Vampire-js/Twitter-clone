const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
    name:'String',
    message:'String'
},
{timestamps: true})

let TweetModel = mongoose.model('Tweet', TweetSchema)

module.exports = TweetModel