import Modal from "../../Components/Modal/Modal"

const CityDetail = ({selectedCity}) => {
  return (
    <Modal
      description={selectedCity.weather[0].main}
      temp={selectedCity.main.temp}
      humidity={selectedCity.main.humidity}
      pressure={selectedCity.main.pressure}
      key={selectedCity.id}
      id={selectedCity.id}
      name={selectedCity.name}
    /> 
  )
}

export default CityDetail