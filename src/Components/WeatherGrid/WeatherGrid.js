import { useEffect, useState } from "react"
import { getLocalWeather } from "../../apiCalls"

const WeatherGrid = ({cityCoordinates}) => {
  const [cityDetails, setCityDetails] = useState([])

  useEffect(() => {
    Promise.all(cityCoordinates.map(city => getLocalWeather(city.lat.toFixed(2), city.lon.toFixed(2))))
      .then(data => setCityDetails(data))
  }, [])

  return (
    <div>hi</div>
  )
}

export default WeatherGrid