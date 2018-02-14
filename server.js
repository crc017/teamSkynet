const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cookieparser = require("cookie-parser");
const jwt = require("jsonwebtoken");

var logger = require('morgan');
const PORT = process.env.PORT || 3000;




const db = require("./models");
// const db = process.env.MONGODB_URI || setup.testdb.uri;
// require('./models')(db);
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));
app.use(cookieparser());

// const userTest = require("./routes/userTest");
// const newUser = require("./routes/newUser");
// const userLogin = require("./routes/userLogin");
// const auth = require("./routes/auth")

//Serve up routes for backend api calls
const router = require("./routes/router");
app.use("/", router);
//app.use("/userTest", userTest);
//app.use("/newUser", newUser);
//app.use("/userLogin", userLogin);

//********************//Mongoose Connection//**************************//
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitHub",
  {
    //below line is unnecessary in mongoose version 5
    //useMongoClient: true
  }
);




//create user api
// router.post("/api/users", function (req, res) {

//   db.User.findOne({
//     where: {
//       username: req.body.username
//     }
//   }).then((user) => {
//     if(!user) {
//       db.User.create({
//         firstName: req.body.firstname,
//         lastName: req.body.lastname,
//         gender: req.body.gender,
//         birthDate: req.body.birthdate,
//         email: req.body.email,
//         userName: req.body.username,
//         password: req.body.newpassword,
//         height: req.body.height,
//         weight: req.body.weight,
//         myGoal: req.body.mygoal,
//         image: req.body.image
//       }).then(() => {
//         res.status(200).json({
//           message: 'Successfully created user.',
//           success: true
//         });;
//       });
      
//     }else{
//       res.json({
//         message: "Username already exists.",
//         success: false
//       })
//     };
// });
// });

//*************************************************User Test******************************************************//
// app.get("/userTest", function(req, res) {
 
//       // Use result as example to save test user data
//       var result = {
//         firstName: "Leila",
//         lastName: "Organa",
//         gender: "female",
//         birthDate: 1/1/2001,
//         email: "leila@gmail.com",
//         userName: "leila",
//         password: "leila",
//         height: 55,
//         weight: 135,
//         myGoal: 125,
//         image: ""
//       };

//       db.User
//         .create(result)
//         .then(function(dbUser) {
//           // If we were able to successfully scrape and save an Article, send a message to the client
//           res.send("DB Get Complete ---- User data Logged");
//         })
//         .catch(function(err) {
//           // If an error occurred, send it to the client
//           res.json(err);
//         });

//   });

//*************************************************************************************************************//






// //Retrieve pre-defined workout routines api
// router.get("/api/routines", authMiddleware, function (req, res) { //authMiddleware

//   db.Routines.findAll({
//     include: [{
//       model: db.Workout,
//       required: true,
//       where: {
//         userId: req.decoded.user.id
//       }
//     }]
//   }).then((groups) => {

//     res.status(200).json(groups);

//   });

// });


// //Retrieve pre-defined workouts api
// router.get("/api/Workouts", authMiddleware, function (req, res) { //authMiddleware

//   db.Workouts.findAll({}).then((events) => {

//     res.status(200).json(events);

//   });

// });


// //create routines api
// router.post("/api/routine", function (req, res) {

//   //Use req.decoded.userid
//   db.Routine.create({
//     name: req.body.name,
//     type: req.body.type
//   }).then((group) => {

//     var workouts = [];

//     for (var i = 0; i < req.body.friends.length; i++) {
//       workouts.push({
//         UserId: req.body.friends[i].id,
//         GroupId: group.id
//       });
//     }

//     db.WorkoutRoutines.bulkCreate(workouts).then(() => {

//       res.status(200).json({
//         message: "Nice Workout Routine."
//       });

//     });

//   })
// });



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
