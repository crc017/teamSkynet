import React from "react";
import Router, { Link, RouteHandler } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jQuery";
import classNames from "classnames";

var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){
    
    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

  },

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {

    //console.log(this.context);

    // var name = this.context.router.getCurrentPath();

    const { pathname } = this.props.location;

    var title = <span><a href="http://startreact.com/" title="Start React" rel="home"><img src="http://startreact.com/wp-content/themes/dazzling-child/images/logo.png" alt="Start React" title="Start React" height="35px" />&nbsp;SB Admin React - StartReact.com</a></span>;
    
    return (
        <div className="dashboard-page ui-view"> 
          <div className="container-fluid"> 
            <div className="row"> 
              <div className="col-sm-3 col-md-2 sidebar" id="sidebar"> 
                <div className="text-center"> 
                  <h2 className="brand"> FitHub <br /><small>Track Your Life</small></h2> 
                  <img href="../../pages/dashboard/PersonalInfo" src={require("../../../common/images/flat-avatar.png")} className="user-avatar customImg" />
                  <br /> 
                  <Link to="/login" className="btn btn-white btn-outline btn-rounded btn-sm">Logout</Link> 
                </div> 

                <ul className="nav nav-sidebar"> 
                  <li>
                    <Link to="/dashboard/overview">Home</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/calendar">Exercise Calendar</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/reports">Diet</Link>
                  </li>
                </ul> 
              </div>

               <ReactCSSTransitionGroup component="div"
                                 transitionName="ng"
                                 transitionEnterTimeout={500}
                                 transitionLeaveTimeout={300}
                >
                  {React.cloneElement(<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ng-scope ui-view" id="overview">{this.props.children}</div> || <div />, { key: pathname })}
                </ReactCSSTransitionGroup>

                
            </div> 
          </div> 
        </div>
    );
  },

  statics: {
    fetchData: function(params) {
      }
  }
  
});

export default HomePage;
