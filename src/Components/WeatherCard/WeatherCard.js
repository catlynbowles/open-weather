import './WeatherCard.scss'

const WeatherCard = ({ name, temp, icon, handleUserSelect, id, description }) => {
  const splitName = name.split(',')

  return (
    <article className='weather-card'>
      <div className='city-name'>
        <h2 tabIndex='0'>{splitName[0]} <br />{splitName[1]}</h2>
      </div>
      <div className='temp-center'>
        <p className='temp' tabIndex='0'>{temp} °F</p>
        <img tabIndex='0' alt={description} src={`http://openweathermap.org/img/wn/${icon}.png`}></img><br></br>
      </div>
      <div className='card-bottom'>
        <button tabIndex='0' className='details-button' onClick={() => handleUserSelect(id)}>Details</button>
      </div>
    </article>
  )
}

export default WeatherCard