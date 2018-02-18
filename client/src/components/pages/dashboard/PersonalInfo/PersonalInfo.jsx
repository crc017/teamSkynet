import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import $ from "jQuery";

var person = React.createClass({

  componentDidMount: function () {
    //setTimeout(this.load, 1000);

    $.ajax({
      url: "/api/userinfo",
      method: "GET"
  }).done(function (user) {
      //var objurl = window.URL.createObjectURL(new Blob([user.image]));
      //var img = new Image();
      //img.src = objurl;
      //img.onload = function() {
      // do something with your image

      $("#firstname").html("First Name: " + user.firstName);
      $("#lastname").html("Last Name: " + user.lastName);
      $("#goals").html("Goals: " + user.myGoal + " lbs");
      // $("#userImage").attr({
      //     "src": user.image
      // });

  });
  },
    render: function() {
      return (
        <div className="overview-page" key="calendar">  
          <h2>Your Personal Info</h2> 
          <Jumbotron id='profileJumbo'> 
            <h2 id="firstname">First Name:</h2><br />
            <h2 id="lastname">Last Name:</h2><br />
            <h2 id="goals" >Goals:</h2><br /> 
          </Jumbotron> 
        </div>

      );
    },


});

export default person;