import './App.scss';
import { useEffect, useState } from 'react';
import { getCityCoordinate } from '../../apiCalls';
import Homepage from '../../Views/Homepage/Homepage';
import Header from '../Header/Header';
import Error from '../Error/Error';

function App() {
  const [cityCoordinates, setCityCoordinates] = useState([])
  const [error, setError] = useState('')
  const [locations] = useState([
    { state: 'Honolulu', city: 'Hawaii' },
    { state: 'New York', city: 'New York' },
    { state: 'Las Vegas', city: 'Nevada' },
    { state: 'Anchorage', city: 'Alaska' },
    { state: 'Portland', city: 'Oregon' }
  ])

  useEffect(() => {
    Promise.allSettled(locations.map(loc => getCityCoordinate(loc.state, loc.city)))
      .then(data => setCityCoordinates(data.map(loc => loc.value).flat(1)))
      .catch(err => setError(err))
  }, [])

  return (
    <div className='App'>
      <Header />
      {error ? <Error error={error} /> : <Homepage cityCoordinates={cityCoordinates} />}
    </div>
  );
}

export default App;
