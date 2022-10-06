import { useEffect, useState } from "react"
import { getLocalWeather } from "../../apiCalls"
import WeatherCard from "../WeatherCard/WeatherCard"

const WeatherGrid = ({ cityCoordinates }) => {
  const [cityDetails, setCityDetails] = useState([])

  useEffect(() => {
    Promise.all(cityCoordinates.map(city => getLocalWeather(city.lat, city.lon)))
      .then(data => setCityDetails(data))
    console.log('itran')
  }, [cityCoordinates])

  const findCityByCoordinates = (lat, lon) => {
    let cityName = cityCoordinates.find(city => {
      return city.lat.toFixed(4) == lat && city.lon.toFixed(4) == lon
    })
    return `${cityName.name}, ${cityName.state}`
  }

  const generateWeatherCards = (weatherStatistics) => {
    return weatherStatistics.map(city => {
      console.log(city.coord.lat, '34')
      return (
        <WeatherCard
          id={city.id}
          key={city.id}
          name={(findCityByCoordinates(city.coord.lat, city.coord.lon))}
          temp={city.main.temp}
          icon={city.weather[0].icon}
        />
      )
    })
  }

  return (
    <div>{cityDetails.length ? generateWeatherCards(cityDetails) : null}</div>
  )
}

export default WeatherGrid