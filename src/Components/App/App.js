import './App.css';
import { useEffect, useState } from 'react';
import { getCityCoordinate } from '../../apiCalls';
import Homepage from '../Homepage/Homepage';

function App() {
  const [cityCoordinates, setCityCoordinates] = useState([])

  useEffect(() => {
    Promise.all([getCityCoordinate('Las Vegas', 'Nevada'), getCityCoordinate('El Paso', 'Texas'), getCityCoordinate('Tucson', 'AZ')])
      .then(data => setCityCoordinates(data.flat(1)))
  }, [])

  return (
    <div className="App">
      <Homepage cityCoordinates={cityCoordinates}/>
    </div>
  );
}

export default App;
