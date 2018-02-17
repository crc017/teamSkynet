import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import ReactDOM from 'react-dom';


var person = React.createClass({
  render: function() {
    return (
      <div className="overview-page" key="calendar">  
        <h2>Your Personal Info</h2>
        
        <Jumbotron id='profileJumbo'> 
        <div className="card row" id="procard">
        <div className="card-body col-sm-6">
            <img className="card-img-top" id="imgattr" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg" alt="Card image"></img>
              <h2 className="card-title">John Smith</h2>
              <hr></hr>
              <p className="card-text">User Name: Jsmith</p>
              <p className="card-text">Weight: 210lb</p>
              <p className="card-text">Desired Weight: 175lb</p>
            </div>
            <div className="col-sm-6">
                <h2>My Personal Goals</h2>
            </div>
        </div>
        <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Edit Info</button>
        </Jumbotron> 
      </div>
      
      
    );
  }
});
export default person;