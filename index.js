const mongoose = require("mongoose");
const express = require("express");
const port = 5000;
const app = express();
const Person = require("./models/person");
const url =
  "mongodb+srv://wafi:54900777@cluster0.ewu3a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url, () => {
  console.log("conected successfully to the databse");
});
app.listen(port, () => {
  console.log(`the server is running on the port ${port}`);
});
const personOne = new Person({
  name: "siwar",
  age: 26,
  favouriteFood: ["bureger", "pizza"],
});
const personTwo = new Person({
  name: "wafi",
  age: 29,
  favouriteFood: ["pizza", "tacos"],
});
/* person
  .save()
  .then((data) => {
    console.log("it is saved" + data);
  })
  .catch((error) => {
    console.log(error);
  });
personTwo
  .save()
  .then((data) => {
    console.log("it is saved" + data);
  })
  .catch((error) => {
    console.log(error);
  }); */
//pour remplacer then et catch -------------
/*  const save=async(data)=>{
      try {
           await data.save()
      } catch (error) {
          console.log(error)
      }
  }
save(personOne)
save(personTwo) */
//---------------------------------
/* const arrayOfPeople = [
  { name: "oussama", age: 28, favouriteFood: ["tacos", "pizza"] },
  { name: "ali", age: 28, favouriteFood: ["Humberger"] },
  { name: "hamza", age: 19, favouriteFood: ["salade", "pasta"] },
];
//------enregistrer les data
 Person.create(arrayOfPeople)
  .then(() => {
    console.log("the array is saved succeffly");
  })
  .catch((error) => {
    console.log(error);
  }) */ /* ;  */
//-----donne moi les data dans la base de donné que vous avez enregistre
/* Person.find()
  .then((response) => {
    console.log("this is your dat from  the database" + response);
  })
  .catch((error) => {
    console.log(error);
  }); */
/* Person.findOne({ name: "oussama" })
  .then((data) => {
    console.log("this is the data you search " + data);
  })
  .catch((error) => {
    console.log(error);
  });
Person.findById({ _id: "61a8d2f59f3e521e7ddf3264" })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  }); */
//find and update then save again
/* Person.findOneAndUpdate(
  { name: "oussama" },
  { name: "wafi", age: 20, favouriteFood: ["salade"] },
  {
    new: true,
    upsert: true,
  }
).then((data) => {
  console.log(data);
});*/

/*     Person.findOneAndUpdate(
  { name: "oussama" },
  { name: "wafi", age: 20, favouriteFood: ["salade"] },
  {
    new: true,
    upsert: true,
  }
) */
//delete
/* Person.findByIdAndRemove({_id:'61a8dda880db4999ae5a6c57'}).then(()=>{ 
  console.log('the data is repoved')
})
.catch((error)=>{
  console.log()
}) */

/* Person.findOne({ name: "ali" }).then((data) => {
  if (data) {
    data.name = "wafi";
    console.log(data);
    data.save().then((data) => {
      console.log(data);
    });
  }
  else{
    console.log('no found')
  }
});
const findUpdate=async()=>{
  try {
   const foundedData=await Person.findOne({ name: x });
   foundedData.name='wafi'
   await foundedData.save()

  } catch (error) {
    console.log(error)
  }
} */
Person.remove().then(()=>{
  console.log('yep deleted')
})