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
  render: function() {
    return (
      <div key="reports" className="reports-page">
        <div className="ng-scope"> 
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Overview</Link> 
          <h2>Graphs</h2> 
          <h2>Calories</h2> 
          <div>
            <Bar
         data={data}
         width={100}
         height={400}
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
       </div>
      
    </div>
  </div>
      
    );
  }
});
export default Buttons;