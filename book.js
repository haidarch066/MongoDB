const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
};

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        maxlength : 20
    },
    author : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        maxlength : 3
    }
});

const Book = mongoose.model("Book", bookSchema);

// Book.insertMany([
//     {title : "Maths", author : "RD Sharma", price : 230},
//     {title : "English", author : "Demo", price : 560}
// ]);

const book1 = new Book({
    title : "Hindi",
    author : "Arihant", 
    price : 90
});

book1.save();