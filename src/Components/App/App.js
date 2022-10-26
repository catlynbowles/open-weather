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
    { city: 'Honolulu', state: 'Hawaii' },
    { city: 'New York', state: 'New York' },
    { city: 'Las Vegas', state: 'Nevada' },
    { city: 'Anchorage', state: 'Alaska' },
    { city: 'Portland', state: 'Oregon' }
  ])

  useEffect(() => {
    Promise.allSettled(locations.map(loc => getCityCoordinate(loc.city, loc.state)))
      .then(data => setCityCoordinates(data.filter(loc => loc.status === 'fulfilled').map(loc => loc.value).flat(1)))
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
