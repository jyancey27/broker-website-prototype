
import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './Styles/CalendarStyle.css';
  
const Events = () => {

  const [date, onChange] = useState(new Date());

  return (
    <div className='App'>
      <h1>Events Upcoming</h1>
      <p>Open houses starting next week! I will send out an email of the addresses to those who signed up! <br></br><br></br> See the calendar below for upcoming dates. Open Houses are from 10 A.M. to 4:30 P.M.</p> <br></br>
      <div className='calendar'>
        <Calendar  onChange={onChange}
                    value={date}
                    tileContent={
                      ({ date, view }) => {
                        return view === 'month' && (date.getDay() === 6 && date.getDate() !== 24 && date.getDate() !== 31)
                        ? <p><small>Open House</small></p> 
                        : null
                      }
                    }
                    tileDisabled={({ date }) => date.getDay() === 0}
                    minDate={
                      new Date()
                    }
                    
                    />
      </div>
    </div>
  );
};
  
export default Events;