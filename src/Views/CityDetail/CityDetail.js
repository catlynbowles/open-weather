import './CityDetail.scss'
import Modal from "../../Components/Modal/Modal"

const CityDetail = ({ selectedCity, handleClose }) => {
  const capitalizeFirstLetter = (string) => {
    return string.split(' ').map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)} `)
  }

  return (
    <section className='modal'>
      <Modal
        id={selectedCity.id}
        name={selectedCity.name}
        description={capitalizeFirstLetter(selectedCity.weather[0].description)}
        temp={selectedCity.main.temp}
        feelsLike={selectedCity.main.feels_like}
        tempMin={selectedCity.main.temp_min}
        tempMax={selectedCity.main.temp_max}
        humidity={selectedCity.main.humidity}
        pressure={selectedCity.main.pressure}
        visibility={selectedCity.visibility}
        cloudCover={selectedCity.clouds.all}
        rain={selectedCity.rain}
        snow={selectedCity.snow}
        wind={selectedCity.wind.speed}
        handleClose={handleClose}
        icon={selectedCity.weather[0].icon}
        sunrise={selectedCity.sys.sunrise}
        sunset={selectedCity.sys.sunset}
      />
    </section>
  )
}

export default CityDetail