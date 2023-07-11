import React, { useEffect, useState } from "react";
import "./Search.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";
import Results from "../Results/Results";

export default function Search() {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [userLocations, setUserLocations] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    fetch("https://states-api-ydx9.vercel.app/states/")
      .then((resp) => resp.json())
      .then((data) => setStates(data));
  }, [userLocations]);

  useEffect(() => {
    if (selectedState) {
      fetch(`https://states-api-ydx9.vercel.app/states/${selectedState}`)
        .then((resp) => resp.json())
        .then((data) => setCities(data));
    }
  }, [selectedState, userLocations]);

  const displayCurrentResults = () => {
    setUserLocations([...userLocations, { city: city, state: selectedState }]);
    console.log(userLocations);
    // // updatedCities.push(newCity);
    // var updatedCities = userLocations.slice();
    // updatedCities = [...userLocations, newCity];
    // setUserLocations(updatedCities);
    // console.log(updatedCities, userLocations);
    setSearch(true);
    // clear();
  };

  const clearUserLocations = () => {
    setUserLocations([]);
    setSearch(false);
  };

  return (
    <div className="selection">
      <Dropdown
        options={states}
        onChange={(e) => setSelectedState(e.value)}
        value={selectedState}
        placeholder="Select state"
      />
      {selectedState && (
        <Dropdown
          options={cities}
          onChange={(e) => setCity(e.value)}
          value={city}
          placeholder="Select city"
        />
      )}
      {selectedState && city && (
        // <Link to={"/results"} state={{ city: city, state: selectedState }}>
        //   <button>Find Weather Results!</button>
        // </Link>
        <button onClick={() => displayCurrentResults()}>
          Find Weather Results!
        </button>
      )}
      {search && (
        <Results
          userLocations={userLocations}
          clearUserLocations={clearUserLocations}
        />
      )}
    </div>
  );
}
