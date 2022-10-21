import { useEffect, useState } from "react"
import { getLocalWeather } from "../../apiCalls"
import WeatherCard from "../../Components/WeatherCard/WeatherCard"
import CityDetail from "../CityDetail/CityDetail"
import './Homepage.scss'
import Loading from "../../Components/Loading/Loading"
import Error from "../../Components/Error/Error"

const Homepage = ({ cityCoordinates }) => {
  const [cityDetails, setCityDetails] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all(cityCoordinates.map(city => getLocalWeather(city.lat, city.lon)))
      .then(data => setCityDetails(data))
      .catch(error => setError(`${error}`))
  }, [cityCoordinates])

  const handleUserSelect = (id) => {
    setShowModal(true)
    setSelectedCity(cityDetails.find(city => city.id === id))
  }

  const handleClose = () => {
    setShowModal(false)
  }

  // const findState = (name) => {
  //   let cityLocation = cityCoordinates.find(city => city.name.includes(name))
  //   // let cityLocation = cityCoordinates.find(city => city.name === name)
  //   return `${cityLocation.state}`
  // }

  const findState = (lat, lon) => {
      let cityLocation = cityCoordinates.find(city => city.lat.toFixed(2) === lat.toFixed(2) && city.lon.toFixed(2) === lon.toFixed(2))
      return cityLocation ? `${cityLocation.state}` : ''
  }

  const generateWeatherCards = (weatherStatistics) => {
    return weatherStatistics.map(city => {
      return (
        <WeatherCard
          id={city.id}
          key={city.id}
          name={`${city.name}, ${findState(city.coord.lat, city.coord.lon) && findState(city.coord.lat, city.coord.lon)}`}
          temp={city.main.temp}
          icon={city.weather[0].icon}
          description={city.weather[0].description}
          handleUserSelect={handleUserSelect}
        />
      )
    })
  }

  return (
    <section>
      <div className='card-display'>
        {error ? <Error error={error} /> : !cityDetails.length ? <Loading /> : generateWeatherCards(cityDetails)}
        {showModal && <CityDetail selectedCity={selectedCity} handleClose={handleClose} />}
      </div>
    </section>
  )
}

export default Homepage