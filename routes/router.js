const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();
const path = require("path");

const app = express(); 
const mongoose = require("mongoose");

const db = require("../models");
const jwt = require("jsonwebtoken");


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
            // If we were able to successfully scrape and save an Article, send a message to the client
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
router.post("/api/users", function (req, res) {

  db.User.findOne({
    where: {
      username: req.body.username
    }
  }).then((user) => {
    if(!user) {
      db.User.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        gender: req.body.gender,
        birthDate: req.body.birthdate,
        email: req.body.email,
        userName: req.body.username,
        password: req.body.newpassword,
        height: req.body.height,
        weight: req.body.weight,
        myGoal: req.body.mygoal,
        image: req.body.image
      }).then(() => {
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




//userLogin
//********************Login API**************************
router.post("/api/auth", function (req, res) {
  var userName = req.body.userName;
  var userPassword = req.body.password;


  db.User.findOne({
    where: {
      username: userName,
      password: userPassword
    }
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


//getBurned
//********************Retrieve User's Calories Burned API**************************

router.get("/api/burned", authMiddleware, function (req, res) { 

  db.Burned.findAll({
    include: [{
      model: db.UserGroup,
      required: true,
      where: {
        userId: 1 //req.decoded.user.id
      }
    }]
  }).then((burned) => {

    res.status(200).json(burned);

  });

});

//****************************************************************/

//postBurned
//********************Store User's Calories Burned API**************************
router.post("/api/burned", authMiddleware, function (req, res) {

  //Use req.decoded.userid
  db.burned.create({
    name: req.body.name,
    type: req.body.type
  }).then((burned) => {

    var usergroups = [];

    for (var i = 0; i < req.body.friends.length; i++) {
      usergroups.push({
        UserId: req.body.friends[i].id,
        GroupId: group.id
      });
    }

    db.UserGroup.bulkCreate(usergroups).then(() => {

      res.status(200).json({
        message: "Successfully created group."
      });

    });

  })
});
//****************************************************************/


//getConsumed
//********************Retrieve User's Calories Consumed API**************************

//
router.get("/api/consumed", authMiddleware, function (req, res) { 

  db.Consumed.findAll({

      where: {
        userId: req.decoded.user.id
      }
  }).then((consumed) => {

    res.status(200).json(consumed);

  });

});

//****************************************************************/


//postConsumed
//********************Store User's Calories Consumed API**************************
router.post("/api/consumed", authMiddleware, function (req, res) {
  console.log("req.decoded.auth:  " + req.decoded.id);

  db.User.findById(req.decoded.id).then((user) => {


    db.Consumed.create({
      eventadmin: user.id,
      eventname: req.body.eventname,
      eventgroup: req.body.eventgroup,
      username: user.username,
      eventdate: req.body.eventdate,
      ongoingevent: false
    }).then((event) => {
      res.status(200).json({
        message: "Successfully created group."
      })
    })


  })


});
//****************************************************************/




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
    res.redirect('/');
  }
}
//****************************************************************/
module.exports = router;