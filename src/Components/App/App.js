import './App.css';
import { useEffect, useState } from 'react';
import { getCityData } from '../../apiCalls';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    Promise.all([getCityData('Miami', 'FL'), getCityData('Tampa', 'FL'), getCityData('New York', 'NY')])
      .then(data => setData(data.flat(1)))
  }, [])

  return (
    <div className="App">
      Open Weather
    </div>
  );
}

export default App;
