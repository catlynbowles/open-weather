import './WeatherCard.scss'

const WeatherCard = ({ name, temp, icon, handleUserSelect, id }) => {
  const splitName = name.split(',')

  return (
    <article className='weather-card'>
      <div className='city-name'>
        <h3>{splitName[0]},</h3>
        <h3>{splitName[1]}</h3>
      </div>
      <div className='temp-center'>
        <p className='temp'>{temp} °F</p>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`}></img><br></br>
      </div>
      <div className='card-bottom'>
        <button className='details-button' onClick={(e) => handleUserSelect(id, name, temp)}>Details</button>
      </div>
    </article>
  )
}

export default WeatherCard