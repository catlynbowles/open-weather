import './Modal.scss'
import InfoBox from '../../InfoBox/InfoBox';

const Modal = ({ description, temp, humidity, pressure, id, name, handleClose, visibility, feelsLike, tempMin, tempMax, icon, cloudCover, wind, sunrise, sunset, rain, snow }) => {
  const formatDate = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString();
  }

  return (
    <section className='modal-body'>
      <div className='modal-header'>
        <h2 tabIndex='0'>{name}</h2>
      </div>
      <div className='sub-header'>
        <img tabIndex='0' alt={description} src={`http://openweathermap.org/img/wn/${icon}.png`}></img>
        <InfoBox caption={description} statistics={[{ description: 'Sunrise & Sunset', measure: `${formatDate(sunrise)} - ${formatDate(sunset)}` }, { description: 'Cloud Coverage', measure: `${cloudCover}%` }, { description: 'Wind', measure: `${wind} mph` }]} />
      </div>
      <div className='stats-container'>
        <InfoBox caption={`Today's Temperatures`} statistics={[{ description: 'Currently', measure: `${temp} °F` }, { description: 'Feels Like', measure: `${feelsLike} °F` }, { description: 'Range', measure: `${tempMin} °F - ${tempMax} °F` }]} />
        <InfoBox caption={`Additional Factors`} statistics={[{ description: 'Humidity', measure: `${humidity}%` }, { description: 'Pressure', measure: `${pressure.toLocaleString()} hPa` }, { description: 'Visibility', measure: `${visibility.toLocaleString()} m` }]} />
      </div>
      <button onClick={() => handleClose()}>Close</button>
    </section>
  )
}

export default Modal