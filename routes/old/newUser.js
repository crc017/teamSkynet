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




//create user api
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



module.exports = router;
