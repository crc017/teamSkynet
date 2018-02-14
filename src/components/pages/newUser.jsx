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
                <input type="text" className="form-control input-md formin" placeholder="John" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-3">
              <input type="text" className="form-control input-md formin" placeholder="Smith" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Birth Date</label>
               <div className="col-sm-3">
                <input type="text" className="form-control input-md formin" placeholder="12/24/1932" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-3">
              <input type="text" className="form-control input-md formin" placeholder="" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Username</label>
               <div className="col-sm-3">
                <input type="text" className="form-control input-md formin" placeholder="JSmith" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-3">
              <input type="text" className="form-control input-md formin" placeholder="12345" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
               <div className="col-sm-3">
                <input type="text" className="form-control input-md formin" placeholder="JSmith@Gmail.com" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Height</label>
                <div className="col-sm-3">
              <input type="text" className="form-control input-md formin" placeholder="5'9" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Weight</label>
               <div className="col-sm-3">
                <input type="text" className="form-control input-md formin"  placeholder="186" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Goal Weight</label>
                <div className="col-sm-3">
              <input type="text" className="form-control input-md formin"  placeholder="162" /> 
            </div>
          </div>
        </div> 
        <button onClick={this.handleNewLogin} type="submit" id="newUser" className="btn btn-white btn-outline btn-lg btn-rounded">Accept</button><br></br>  
      </form> 
        
      </div>
      
      
    );
  },

  handleNewLogin: function(e){

    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');
    
    // this.transitionTo('dashboard');

    return false;

  },
  }
);



export default NewUser;

