import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import { Bar, Line, Doughnut } from "react-chartjs-2";


const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Goal Calories'],
  datasets: [
    {
      label: 'Calories Per Day',
      labelsColor: 'rgba(255,255,255,1)',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [1500, 1350, 1890, 1100, 1735, 1455, 1240, 1500]
    }
  ]
};

const data2 = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Calories',
      fill: true,
      lineTension: 0.05,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1500, 1350, 1890, 1100, 1735, 1455, 1240, 1500, 0]
    }
  ]
 };

 const data3 = {
  labels: [
      'Red',
      'Green',
      'Yellow'
  ],
  datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
  }]
};

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
         height={150}
         options={{
           maintainAspectRatio: false
         }}
       /> 
       </div>
       <div>
       <h2>Exercise</h2> 
       <Line data={data2} />
       </div>
       <div>
       <h2>Weight</h2>
       <Doughnut data={data3} />
     </div>
        </div>
      </div>
      
    );
  }

});

export default Buttons;