import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Modal, Panel} from 'react-bootstrap';
import $ from "jQuery";
var Blank = React.createClass({
  
  componentWillMount: function(){
    // this.props.history.pushState(null, '/dashboard/overview');
    $.ajax({
      url: "/dashboardAuth",
      method: "GET"
  }).done(function (something) {
      var myToken = something.success;
      console.log(myToken);
      if(!myToken){
        window.location.href = '/#/login';
      }
  });
  },
  
  render: function() {
    return (
      <div className="overview-page" key="overview"> 
        <Link to="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Calories</Link> 
        <h2>Home</h2> 
        <Jumbotron className='profileJumbo' id="profileJumbo">
          <div className="row">
            <Panel  className="profilePannel hvr-bounce col-sm-3" id="personalInfo" >
              <p className="infoText">
              <Link style={{color: 'white'}} activeStyle={{color: 'white'}} to="/dashboard/personalinfo">Profile</Link>
              </p>
            </Panel>
          <Panel className="profilePannel col-sm-3 hvr-bounce" id="eCalendar">
          <p className="infoText">
              <Link style={{color: 'white'}} activeStyle={{color: 'white'}} to="/dashboard/Calendar">Exercise Calendar</Link>
              </p>
          </Panel>
          <Panel className="profilePannel col-sm-3 hvr-bounce" id="meals">
          <p className="infoText">
              <a style={{color: 'white'}} activeStyle={{color: 'white'}} href="http://www.delish.com/healthy-recipes/"target="_blank">Meal Ideas</a>
              </p>
          </Panel>
          </div>
          <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded hvr-bounce">Learn more</a> </p> 
        </Jumbotron> 
      </div>
      
      
    );
  }
});
export default Blank;