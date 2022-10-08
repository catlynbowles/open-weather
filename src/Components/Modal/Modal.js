import './Modal.scss'
import InfoBox from '../../InfoBox/InfoBox';
import Subline from '../Subline/Subline';

const Modal = ({ description, temp, humidity, pressure, id, name, handleClose, visibility, feelsLike, tempMin, tempMax, icon, cloudCover, wind, sunrise, sunset, rain, snow }) => {
  const formatDate = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString();
  }

  const generateInfoBox = (caption, statistics) => {
    return (
      <InfoBox
        caption={caption}
        statistics={statistics}
      />
    )
  }

  return (
    <section className='modal-body'>
      <div className='modal-header'>
        <h2>{name}</h2>
      </div>
      <div className='sub-header'>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`}></img>
        {generateInfoBox(description, [{ description: 'Sunrise & Sunset', measure: `${formatDate(sunrise)} - ${formatDate(sunset)}` },
        { description: 'Cloud Coverage', measure: `${cloudCover}%` },
        { description: 'Wind', measure: `${wind} mph` }
        ])}
        {/* {rain && <Subline description='Rain' measure={rain['1h']} />}
        {snow && <Subline description='Snow' measure={snow['1h']} />} */}
      </div>
      <div className='stats-container'>
        <div className='temp-box'>
          {generateInfoBox(`Today's Temperatures`, [{ description: 'Currently', measure: `${temp} °F` },
          { description: 'Feels Like', measure: `${feelsLike} °F` },
          { description: 'Range', measure: `${tempMin} °F - ${tempMax} °F` }
          ])}
        </div>
        <div className='other-box'>
          {generateInfoBox(`Additional Factors`, [{ description: 'Humidity', measure: `${humidity}%` },
          { description: 'Pressure', measure: `${pressure.toLocaleString()} hPa` },
          { description: 'Visibility', measure: `${visibility.toLocaleString()} m` }
          ])}
        </div>
      </div>
      <button onClick={() => handleClose()}>Close</button>
    </section>
  )
}

export default Modal