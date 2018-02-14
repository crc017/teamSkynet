'use strict';

///////////////////////////////////////////////////////////////
//////// process db http message for agents and products /////
/////////////////////////////////////////////////////////////

const bodyParser =  			require('body-parser')
const api =         			require('../controllers/usersController')
const express = require('express')
const router = express.Router();
const path = require("path");

const app = express(); 
const mongoose = require("mongoose");

const db = require("../models");
const jwt = require("jsonwebtoken");



//Authenticate API - login.onclick execute
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


module.exports = router;
