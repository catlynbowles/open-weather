import './App.css';
import { useEffect, useState } from 'react';
import { getCityCoordinate } from '../../apiCalls';
import Homepage from '../../Views/Homepage/Homepage';
import Header from '../Header/Header';
import Error from '../Error/Error';

function App() {
  const [cityCoordinates, setCityCoordinates] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([getCityCoordinate('Honolulu', 'Hawaii'), getCityCoordinate('New York', 'New York'), getCityCoordinate('Houston', 'Texas'), getCityCoordinate('Las Vegas', 'Nevada'), getCityCoordinate('Miami', 'Florida')])
      .then(data => setCityCoordinates(data.flat(1)))
      .catch(err => setError(err))
  }, [])

  return (
    <div className="App">
      <Header />
      {error ? <Error error={error} /> : <Homepage cityCoordinates={cityCoordinates} />}
    </div>
  );
}

export default App;
