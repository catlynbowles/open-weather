import { useEffect, useState } from "react"
import { getLocalWeather } from "../../apiCalls"
import Modal from "../../Components/Modal/Modal"

const CityDetail = ({selectedCity, setShowModal}) => {
  // const [randomCity, setRandomCity] = useState('')

  const capitalizeFirstLetter = (string) => {
    return string.split(' ').map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)} `)
  }

//  const getRandomCoordinate = (min, max) => {
//     return Math.random() * (max - min) + min;
//   }

  // useEffect(() => {
  //   const randomLat = getRandomCoordinate(30, 70)
  //   const randomLon = getRandomCoordinate(70, 120)
  //   getLocalWeather(randomLat, randomLon)
  //     .then(data => setRandomCity(data))
  // }, [])

  return (
    <Modal
      description={capitalizeFirstLetter(selectedCity.weather[0].description)}
      temp={selectedCity.main.temp}
      feelsLike={selectedCity.main.feels_like}
      tempMin={selectedCity.main.temp_min}
      tempMax={selectedCity.main.temp_max}
      humidity={selectedCity.main.humidity}
      pressure={selectedCity.main.pressure}
      visibility={selectedCity.visibility}
      key={selectedCity.id}
      id={selectedCity.id}
      name={selectedCity.name}
      setShowModal={setShowModal}
    /> 
  )
}

export default CityDetail