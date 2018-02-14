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
            <h2>First Name:</h2><br />
            <h2>Last Name:</h2><br />
            <h2>Goals:</h2><br /> 
          </Jumbotron> 
        </div>
        
        
      );
    }
});

export default person;