import React from 'react';
import Router from 'react-router';
import {Panel, Input, Button, Jumbotron, Modal} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jQuery";


var NewUser = React.createClass({
    
  render: function() {
    return (
      <div className="login-page ng-scope ui-view">  
        <h2>Your Personal Info</h2> 
        <form role="form" onSubmit={this.NewLogin} className="ng-pristine ng-valid"> 
        <div className="form-content"> 
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">First Name</label>
               <div className="col-sm-3">
                <input id="firstName" type="text" className="form-control input-md formin" placeholder="Jo" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-3">
              <input id="lastName" type="text" className="form-control input-md formin" placeholder="Smith" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Birth Date</label>
               <div className="col-sm-3">
                <input id="birthdate" type="text" className="form-control input-md formin" placeholder="12/24/1932" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-3">
              <input id="gender" type="text" className="form-control input-md formin" placeholder="" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Username</label>
               <div className="col-sm-3">
                <input id="userName" type="text" className="form-control input-md formin" placeholder="JSmith" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-3">
              <input id="password" type="text" className="form-control input-md formin" placeholder="12345" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
               <div className="col-sm-3">
                <input id="email" type="text" className="form-control input-md formin" placeholder="JSmith@Gmail.com" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Height</label>
                <div className="col-sm-3">
              <input id="height" type="text" className="form-control input-md formin" placeholder="5'9" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Weight</label>
               <div className="col-sm-3">
                <input id="weight" type="text" className="form-control input-md formin"  placeholder="186" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Goal Weight</label>
                <div className="col-sm-3">
              <input id="mygoal" type="text" className="form-control input-md formin"  placeholder="162" /> 
            </div>
          </div>
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Profile Picture:</label>
          <input type="file" className="form-control-file" id="file" />
       
        </div> 
        
        <p id="createError"></p>
        <button onClick={this.handleNewLogin} type="submit" id="newUser" className="btn btn-white btn-outline btn-lg btn-rounded">Accept</button><br></br>  
      </form> 
        
      </div>
      
      
    );
  },

  handleNewLogin: function(e){
    console.log("Consoled: " + $("#firstName").val().trim());
  //   class user {
  //     constructor(firstname, lastname, username, newpassword, passwordcheck, email, birthday, phonenumber, exampleFormControlFile1) {
  //         this.firstname = firstname;
  //         this.lastname = lastname;
  //         this.username = username;
  //         this.newpassword = newpassword;
  //         this.passwordcheck = passwordcheck;
  //         this.email = email;
  //         this.birthday = birthday;
  //         this.phonenumber = phonenumber;
  //         this.exampleFormControlFile1 = exampleFormControlFile1;
  //     }
  // }
  //   var firstname = "";
  //   var lastname = "";
  //   var gender = "";
  //   var birthdate = "";
  //   var email = "";
  //   var username = "";
  //   var password = "";
  //   var height = "";
  //   var weight = "";
  //   var mygoal = "";

    e.preventDefault();
    $("#createError").html('');
    
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
//XXXXxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
        // firstname = $("#firstName").val().trim();
        // lastname = $("#lastName").val().trim();
        // gender = $("#gender").val().trim();
        // birthdate = $("#birthdate").val().trim();
        // email = $("#email").val().trim();
        // username = $("#userName").val().trim();
        // passwrord = $("#password").val().trim();
        // height = $("#height").val().trim();
        // weigth = $("#weight").val().trim();
        // mygoal = $("#mygoal").val().trim();
  
        //passwordcheck = $("#passwordCheck").val().trim();
        
    //Option to implement below three lines for password confirm filed.
        // if(newpassword != passwordcheck) {
        //     $("#createError").html("Password and Confirm Password do not match.");
        // } else{
          fd.append('file',files);
            $.ajax({
                method: "POST",
                url: "/api/users",
                data: {
                  firstname: $("#firstName").val().trim(),
                  lastname: $("#lastName").val().trim(),
                  gender: $("#gender").val().trim(),
                  birthdate: $("#birthdate").val().trim(),
                  email: $("#email").val().trim(),
                  username: $("#userName").val().trim(),
                  password: $("#password").val().trim(),
                  height: $("#height").val().trim(),
                  weight: $("#weight").val().trim(),
                  mygoal: $("#mygoal").val().trim(),
                  image: $("profilePic").val()

 //XXXXxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//                   
                  // firstname: firstname,
                    // lastname: lastname,
                    // gender: gender,
                    // birthdate: birthdate,
                    // email: email,
                    // username: username,
                    // password: password,
                    // height: height,
                    // weight: weight,
                    // mygoal: mygoal
                },
                dataType: "json"
            }).done(function (data) {
                //window.location.href = '/';
               
                if(!data.success){
                $("#createError").html(data.message);
                } else{
                    $("#createError").html(data.message);
                    //$("#userForm")[0].reset();
                    window.location.href = '/';
                    this.props.history.pushState(null, '/dashboard/overview');
                };
            }); 
    } else{
        $("#createError").html("Please complete all fields of form.");
    };
    //this.props.history.pushState(null, '/dashboard/overview');
    
    // this.transitionTo('dashboard');

    return false;

  },
  }
);



export default NewUser;

