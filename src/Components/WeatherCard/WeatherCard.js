import { useEffect } from "react"

const WeatherCard = ({name, temp, icon, handleUserSelect, id}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{temp}°F</p>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`}></img><br></br>
      <button onClick={(e) => handleUserSelect(id, name, temp)}>Details</button>
    </div>
  )
}

export default WeatherCard