import React from "react";
import "./Calendars.css";

const Calendar = [
  {
    time: (
      <div className="timeamorpm">
        <p>6</p>
        <p className="pmoram">AM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>7</p>
        <p className="pmoram">AM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>8</p>
        <p className="pmoram">AM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>9</p>
        <p className="pmoram">AM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>10</p>
        <p className="pmoram">AM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>11</p>
        <p className="pmoram">AM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>12</p>
        <p className="pmoram">PM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>1</p>
        <p className="pmoram">PM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>2</p>
        <p className="pmoram">PM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>3</p>
        <p className="pmoram">PM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>4</p>
        <p className="pmoram">PM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>5</p>
        <p className="pmoram">PM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>6</p>
        <p className="pmoram">PM</p>
      </div>
    ),
    Line: <p className="CalendarPChange">FOSH</p>,
  },
  {
    time: (
      <div className="timeamorpm">
        <p>7</p>
        <p className="pmoram">PM</p>
      </div>
    ),
    Line: <hr className="hr" />,
  },
];

function Calendars() {
  return (
    <div className="CalendarFixed">
      <p className="Calendar">Calendar</p>
      <p className="CalendarDay">Thursday, 26 Oct</p>
      {Calendar.map((e) => (
        <div className="CalendarsContainer">
          <p className="CalendarP">{e.time}</p>
          <span className="CalendarSpan">{e.Line}</span>
        </div>
      ))}
    </div>
  );
}

export default Calendars;
