import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "Meeting",
      start: new Date(),
      end: new Date(),
    },
  ]);

  return (
    <div>
      <Calendar
        localizer={localizer}
        // events={events}
        // startAccessor="start"
        // endAccessor="end"
        style={{ height: 350, alignContent: "center"}} 
      />
    </div>
  );
};

export default MyCalendar;
