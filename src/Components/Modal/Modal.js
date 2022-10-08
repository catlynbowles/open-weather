import './Modal.scss'
import InfoBox from '../../InfoBox/InfoBox';

const Modal = ({ description, temp, humidity, pressure, id, name, handleClose, visibility, feelsLike, tempMin, tempMax, icon, cloudCover, wind, sunrise, sunset }) => {
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
        { description: 'Cloud Coverage', measure: `${cloudCover}%` }, { description: 'Wind', measure: `${wind} mph` }
        ])}
      </div>
      <div className='stats-container'>
        <div className='temp-box'>
          {generateInfoBox(`Today's Temperatures`, [{ description: 'Currently', measure: `${temp} °F` },
          { description: 'Feels Like', measure: `${feelsLike} °F` }, { description: 'Range', measure: `${tempMin} °F - ${tempMax} °F` }
        ])}
        </div>
        <div className='other-box'>
          {generateInfoBox(`Additional Factors`, [{ description: 'Humidity', measure: `${humidity}%` },
          { description: 'Pressure', measure: `${pressure.toLocaleString()} hPa` }, { description: 'Visibility', measure: `${visibility.toLocaleString()} m` }
        ])}
        </div>
      </div>
      <button onClick={() => handleClose()}>Close</button>
    </section>
  )
}

export default Modal

{/* <h3>Today's Temperatures</h3>
<p><em>Currently</em><br />{temp} °F</p>
<p><em>Feels Like</em><br /> {feelsLike} °F</p>
<p><em>Range</em><br /> {tempMin} °F - <br />{tempMax} °F</p> */}
{/* <h3>Additional Factors</h3>
<p><em>Humidity</em><br /> {humidity}%</p>
<p><em>Pressure</em><br /> {pressure.toLocaleString()} hPa</p>
<p><em>Visibility</em><br /> {visibility.toLocaleString()} m</p> */}
{/* <h3>{description}</h3>
<p><em>Sunrise & Sunset</em><br />{formatDate(sunrise)} - {formatDate(sunset)}</p>
<p><em>Cloud Coverage</em><br /> {cloudCover}%</p>
<p><em>Wind</em><br /> {wind} mph</p> */}