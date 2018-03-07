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
/*const addCar = new Car({
    brand: "BMW",
    model: "V2s",
    year: 2018,
    avail: true
})
addCar.save((err, doc)=>{
    if(err) return console.log(err)
    console.log(doc);
})*/
/*
Car.find((err, doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})*/
/*
Car.find({brand:"BMW"},(err, doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})*/
//using id
/*Car.find({_id:"5a9fa4288ad319259c62d1c2"},(err, doc)=>{
    if(err) return console.log(err)
    console.log(doc)
})*/
//findOne functon
/*Car.findOne({brand:"BMW"}, (err, doc)=>{
    if(err) return console.log(err)
    console.log(doc)
})*/
/* findById */
/*Car.findById("5a9fa4288ad319259c62d1c2",(err, doc)=>{

    if(err) return console.log(err)
    console.log(doc)
})*/
/*How to Removing Data*/ 
//findOneAndRemove
//findByIdAndRemove
//remove

/*Car.findOneAndRemove({brand:"BMW"},(err, doc)=>{   //only one document will be removed
    if(err) return console.log(err)
    console.log(doc)
})*/
/*
Car.findByIdAndRemove("5a9f9788be0e5c12905fbd84",(err, doc)=>{ //pass the Id
    if(err) return console.log(err)
    console.log(doc)
})*/
/*
Car.remove({brand:"BMW"}, (err, doc)=>{   
    if(err)  return console.log(err)
    console.log(doc)
})*/
/*Udpate*/
//update
//01 Car.update({_id:"5a9fb880c9589cf8b9fdfa33"})
//02 Car.update({_id:"5a9fb880c9589cf8b9fdfa33"},{})
/*Car.update({_id:"5a9fb880c9589cf8b9fdfa33"},{
    $set:{
        year:2011
    }
}, (err, doc)=>{
    console.log(doc)
})*/
/*
Car.findByIdAndUpdate("5a9fb880c9589cf8b9fdfa33",{
    $set:{
        year:2050
    }},{new:true},
    (err, doc)=>{
        console.log(doc)
    })
*/
Car.findById("5a9fb880c9589cf8b9fdfa33",(err, car)=>{
if(err) return console.log(err)
car.set({
    year:2000
})
car.save((err, doc)=>{
    console.log(doc)
})
})










