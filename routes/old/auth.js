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



//********************Auth Middleware*************************** */
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
//******************************************************** */

module.exports = router;
