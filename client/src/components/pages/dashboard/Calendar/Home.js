import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import $ from 'jQuery'
//import { GOOGLE_API_KEY } from '../../../../js/config.js'
//import GoogleCalendar from '../../../../utils/GoogleCalendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styles from './Home.scss'
// use Moment.js to localize react-big-calendar
BigCalendar.momentLocalizer(moment)
const calendars = [
  {
    name: 'demo',
    url: 'srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com'
  }
]
const weeklyRecurrence = 50

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'central',
      events: [
        {
          id: 0,
          title: 'Pushups: 20',
          start: new Date(2018, 2, 20),
          end: new Date(2018, 2, 20),
        },
        {
          id: 1,
          title: 'Situps: 50',
          start: new Date(2018, 2, 20),
          end: new Date(2018, 2, 20),
        }
      ]
    }
  }

  componentDidMount = () => {
    $.ajax({
            url: "/api/routine",
            method: "GET"
           })
          // .done(function (routine) {
          //   console.log("Routine 0", routine[0].reps);
          // })
          // .then(res => res.json())
          .done((routine) => {
            var allWorkouts = []; 
          for(let i=0; i<routine.length; i++){
          var workout = {
              id: i,
              title: routine[i].title + ": " + routine[i].reps,
              start: new Date(routine[i].date),
              end: new Date(routine[i].date)
            }
            allWorkouts.push(workout);
          };
            console.log("Results ", allWorkouts);
              this.setState({
                events: allWorkouts
              });
            }
          )
    // this.state = {
    //   events: [
    //                   {
    //                     id: 0,
    //                     title: 'Pushups: 20',
    //                     start: new Date(2018, 2, 20),
    //                     end: new Date(2018, 2, 20),
    //                   },
    //                   {
    //                     id: 1,
    //                     title: 'Situps: 50',
    //                     start: new Date(2018, 2, 20),
    //                     end: new Date(2018, 2, 20),
    //                   }
    //                 ]
    // }

//     const allWorkouts;
// $.ajax({
//       url: "/api/routine",
//       method: "GET"
//     }).done(function (routine) {
        
//       if(routine){

//           console.log(routine[0]);
//           allWorkouts = []; 
//           for(i=0; i<routine.length; i++){
//           var workout = {
//               id: i,
//               title: routine[i].title,
//               start: routine[i].date,
//               end: routine[i].date
//             }
//             allWorkouts.push(workout);
//           };
//         return allWorkouts;
//         } else{
//           allWorkouts = [
//               {
//                 id: 0,
//                 title: 'Pushups: 20',
//                 start: new Date(2018, 2, 20),
//                 end: new Date(2018, 2, 20),
//               },
//               {
//                 id: 1,
//                 title: 'Situps: 50',
//                 start: new Date(2018, 2, 20),
//                 end: new Date(2018, 2, 20),
//               }
//             ]
//           }



//       });
  }


    //   this.getGoogleCalendarEvents()

 //   this.getGoogleCalendarEvents()
  



  
 // getGoogleCalendarEvents = () => {
    /*
     * @param {string} GOOGLE_API_KEY - your Google API key
     * @param {array} calendars - a list of key, value pairs
     *                {name: 'name of your calendar', url: 'calendar_url'}
     * @param {number} dailyRecurrence - how many times you want daily events to reoccur
     * @param {number} weeklyRecurrence - how many times you want weekly events to reoccur
     * @param {number} monthlyRecurrence - how many times you want monthly events to reoccur
     *
     * @returns {array} events - list of objects that will render on react-big-calendar
     *   e.x. event = {
     *           eventType: {string} calendar.name
     *           creator: {string}
     *           end: Datetime
     *           gLink: {string} link to event in Google Calendar,
     *           description: {string},
     *           location: {string}
     *           start: Datetime
     *           title: {string} summary
     *           meta: {object} - everything about the event Google returns
     *        }
     */
  /*  GoogleCalendar.getAllCalendars(GOOGLE_API_KEY, calendars, dailyRecurrence, weeklyRecurrence, monthlyRecurrence)
      .then(events => this.setState({events}) )
      .catch(err => { throw new Error(err) })
  }
*/




handlePageChangeCentral = () => {
  this.setState({
    tab: 'central'
  })
}

handlePageChangeCalendar = () => {
  this.setState({
    tab: 'calendar'
  })
}


  render = () => 
    <div>
      <div className={styles['title'] + 'pull-right btn btn-primary btn-outline btn-rounded'} onClick={this.handlePageChangeCentral}>Central Info</div>
      <div className={styles['title'] + 'pull-right btn btn-primary btn-outline btn-rounded'} onClick={this.handlePageChangeCalendar}>Exercie Calendar</div>
      <div className={styles['calendar-container']}>
        {this.state.tab === 'central' && <div> 
        <h2>Your Personal Info</h2> 
        <form role="form" onSubmit={this.NewLogin} className="ng-pristine ng-valid"> 
        <div className="form-content"> 
          <div className="form-group row"> 
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label radio">Exercise</label>
          <div className="col-sm-3">
            <select className="form-control formin" id="workout">
              <option>Pushups</option>
              <option>Situps</option>
              <option>Pull-Ups</option>
              <option>Chin-Ups</option>
              <option>Burpees</option>
              <option>Squats</option>
              <option>Lunges</option>
            </select>  
          </div>
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Repetitions</label>
            <div className="col-sm-1">
          <input type="number" className="form-control input-md formin"  placeholder="5" id="reps"/> 
        </div>
        <br/>
        <br/>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Date</label>
               <div className="col-sm-3">
                <input id="date" type="date" className="form-control input-md formin" placeholder="2/24/2018" />
                  </div> 
                  
            </div>
          </div>
        </div> 
        <button onClick={this.handleNewWorkout} type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Accept</button><br></br>  
      </form>
           </div>}
        {this.state.tab === 'calendar' && <BigCalendar events={this.state.events} /> }
      </div>
    </div>
  
  


  handleNewWorkout = (e) => {
    e.preventDefault();
    var postSelection;
    var day = $("#date").val().trim();
    var newDay = moment(day, 'YYYY-MM-DD').format('YYYY, MM, DD');

  $.ajax({
    method: "POST",
    url: "/api/routine",
    data: {
      title: $("#workout").val().trim(),
      reps: $("#reps").val().trim(),
      date: newDay
    },
  }).done(function (data) {
    
    
    if(!data.success){
      postSelection = 'central'
      
    } else{
      postSelection = 'calendar'

  
        //window.location.href = '/';
        //this.props.history.pushState(null, '/dashboard/overview');
    };
  })
  this.setState({
    tab: postSelection
  })
  };

};

