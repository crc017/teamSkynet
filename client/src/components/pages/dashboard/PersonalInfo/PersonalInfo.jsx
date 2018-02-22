import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import $ from 'jQuery';

var person = React.createClass({

  getInitialState: function() {
    return {
      tab: 'personal'
    }
  },

  handleChangeInfo: function(evt){
      this.setState({
        tab: 'info'
      })
  },

  handleChangePersonal: function(evt){
    this.setState({
      tab: 'personal'
    })
  },
  
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

      $("#fullName").html(user.firstName + ' ' + user.lastName);
      $("#userName").html("User Name: " + user.userName);
      $("#weight").html("Weight: " + user.weight + " lbs");
      $("#goals").html("Goals: " + user.myGoal + " lbs");
      // $("#userImage").attr({
      //     "src": user.image
      // });

  });
  },
  render: function() {
    return (
<div>
      {this.state.tab === 'personal' &&
      <div className="overview-page" key="calendar">  
        <h2>Your Personal Info</h2>
        
        <Jumbotron id='profileJumbo'> 
        <div className="card row" id="procard">
        <div className="card-body col-sm-6">
            <img className="card-img-top" id="imgattr" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg" alt="Card image"></img>
              <h2 id="fullName" className="card-title">John Doe</h2>
              <hr></hr>
              <p id="userName" className="card-text">User Name: JDoe</p>
              <p id="weight" className="card-text">Weight: 210lb</p>
              <p id="goals" className="card-text">Desired Weight: 185lbs</p>
            </div>
            <div className="col-sm-6">
                <h2>My Personal Goals</h2>
            </div>
        </div>
        <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded" onClick={this.handleChangeInfo}>Edit Info</button>
        </Jumbotron> 
      </div>
    }
    {this.state.tab === 'info' &&
  <div>
    test
  <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded" onClick={this.handleChangePersonal}>Done</button>
</div>
  }
</div> 
    );
  }
});
export default person;