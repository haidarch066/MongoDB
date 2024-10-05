const express = require('express');
const app = express();
const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//     name : "Haidar",
//     email : "haidar@yahoo.com",
//     age : 22
// });

// user1.save().then((res)=>{
//    console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name : "Anas", email : "123@gmail.com", age : 45},
//     {name : "Choudhary", email : "675@gmail.com", age : 19}
// ]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//      console.log(err);
// });

// User.findByIdAndUpdate("66f57f2bcfa99c25571997d8", {name : "Ali", email : "ali@yahoo.com"}, {new : true})
//   .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//      console.log(err);
// });

// User.deleteOne({name : "Anas"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
