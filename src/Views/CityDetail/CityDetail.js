import Modal from "../../Components/Modal/Modal"

const CityDetail = ({selectedCity, setShowModal}) => {
  const capitalizeFirstLetter = (string) => {
    return string.split(' ').map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)} `)
  }

  return (
    <Modal
      description={capitalizeFirstLetter(selectedCity.weather[0].description)}
      temp={selectedCity.main.temp}
      humidity={selectedCity.main.humidity}
      pressure={selectedCity.main.pressure}
      key={selectedCity.id}
      id={selectedCity.id}
      name={selectedCity.name}
      setShowModal={setShowModal}
    /> 
  )
}

export default CityDetail