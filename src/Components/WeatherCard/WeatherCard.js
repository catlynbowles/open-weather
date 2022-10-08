import './WeatherCard.scss'

const WeatherCard = ({ name, temp, icon, handleUserSelect, id, description }) => {
  const splitName = name.split(',')

  return (
    <article className='weather-card'>
      <div className='city-name'>
        <h2>{splitName[0]}, <br />{splitName[1]}</h2>
      </div>
      <div className='temp-center'>
        <p className='temp'>{temp} °F</p>
        <img alt={description} src={`http://openweathermap.org/img/wn/${icon}.png`}></img><br></br>
      </div>
      <div className='card-bottom'>
        <button className='details-button' onClick={(e) => handleUserSelect(id, name, temp)}>Details</button>
      </div>
    </article>
  )
}

export default WeatherCard