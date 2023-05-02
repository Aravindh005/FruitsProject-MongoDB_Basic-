const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB',{useNewUrlParser:true});

const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
        required: [true, "enter your name"]
    },
    rating :{
        type:Number,
        min: 1,
        max:10
    },
    review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit =new Fruit({
    name: "apple",
    rating: 7,
    review: "bloody sweet"
});



const personSchema= new mongoose.Schema({
    name: String,
    age: Number,
    favFruit: fruitSchema
});

const person= mongoose.model("person",personSchema);

const person1= new person({
    name:"John",
    age:29
});

const gauva= new Fruit({
    name: "gauva",
    rating: 6,
    review: "i mean its alright"
});

const banana = new Fruit({
    name: "banana",
    rating: 9,
    review: "first class"
});

const papaya = new Fruit({
    name: "papaya",
    rating: 9,
    review: "first class"
});

const person2= new person({
    name:"Sam",
    age:21,
    favFruit: banana
})




// Fruit.insertMany([gauva,banana,papaya]);

// Fruit.find().then(function (err, fruits) {
//     if(err){
//         console.log(err);
//     }else{
//         fruits.forEach(function(fruit){
//             console.log(fruit.name);
//         })
      
//     }
// })

person.find({}).then(function(person){
  
        console.log(person);

    // fruits.forEach(function(fruit){
    //  console.log(fruit.name);
    
}).catch(err => {

  console.log(err);
  
});

person.deleteMany({name:"Sam"}).catch(err => {

    console.log(err);
    
  });

// Fruit.deleteOne({_id:"64119101b4bd058ccc7c1fcc"},{name:"watermelon"}).catch(err => {

//     console.log(err);
    
//   });



// Fruit.insertMany([gauva,banana,papaya])
//       .then(function () {
//         console.log("Successfully saved defult items to DB");
//       })
//       .catch(function (err) {
//         console.log(err);
//       });