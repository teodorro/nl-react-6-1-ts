import { useState } from 'react'
import './App.css'
import Toolbar from './components/Toolbar';
import Timetable from './components/Timetable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toolbar addPlace={addPlace}></Toolbar>
      <Timetable></Timetable>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function addPlace(name: string, timezoneOffset: number | '') {
  console.log(name);
  console.log(timezoneOffset);
}

export default App
