import { useEffect } from "react"

const WeatherCard = ({name, temp, icon, id}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{temp}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`}></img>
    </div>
  )
}

export default WeatherCard