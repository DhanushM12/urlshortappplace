const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

mongoose.connect('mongodb://0.0.0.0:27017/url_short_placement')

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Problem in connection"))

db.on('open', function(){
    console.log("Connected successfully to MongoDB")
})

module.exports = db;