export const getCityData = (city, state) => {
  return fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${process.env.REACT_APP_API_KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error");
    }
  });
};
