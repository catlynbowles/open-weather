import React from "react";
import Search from "../Search/Search";
import App from "../App/App";
import { Route, Routes } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route path ="/results" element={<App />}/>
      </Routes>
    </div>
  );
}
