'use strict';

///////////////////////////////////////////////////////////////
//////// process db http message for agents and products /////
/////////////////////////////////////////////////////////////

const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();
const path = require("path");

const app = express(); 
const mongoose = require("mongoose");

const db = require("../models");
const jwt = require("jsonwebtoken");



const userTest = () => {
  //router.use(bodyParser.json())
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

  })
};


module.exports = userTest;
