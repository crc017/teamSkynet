import React from 'react';
import Router from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jQuery";
var LoginPage = React.createClass({
  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },
  render: function(){
  
    return(
        <div className="login-page ng-scope ui-view"> 
          <div className="row"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src={require("../../common/images/flat-avatar.png")} className="user-avatar customImg" /> 
              <h1>FitHub</h1>
              <br/>
              <h1><small>Fitness Your Way</small></h1> 
              <form role="form" onSubmit={this.handleLogin} className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input id="username" type="text" className="hvr-bounce form-control input-underline input-lg" placeholder="Username" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="password" id="password" className="hvr-bounce form-control input-underline input-lg" placeholder="Password" /> 
                  </div> 
                </div> 
                <p id = "errorMessage"></p>
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded hvr-bounce-in">Login</button> <br></br>
              <button onClick={this.handlenewUser} type="submit" className="btn btn-white btn-outline btn-lg btn-rounded hvr-bounce-in">New User?</button>
              </form> 
            </div> 
          </div> 
        </div>
      
    );
      
  },
  setLoginID: function(e) {
    this.setState({
      loginID: e.target.value,
      loginError: ''
    });
  },
  setPassword: function(e) {
    this.setState({
      password: e.target.value,
      loginError: ''
    });
  },
  handleLogin: function(e){
    e.preventDefault();
    $.ajax({
      url: "/api/auth",
      method: "POST",
      data: {
        username: $("#username").val().trim(),
        password: $("#password").val().trim()
      }
  }).done(function (data) {
      if (data.success) {
          window.location.href = '#/dashboard/overview';
          this.props.history.pushState(null, '/dashboard/overview');
          
      } else {
          $("#errorMessage").html(data.message);
          //window.location.href = '/login';
      }
  });
    //this.props.history.pushState(null, '/dashboard/overview');
    
    // this.transitionTo('dashboard');
    return false;
  },
  handlenewUser: function(e){
    e.preventDefault();
    this.props.history.pushState(null, '/newUser');
    
    // this.transitionTo('newUser');
    return false;
  }
});
export default LoginPage;


