import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

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
      url: "/api/userinfo",
      method: "GET"
  }).done(function (user) {
      
    

  });
    
 //   this.getGoogleCalendarEvents()
  }

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


      <div className={styles['title']} onClick={this.handlePageChangeCentral}>Central Info</div>
      <div className={styles['title']} onClick={this.handlePageChangeCalendar}>Exercie Calendar</div>
      <div className={styles['calendar-container']}>
        {this.state.tab === 'central' && <div> 
        <h2>Your Personal Info</h2> 
        <form role="form" onSubmit={this.NewLogin} className="ng-pristine ng-valid"> 
        <div className="form-content"> 
          <div className="form-group row"> 
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label radio" id="gen">Exercise</label>
          <div className="col-sm-3">
            <select className="form-control formin" id="sel1">
              <option>Pushups</option>
              <option>Situps</option>
            </select>  
          </div>
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Repetitions</label>
            <div className="col-sm-1">
          <input type="number" className="form-control input-md formin"  placeholder="5" id="mygoal"/> 
        </div>
        <br/>
        <br/>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" id="birth">Birth Date</label>
               <div className="col-sm-3">
                <input id="birthdate" type="date" className="form-control input-md formin" placeholder="12/24/1932" />
                  </div> 
                  
            </div>
          </div>
        </div> 
        <button onClick={this.handleNewLogin} type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Accept</button><br></br>  
      </form>
           </div>}
        {this.state.tab === 'calendar' && <BigCalendar events={this.state.events} /> }
      </div>

    </div>
}

