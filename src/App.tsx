import { useState, useRef } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Timetable from './components/Timetable';
import { Place } from './Place';

function App() {
  const [timeTable, setTimetable] = useState<Place[]>([]);
  const timetableRef = useRef<Place[]>([]);
  const addPlace = (name: string, timezoneOffset: number | '') => {
    const place = new Place(name, timezoneOffset);
    timetableRef.current.push(place);
    setTimetable([...timetableRef.current]);
  };
  const deletePlace = (id: number) => {
    timetableRef.current = timetableRef.current.filter(
      (place) => place.id !== id
    );
    setTimetable([...timetableRef.current]);
  };

  return (
    <>
      <Toolbar addPlace={addPlace}></Toolbar>
      <div className="timetable-component">
        <Timetable timetable={timeTable} deletePlace={deletePlace}></Timetable>
      </div>
    </>
  );
}

export default App;
