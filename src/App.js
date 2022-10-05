import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchData } from './apiCalls';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      Open Weather
    </div>
  );
}

export default App;
