'use strict';

///////////////////////////////////////////////////////////////////////
///////           load a test data set of clients if needed    ////////
/////////////////////////////////////////////////////////////////////

const User =              require('../Users')
const mongoose =            require('mongoose')
const testUsers =         require('../data/userData')

const limit = 1;

function getUsers() {
      // USE getagents.js as a model
      // this function seeds the mongo collection clients with test data

      User.find({}).limit(limit).exec(function (err, collection){
        if (collection.length === 0) {
          // iterate over the set of agents for initialization and create entries
          testUsers.map(function(user) {
              let newClient = new User(User)
              newUser.save(function (err, data) {
                if(err) {
                  console.log(err);
                  return res.status(500).json({msg: 'internal server error'});
                }
              })
            })
          console.log('Test Users Initialized in MongoDB')
          return
        }
        else {
          console.log('Users Exist in MongoDB')
        }
      })
      }

module.exports = {
  getUsers: getUsers
}
