const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tm14z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const connection = mongoose.connect(uri).then(() => console.log("yes ye syes"))

module.exports = connection