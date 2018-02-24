const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();
const path = require("path");
const cookieparser = require("cookie-parser");
const app = express(); 
const mongoose = require("mongoose");

const db = require("../models");
const jwt = require("jsonwebtoken");

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '.jpg')
    }
  });

var upload = multer({ storage: storage }).any();


//Initial Dashboard - 
//********************User Test API**************************

router.get("/dashboardAuth", authMiddleware, function(req, res) {
  
//   db.User.find({
//     userName: req.decoded
// }).then((user) => {
//   if(!user){
//     res.json({
//       success: false,
//       message: 'Not Logged In'
//     });
//   }else{
  res.status(200).json({
    success: true,
    message: 'Token Authenticated.'
  });
//   }

// });
});
//****************************************************************/


//UserTest
//********************User Test API**************************

  router.use("/userTest", function(req, res) {
  
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
          myGoal: 125,
          image: ""
        };

        db.User
          .create(result)
          .then(function(dbUser) {
            
            res.send("DB Get Complete ---- User data Logged");
          })
          .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
          });


    console.log("userTest API Hit")

  });
//****************************************************************/


//newUser
//********************New User API**************************
router.post("/api/users", function (req,res) {
  console.log("Consoled ",  req.body.image);
  
  db.User.findOne({
    userName: req.body.username
    // where: {
    //   userName: req.body.username
    // }
  }).then((user) => {
    if(!user) {
      db.User.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        gender: req.body.gender,
        birthDate: req.body.birthdate,
        email: req.body.email,
        userName: req.body.username,
        password: req.body.password,
        height: req.body.height,
        weight: req.body.weight,
        myGoal: req.body.mygoal,
        image: req.body.image
      })
      .then((user) => {

        const payload = {
          id: user.id,
          username: user.userName
        };
    
        var token = jwt.sign(payload, "mySuperSecretSecureKey");
    
        // return the information including token as cookie
        res.cookie("auth", token, {
          expires: new Date(Date.now() + (86400 * 14 * 1000)), //2 weeks
          maxAge: 86400 * 14 * 1000,
          httpOnly: true,
          secure: false // Doesn't need HTTPS
        });
        res.status(200).json({
          message: 'Successfully created user.',
          success: true
        });;
      });
      
    }else{
      res.json({
        message: "Username already exists.",
        success: false
      })
    };
});
});
//****************************************************************/




//updateUserInfo
//********************New User API**************************
router.post("/api/userUpdate", authMiddleware, function (req,res) {
  


db.User.findByIdAndUpdate(  
  // the id of the item to find
  req.decoded.id,

  // the change to be made. Mongoose will smartly combine your existing 
  // document with this change, which allows for partial updates too
  { firstName:  req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    weight: req.body.weight,
    myGoal: req.body.mygoal,
    image: req.body.image
  },

  // an option that asks mongoose to return the updated version 
  // of the document instead of the pre-updated one.
  {new: true},

  // the callback function
  (err, db) => {
  // Handle any possible database errors
      if (err) return res.status(500).send(err);
      return res.send(db);
  }
)
});
//****************************************************************/




//userLogin
//********************Login API**************************
router.post("/api/auth", function (req, res) {
  var userName = req.body.username;
  var userPassword = req.body.password;

  console.log("Consoled " + userName);
  db.User.findOne({
      userName: userName,
      password: userPassword
  }).then((user) => {

    if (!user) {
      return res.status(200).json({
        message: 'User not found.',
        success: false
      });
    };

    const payload = {
      id: user.id,
      username: user.userName
    };

    var token = jwt.sign(payload, "mySuperSecretSecureKey");

    // return the information including token as cookie
    res.cookie("auth", token, {
      expires: new Date(Date.now() + (86400 * 14 * 1000)), //2 weeks
      maxAge: 86400 * 14 * 1000,
      httpOnly: true,
      secure: false // Doesn't need HTTPS
    });

    res.status(200).json({
      success: true
    });

  });

});

//****************************************************************/


//******************************************* */
//// GET user info personalized display
router.get("/api/userinfo", authMiddleware, function (req, res) { //authMiddleware
  console.log(req.decoded);

  db.User.findOne({
    // include: [{
    //   model: db.UserGroup,
    //   required: true,
    //   where: {
    //     userId: req.decoded.id //req.decoded.user.id
    //   }
    // }]
      
      userName: req.decoded.username

  }).then((user) => {
    
    res.status(200).json(user);

  });

});


//getRoutine
//********************Retrieve User's Routines API**************************

router.get("/api/routine", authMiddleware, function (req, res) { 

  db.Routine.find({
        userName: req.decoded.username
  }).then((routine) => {

    res.status(200).json(routine);

  });

});

//****************************************************************/


//postRoutine
//********************Store User's Routines API**************************
router.post("/api/routine", authMiddleware, function (req, res) {
  //console.log("req.decoded.auth:  " + req.decoded.id);
    db.Routine.create({
      userName: req.decoded.username,
      title: req.body.title,
      reps: req.body.reps,
      date: req.body.date,
      caloriesBurned: req.body.calories
    }).then((routine) => {
      res.status(200).json({
        message: "Successfully logged Workout."
      })
    })


  })



//****************************************************************/




//getRoutine
//********************Retrieve User's Routines API**************************

router.get("/api/routine", authMiddleware, function (req, res) { 

  db.Routine.findAll({
        userName: req.decoded.username
  }).then((routine) => {

    res.status(200).json(routine);

  });

});

//****************************************************************/

//getBurned
//********************Retrieve User's Calories Burned API**************************

router.get("/api/burned", authMiddleware, function (req, res) { 

  db.Burned.findAll({
    userName: req.decoded.username
  }).then((Burned) => {

  res.status(200).json(Burned);

  });

});

//****************************************************************/

//postBurned
//********************Store User's Calories Burned API**************************
router.post("/api/consumed", authMiddleware, function (req, res) {
  //console.log("req.decoded.auth:  " + req.decoded.id);
    db.Consumed.create({
      date: req.decoded.date,
      calories: req.body.calories,
    }).then((consumed) => {
      res.status(200).json({
        message: "Successfully logged Calories."
      })
    })


  })



//****************************************************************/

//****************************************************************/


// //getConsumed
// //********************Retrieve User's Calories Consumed API**************************

// //
// router.get("/api/consumed", authMiddleware, function (req, res) { 

//   db.Consumed.findAll({

//       where: {
//         userId: req.decoded.user.id
//       }
//   }).then((consumed) => {

//     res.status(200).json(consumed);

//   });

// });

// //****************************************************************/


// //postConsumed
// //********************Store User's Calories Consumed API**************************
// router.post("/api/consumed", authMiddleware, function (req, res) {
//   console.log("req.decoded.auth:  " + req.decoded.id);

//   db.User.findById(req.decoded.id).then((user) => {


//     db.Consumed.create({
//       eventadmin: user.id,
//       eventname: req.body.eventname,
//       eventgroup: req.body.eventgroup,
//       username: user.username,
//       eventdate: req.body.eventdate,
//       ongoingevent: false
//     }).then((event) => {
//       res.status(200).json({
//         message: "Successfully created group."
//       })
//     })


//   })


// });
// //****************************************************************/



//authMiddleware
//********************Authorization Middleware**************************
  // verify token API
function authMiddleware(req, res, next) {
  // check cookie for auth parameter
  //Look for req.cookies.auth;
  var token = req.cookies.auth;
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, "mySuperSecretSecureKey", function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
        
      }
    });

  } else {

    // if there is no token
    // return to login page
    console.log("I'm redirecting")
    return res.json({
      success: false,
      message: 'Failed to authenticate token.'
    });
  }
}
//****************************************************************/
module.exports = router;