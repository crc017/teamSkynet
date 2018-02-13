const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cookieparser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const routes = require("./routes");
var logger = require('morgan');
const PORT = process.env.PORT || 3000;




const db = require("./models");
// const db = process.env.MONGODB_URI || setup.testdb.uri;
// require('./models')(db);

const router = express.Router();
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
// Serve up static assets (usually on heroku)

//Mongo db action example

// const dbu = express.Router();

// require('./routes/dbu')(dbu);



//Important*********
//Do not delete
// --------------------------------------- 
// router.route("/")
//   .get(usersController.findAll)
//   .post(usersController.create);
//   console.log("we have data");
// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

// //All apis before this:
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// -----------------------------------------------------

app.use(express.static("client/build"));

//********************//Mongoose Connection//**************************//
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitHub",
  {
    useMongoClient: true
  }
);
//first api to save user to db
app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with request
  //******************axios call **** save space for ajax or axios if scraping */
    // axios.get("https://www.investopedia.com/news/").then(function(response) {
    //   // Then, we load that into cheerio and save it to $ for a shorthand selector
    //   var $ = cheerio.load(response.data);

    // Now, we grab every h2 within an article tag, and do the following:

      // Use result as example to save test user data
      var result = {
        firstName: "Leila",
        lastName: "Organa",
        gender: "female",
        birthDate: 1/1/2001,
        email: "leila@gmail.com",
        userName: "leila",
        password: "leila",
        height: 55,
        weight: 135,
        myGoal: 125
      };

      // Add the text and href of every link, and save them as properties of the result object
         //***************wrap below in each function to loop through multiple data entries from ajax/axois call   
            // result.title = $(this)
            //   .children("a")
            //   .text();
            // result.link = $(this)
            //   .children("a")
            //   .attr("href");
         //******************* end of each() wrap */
      // Create a new Article using the `result` object built from scraping
      db.User
        .create(result)
        .then(function(dbUser) {
          // If we were able to successfully scrape and save an Article, send a message to the client
          res.send("DB Get Complete ---- User data Logged");
        })
        .catch(function(err) {
          // If an error occurred, send it to the client
          res.json(err);
        });

  });




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
