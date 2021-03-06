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
      }),
      $.ajax({
        url: "/api/userinfo",
        method: "GET"
    }).done(function (user) {

        //Prefill values for edit info input boxes
        $("#updateFirstName").val(user.firstName);
        $("#updateLastName").val(user.lastName);
        $("#updateEmail").val(user.email);
        $("#updatePassword").val(user.password);
        $("#updateWeight").val(user.weight);
        $("#updateGoals").val(user.myGoal);
        $("#updateImage").val(user.image);
  
    });
  },
  handleChangePersonal: function(evt){
    
    function validateForm() {
      var isValid = true;
      $('.form-control').each(function() {
        if ( $(this).val() === '' ){
          isValid = false;
        }
      });
    return isValid;
  };
  

  if(validateForm()){

          $.ajax({
              method: "POST",
              url: "/api/userUpdate",
              data: {
                firstname: $("#updateFirstName").val().trim(),
                lastname: $("#updateLastName").val().trim(),
                email: $("#updateEmail").val().trim(),
                password: $("#updatePassword").val().trim(),
                weight: $("#updateWeight").val().trim(),
                mygoal: $("#updateGoals").val().trim(),
                image: $("#updateImage").val().trim(),
              },
          }).done(function (data) {

             console.log(data);
          });

  } else{
      $("#createError").html("Please complete all fields of form.");
  };
          $.ajax({
            url: "/api/userinfo",
            method: "GET"
        }).done(function (user) {
            
            $("#fullName").html(user.firstName + ' ' + user.lastName);
            $("#userName").html("User Name: " + user.userName);
            $("#weight").html("Weight: " + user.weight + " lbs");
            $("#goals").html("Goals: " + user.myGoal + " lbs");
            $("#imgattr").attr("src",user.image);
        });
    
    
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
      $("#fullName").html(user.firstName + ' ' + user.lastName);
      $("#userName").html("User Name: " + user.userName);
      $("#weight").html("Weight: " + user.weight + " lbs");
      $("#goals").html("Goals: " + user.myGoal + " lbs");
      $("#imgattr").attr("src",user.image);
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
    <div className="form-content"> 
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" id="fName">First Name</label>
               <div className="col-sm-3">
                <input id="updateFirstName" type="text" className="form-control input-md formin"/>
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label" id="lName">Last Name</label>
                <div className="col-sm-3">
              <input id="updateLastName" type="text" className="form-control input-md formin"/> 
            </div>
          </div>

          <div className="form-group row"> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Password</label>
                <div className="col-sm-3">
              <input id="updatePassword" type="text" className="form-control input-md formin" placeholder="*****" /> 
            </div>
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Email</label>
               <div className="col-sm-3">
                <input  type="email" className="form-control input-md formin" id="updateEmail"/>
                  </div> 
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Weight</label>
               <div className="col-sm-3">
                <input type="number" className="form-control input-md formin" id="updateWeight"/>
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Goal Weight</label>
                <div className="col-sm-3">
              <input type="number" className="form-control input-md formin" id="updateGoals"/> 
            </div>
            
          </div>
          <div className="form-group row"> 
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Profile Image</label>
                <div className="col-sm-3">
                  <input type="text" className="form-control input-md formin" id="updateImage"/> 
                </div>
          </div>
          {/* <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Profile Picture:</label>
          <input name="file" type="file" className="form-control-file" id="file" /> */}
        </div> 
  <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded" onClick={this.handleChangePersonal}>Done</button>
</div>
  }
</div> 
    );
  }
});
export default person;


