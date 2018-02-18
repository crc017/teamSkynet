import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Modal, Panel} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="overview-page" key="overview"> 
        <Link to="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</Link> 
        <h2>Home</h2> 
        <Jumbotron className='profileJumbo' id="profileJumbo">
          <div className="row">
            <Panel  className="profilePannel col-sm-4" id="personalInfo" >
              <p className="infoText">
              <Link style={{color: 'white'}} activeStyle={{color: 'white'}} to="/dashboard/personalinfo">Profile</Link>
              </p>
            </Panel>
            <Panel className="profilePannel col-sm-4" id="goals">
              <p className="infoText">
                Goals
              </p>
            </Panel>
          <Panel className="profilePannel col-sm-4" id="mealHistory">
            <p className="infoText">
              Yesterday's Meals
            </p>
          </Panel>
          </div>
          <br /><br /> 
          <div className="row">
          <Panel className="profilePannel col-sm-2" id="eCalendar"><p id="calendarText">Exercise Calendar</p></Panel>
          <Panel className="profilePannel col-sm-2" id="meals"><p id="mealText">Meal Ideas</p></Panel>
          <Panel className="profilePannel col-sm-2" id="shop"><p id="shopText">Shop</p></Panel>
          </div>
          <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
        </Jumbotron> 
      </div>
      
      
    );
  }

});

export default Blank;
