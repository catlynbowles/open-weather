import { useEffect, useState } from "react"
import { getLocalWeather } from "../../apiCalls"
import WeatherCard from "../../Components/WeatherCard/WeatherCard"
import CityDetail from "../CityDetail/CityDetail"
import './Homepage.scss'

const Homepage = ({ cityCoordinates }) => {
  const [cityDetails, setCityDetails] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState('')

  useEffect(() => {
    Promise.all(cityCoordinates.map(city => getLocalWeather(city.lat, city.lon)))
      .then(data => setCityDetails(data))
    console.log('itran')
  }, [cityCoordinates])

  const handleUserSelect = (id) => {
    setShowModal(true)
    setSelectedCity(cityDetails.find(city => city.id === id))
  }

  const findState = (name) => {
    let cityLocation = cityCoordinates.find(city => city.name === name)
    return `${cityLocation.state}`
  }

  const generateWeatherCards = (weatherStatistics) => {
    return weatherStatistics.map(city => {
      return (
        <WeatherCard
          id={city.id}
          key={city.id}
          name={`${city.name}, ${findState(city.name)}`}
          temp={city.main.temp}
          icon={city.weather[0].icon}
          handleUserSelect={handleUserSelect}
        />
      )
    })
  }

  return (
    <section>
      <div className='card-display'>
        {cityDetails.length ? generateWeatherCards(cityDetails) : null}
      </div>
      {showModal && <CityDetail selectedCity={selectedCity} setShowModal={setShowModal}/>}
    </section>
  )
}

export default Homepage