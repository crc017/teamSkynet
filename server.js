const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const path = require("path");
const cookieparser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const logger =      require("morgan");
const PORT = process.env.PORT || 3000;

<<<<<<< HEAD
var myDB ='mongodb://localhost/project3';


const db = require("./models/users");
=======
//const db = require("./models");
>>>>>>> 5a09a58cd120c687ca77dbabb4f18c76579313fc
const router = express.Router();
const app = express();


const usersController = require("./controllers/usersController");
const mongoose = require("mongoose");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));

//Mongo db action example
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);
  console.log("we have data");
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

//All apis before this:
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//********************//Mongoose Connection//**************************//
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);





//Authenticate API - login.onclick execute
// router.post("/api/auth", function (req, res) {
//   var userName = req.body.userName;
//   var userPassword = req.body.password;


//   db.User.findOne({
//     where: {
//       username: userName,
//       password: userPassword
//     }
//   }).then((user) => {

//     if (!user) {
//       return res.status(200).json({
//         message: 'User not found.',
//         success: false
//       });
//     };

//     const payload = {
//       id: user.id,
//       username: user.userName
//     };

//     var token = jwt.sign(payload, "mySuperSecretSecureKey");

//     // return the information including token as cookie
//     res.cookie("auth", token, {
//       expires: new Date(Date.now() + (86400 * 14 * 1000)), //2 weeks
//       maxAge: 86400 * 14 * 1000,
//       httpOnly: true,
//       secure: false // Doesn't need HTTPS
//     });

//     res.status(200).json({
//       success: true
//     });

//   });

// });


// //create user api
// router.post("/api/users", function (req, res) {

//   db.User.findOne({
//     where: {
//       username: req.body.username
//     }
//   }).then((user) => {
//     if(!user) {
//       db.User.create({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         username: req.body.username,
//         age: req.body.age,
//         email: req.body.email,
//         password: req.body.newpassword,
//         phone: req.body.phonenumber,
//         image: req.body.exampleFormControlFile1,
//         age: req.body.age
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

// //Retrieve pre-defined workout routines api
// router.get("/api/routines", authMiddleware, function (req, res) { //authMiddleware

//   db.Routines.findAll({
//     include: [{
//       model: db.Workout,
//       required: true,
//       where: {
//         userId: 1 //req.decoded.user.id
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
// Serve application file depending on environment

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
