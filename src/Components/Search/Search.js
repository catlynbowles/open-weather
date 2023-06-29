import React, { useEffect, useState } from "react";
// import Dropdown from "../Dropdown/Dropdown";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Search() {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [cities, setCities] = useState([])
  const [city, setCity] = useState('')

  useEffect(() => {
    fetch("http://localhost:3001/states/")
      .then((resp) => resp.json())
      .then((data) => setStates(data));
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetch(`http://localhost:3001/states/${selectedState}`)
        .then((resp) => resp.json())
        .then((data) => setCities(data));
    }
  }, [selectedState])

  return (
    <div>
      <Dropdown
        options={states}
        onChange={(e) => setSelectedState(e.value)}
        value={selectedState}
        placeholder="Select state"
      />
      {cities.length && <Dropdown options={cities} onChange={(e) => setCity(e.value)} value={city} placeholder='Select city'/>}
      {selectedState && city && <button>hi</button>}
    </div>
  );
}