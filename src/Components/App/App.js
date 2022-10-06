import './App.css';
import { useEffect, useState } from 'react';
import { getCityCoordinates } from '../../apiCalls';
import WeatherGrid from '../WeatherGrid/WeatherGrid';

function App() {
  const [cityCoordinates, setCityCoordinates] = useState([])

  useEffect(() => {
    Promise.all([getCityCoordinates('Miami', 'FL'), getCityCoordinates('Tampa', 'FL'), getCityCoordinates('New York', 'NY')])
      .then(data => setCityCoordinates(data.flat(1)))
  }, [])

  return (
    <div className="App">
      Open Weathers
      <WeatherGrid cityCoordinates={cityCoordinates}/>
    </div>
  );
}

export default App;
