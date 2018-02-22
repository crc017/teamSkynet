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
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" id="fName">First Name</label>
               <div className="col-sm-3">
                <input id="firstName" type="text" className="form-control input-md formin" placeholder="John" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label" id="lName">Last Name</label>
                <div className="col-sm-3">
              <input id="lastName" type="text" className="form-control input-md formin" placeholder="Smith" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" id="birth">Birth Date</label>
               <div className="col-sm-3">
                <input id="birthdate" type="date" className="form-control input-md formin" placeholder="12/24/1932" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label radio" id="gen">Gender</label>
                <div className="col-sm-3">
                  <select className="form-control formin" id="sel1">
                    <option>Male</option>
                    <option>Female</option>
                  </select> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Username</label>
               <div className="col-sm-3">
                <input id="userName" type="text" className="form-control input-md formin" placeholder="JSmith" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Password</label>
                <div className="col-sm-3">
              <input id="password" type="text" className="form-control input-md formin" placeholder="12345" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Email</label>
               <div className="col-sm-3">
                <input  type="email" className="form-control input-md formin" id="email" placeholder="JSmith@Gmail.com" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Height</label>
                <div className="col-sm-1">
              <label><input type="number" className="form-control input-md formin" min="1" max="12" placeholder="5" id="feet"/>Feet</label>
              </div>
              <div className="col-sm-1">
              <label><input type="number" className="form-control input-md formin" max="11" placeholder="9" id="inches"/>Inches</label>  
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Weight</label>
               <div className="col-sm-3">
                <input type="number" className="form-control input-md formin"  placeholder="186" id="weight"/>
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Goal Weight</label>
                <div className="col-sm-3">
              <input type="number" className="form-control input-md formin"  placeholder="162" id="mygoal"/> 
            </div>
          </div>
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Profile Picture:</label>
          <input name="file" type="file" className="form-control-file" id="file" />
        </div> 
        <button onClick={this.handleNewLogin} type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Accept</button><br></br>  
      </form> 
        
      </div>
      
      
    );
  },
  handleNewLogin: function(e){
    

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
      
      var reader = new FileReader();
      console.log($("#file")[0]);
      var file = reader.readAsDataURL($('#file')[0].files[0]);
      var fd = new FormData();
      fd.append('file', file,);
      console.log("File", file, $('#file'));
      var heightInches = (parseInt($("#feet").val().trim())*12 + parseInt($("#inches").val().trim()))
      // console.log("Consoled: " + fd.get('file'));
      // var userimage = $("#userName").val().trim();

            $.ajax({
                method: "POST",
                url: "/api/users",
                data: {
                  firstname: $("#firstName").val().trim(),
                  lastname: $("#lastName").val().trim(),
                  gender: $("#sel1").val().trim(),
                  birthdate: $("#birthdate").val().trim(),
                  email: $("#email").val().trim(),
                  username: $("#userName").val().trim(),
                  password: $("#password").val().trim(),
                  height: heightInches.toString(),
                  weight: $("#weight").val().trim(),
                  mygoal: $("#mygoal").val().trim(),
                  image: file
                },
            }).done(function (data) {

               
                if(!data.success){
                $("#createError").html(data.message);
                } else{
                    $("#createError").html(data.message);

                    window.location.href = '/';
                    //this.props.history.pushState(null, '/dashboard/overview');
                };
            });

    } else{
        $("#createError").html("Please complete all fields of form.");
    };

   
    return false;

  }
  }
);
export default NewUser;