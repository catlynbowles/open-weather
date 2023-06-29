import React from "react";
import Search from "../Search/Search";
import Results from "../Results/Results";
import { Route, Routes } from "react-router-dom";

export default function Homepage() {
  return (
    <Routes>
      <Route exact path="/" element={<Search />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}
