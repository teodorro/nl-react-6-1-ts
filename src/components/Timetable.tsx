import React, { useState, useEffect } from 'react';
import { Place } from '../Place';
import momenttz from 'moment-timezone';
import '../styles/timetable.css'

interface ITimetableProps {
  timetable: Place[];
  deletePlace: (id: number) => void;
}

export default function Timetable({ timetable, deletePlace }: ITimetableProps) {
  const [time, setTime] = useState(momenttz.tz('Europe/London'));

  useEffect(() => {
    setInterval(() => {
      const greenwichTime = momenttz.tz("Europe/London");
      setTime(greenwichTime);
    }, 1000);
  });

  return <div className="timetable-list">
  {timetable.map((place) => (
    <div
      className="item"
      key={place.id}
    >
      <div className="item-clock">
        <div className="clock-face">
          <div
            id="second"
            className="clock-seconds clock-objects"
            style={{
              transform: `rotate(${getSecondsDegree(
                time.seconds()
              )}deg) translateX(22.5px)`,
            }}
          ></div>
          <div
            id="minutes"
            className="clock-minutes clock-objects"
            style={{
              transform: `rotate(${getMinutesDegree(
                time.minutes()
              )}deg) translateX(20px)`,
            }}
          ></div>
          <div
            id="hours"
            className="clock-hours clock-objects"
            // style={{transform: `rotate(${getHoursDegree((parseFloat(time.hours()) + parseFloat(item.timezone)) )}deg) translateX(17.5px)` }}
            style={{
              transform: `${getHoursTransform(
                time.hours(),
                typeof place.timezoneOffset === 'number' ? place.timezoneOffset : 0
              )}`,
            }}
          ></div>
          <div className="clock-pimpochka clock-objects"></div>
        </div>
      </div>
      <div>
        {place.name}
      <div>
      </div>
        {`${
          // parseFloat(time.hours()) + parseFloat(item.timezone)
          getHours(
            time.hours(),
            typeof place.timezoneOffset === 'number' ? place.timezoneOffset : 0
          )
        }:${time.minutes()}`}
      </div>
      <button
        className="item-remove material-icons"
        onClick={() => {
          deletePlace(place.id);
        }}
      >
        close
      </button>
    </div>
  ))}
</div>;
}

function getHoursTransform(hours: number, timezone: number) {
  return `rotate(${getHoursDegree(
    hours + timezone
  )}deg) translateX(17.5px)`;
}

function getHours(hours: number, timezone: number) {
  return ((hours + timezone) % 24 + 24) % 24;
}

function getHoursDegree(hours: number) {
  return (360 / 12) * hours - 90;
}
function getMinutesDegree(minutes: number) {
  return (360 / 60) * minutes - 90;
}
function getSecondsDegree(seconds: number) {
  return (360 / 60) * seconds - 90;
}
