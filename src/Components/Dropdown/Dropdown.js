import React from "react";

export default function Dropdown({values}) {

  const generateOptions = () => {
    return values.map((value) => {
      return <option key={value} value={value}>{value}</option>;
    });
  };

  return <select>{generateOptions()}</select>;
}
