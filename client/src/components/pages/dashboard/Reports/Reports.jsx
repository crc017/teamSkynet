import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import { Bar, Line, Doughnut } from "react-chartjs-2";
const data = {
  labels:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Goal Calories'],
  datasets: [
    {
      label: 'Calories Per Day',
      labelsColor: 'rgba(255,255,255, 0.9)',
      backgroundColor: 'rgba(255,99,132,.7)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,1)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [1500, 1350, 1890, 1100, 1735, 1455, 1240, 1200, 0]
    },
    {label: 'Calories Burned',
    labelsColor: 'rgba(0, 0, 255, 0.3)',
    defaultFontColor: 'white',
    backgroundColor: 'rgba(0, 0, 255, 0.7)',
    borderColor: 'rgba(0, 0, 255, 0.7)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(0, 0, 255, 0.7)',
    hoverBorderColor: 'rgba(0, 0, 255, 0.7)',
    data: [500, 250, 980, 230, 560, 851, 765, 900, 0]
    },
  ]};
  var Buttons = React.createClass({
    getInitialState: function() {
      return {
        tab: 'info'
      };
    },
    
    handlechangeGraph: function(evt) {
      this.setState({
        tab: this.state.tab = 'graph'
      });
    },
    handlechangeInfo: function(evt) {
      this.setState({
        tab: this.state.tab = 'info'
      });
    },
  render: function() {
    return (
      <div key="reports" className="reports-page">
        <div className="ng-scope"> 
        
        <button onClick={this.handlechangeInfo} type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Calories</button><br></br>
        <button onClick={this.handlechangeGraph} type="submit"  className="btn btn-white btn-outline btn-lg btn-rounded">Graphs</button><br></br>
          <div>
            
          {this.state.tab === 'info' &&
            <div style={{textAlign: "center"}} className="reports-page" > 
              <h2>Daily Calories and Goals</h2> 
                <form role="form" onSubmit={this.GandCB} className="ng-pristine ng-valid"> 
                  <div className="form-content"> 
                    <div className="form-group row"> 
                      <label htmlFor="inputPassword" className="col-sm-6 lab col-form-label" id="MonCal">Monday</label>
                        <div className="col-sm-3">
                           <input id="firstName" type="text" className="form-control input-md formin" placeholder="Calories Consumed" />
                            <br></br>
                        </div>
                          <label htmlFor="inputPassword" className="col-sm-6 lab col-form-label" id="TueCal">Tuesday</label>
                          <div className="col-sm-3">
                              <input id="firstName" type="text" className="form-control input-md formin" placeholder="Calories Consumed" />
                              <br></br>
                          </div> 
                            <label htmlFor="inputPassword" className="col-sm-6 lab col-form-label" id="WedCal">Wednesday</label>
                            <div className="col-sm-3">
                                <input id="firstName" type="text" className="form-control input-md formin" placeholder="Calories Consumed" />
                                <br></br>
                            </div>
                              <label htmlFor="inputPassword" className="col-sm-6 lab col-form-label" id="ThurCal">Thursday</label>
                              <div className="col-sm-3">
                                  <input id="firstName" type="text" className="form-control input-md formin" placeholder="Calories Consumed" />
                                  <br></br>
                              </div> 
                                <label htmlFor="inputPassword" className="col-sm-6 lab col-form-label" id="FriCal">Friday</label>
                              <div className="col-sm-3">
                                  <input id="firstName" type="text" className="form-control input-md formin" placeholder="Calories Consumed" />
                                  <br></br>
                            </div> 
                              <label htmlFor="inputPassword" className="col-sm-6 lab col-form-label" id="SatCal">Saturday</label>
                          <div className="col-sm-3">
                              <input id="firstName" type="text" className="form-control input-md formin" placeholder="Calories Consumed" />
                              <br></br>
                          </div> 
                            <label htmlFor="inputPassword" className="col-sm-6 lab col-form-label" id="SunCal">Sunday</label>
                        <div className="col-sm-3">
                            <input id="firstName" type="text" className="form-control input-md formin" placeholder="Calories Consumed" />
                        </div> 
                    </div>
            </div> 
            <button onClick={this.handleNewLogin} type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Accept</button><br></br>  
          </form> 
        </div>
    }
            {this.state.tab === 'graph' &&
              <Bar
         data={data}
         width={100}
         height={700}
         options={{
           legend: {
             labels:{
             fontColor: 'white'
             }
            },
           scales: {
             yAxes: [{
               ticks:{
                 fontColor: 'white'
               }
             }],
             xAxes: [{
              ticks:{
                fontColor: 'white'
              }
            }]
           },
           maintainAspectRatio: false
         }}
       /> 
            }
            
       </div>
      
    </div>
  </div>
      
    );
  }
});
export default Buttons;