import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import { Bar, Line, Doughnut } from "react-chartjs-2";
import moment from 'moment'
import $ from "jQuery";

const today = moment().format("dddd")



const data = {
  
  labels:  [today, moment().add(1, "days").format("dddd"), moment().add(2, "days").format("dddd"), moment().add(3, "days").format("dddd"), moment().add(4, "days").format("dddd"), moment().add(5, "days").format("dddd"), moment().add(6, "days").format("dddd"), 'Goal Calories'],
  datasets: [
    {
      label: 'Calories Consumed',
      labelsColor: 'rgba(255,255,255, 0.9)',
      backgroundColor: 'rgba(255,99,132,.7)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,1)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [1800, 2000, 1600, 2200, 2150, 1750, 1900]
    },
    {label: 'Calories Burned',
    labelsColor: 'rgba(0, 0, 255, 0.3)',
    defaultFontColor: 'white',
    backgroundColor: 'rgba(0, 0, 255, 0.7)',
    borderColor: 'rgba(0, 0, 255, 0.7)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(0, 0, 255, 0.7)',
    hoverBorderColor: 'rgba(0, 0, 255, 0.7)',
    data: [125, 250, 120, 0, 100, 220, 0]
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
                      <label htmlFor="inputPassword" className="col-sm-6 lab col-form-label" id="MonCal">Date</label>
                        <div className="col-sm-3">
                           <input id="dateConsumed" type="date" className="form-control input-md formin" placeholder="12/24/1932" />
                            <br></br>
                        </div>
                        <label htmlFor="inputPassword" className="col-sm-6 lab col-form-label" id="MonCal">Calories Consumed</label>
                        <div className="col-sm-3">
                           <input id="caloriesConsumed" type="number" className="form-control input-md formin" placeholder="2000" />
                            <br></br>
                        </div>
                        <label htmlFor="inputPassword" className="col-sm-6 lab col-form-label" id="MonCal">Calories Burned</label>
                        <div className="col-sm-3">
                           <input id="caloriesBurned" type="number" className="form-control input-md formin" placeholder="500" />
                            <br></br>
                        </div>
                        
                    </div>
            </div> 
            <button onClick={this.handleNewCalories} type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Accept</button><br></br>  
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
  },


  handleNewCalories: function(e){
    

    e.preventDefault();
    
            $.ajax({
                method: "POST",
                url: "/api/consumed",
                data: {
                  date: $("#dateConsumed").val().trim(),
                  caloriesConsumed: $("#caloriesConsumed").val().trim(),
                  caloriesBurned: $("#caloriesBurned").val().trim(),
                },
            }).done(function (data) {

               
                if(!data.success){
                $("#createError").html(data.message);
                } else{
                    $("#createError").html(data.message);

                  
                    //this.props.history.pushState(null, '/dashboard/overview');
                };
            });

    
            location.reload();
    return false;

  }
});
export default Buttons;