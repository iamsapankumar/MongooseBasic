const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const schema = mongoose.Schema;
//connect
mongoose.connect('mongodb://localhost:27017/Myappy')
const db = mongoose.connection;
//check connection 
db.once('open', function(){
    console.log('Connection succesfull')
})
//check for error Db
db.on('error', function (err){
    console.log('Error', err)
})
const carSchema = new schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
})
const Car = mongoose.model('Car', carSchema)
const addCar = new Car({
    brand: "Ford",
    model: "V2s",
    year: 2018,
    avail: true

})
addCar.save((err, doc)=>{
    if(err) return console.log(err)
    console.log(doc)
})