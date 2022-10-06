import './App.css';
import { useEffect, useState } from 'react';
import { getCityCoordinate } from '../../apiCalls';
import Homepage from '../../Views/Homepage/Homepage';
import Header from '../Header/Header';

function App() {
  const [cityCoordinates, setCityCoordinates] = useState([])

  useEffect(() => {
    Promise.all([getCityCoordinate('Las Vegas', 'Nevada'), getCityCoordinate('Houston', 'Texas'), getCityCoordinate('Phoenix', 'AZ')])
      .then(data => setCityCoordinates(data.flat(1)))
  }, [])

  return (
    <div className="App">
      <Header />
      <Homepage cityCoordinates={cityCoordinates}/>
    </div>
  );
}

export default App;
