import './Modal.scss'

const Modal = ({ description, temp, humidity, pressure, id, name, handleClose, visibility, feelsLike, tempMin, tempMax, icon, cloudCover, wind }) => {
  return (
    <section className='modal-body'>
      <div className='modal-header'>
        <h2>{name}</h2>
      </div>
      <div className='sub-header'>
        <h3>{description}</h3>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`}></img>
        <p><em>Cloud Coverage</em><br /> {cloudCover}%</p>
        <p><em>Wind</em><br /> {wind} mph</p>
      </div>
      <div className='stats-container'>
        <div className='temp-box'>
          <h3>Today's Temperatures</h3>
          <p><em>Currently</em><br />{temp} °F</p>
          <p><em>Feels Like</em><br /> {feelsLike} °F</p>
          <p><em>Range</em><br /> {tempMin} °F - <br />{tempMax} °F</p>
        </div>
        <div className='other-box'>
          <h3>Additional Factors</h3>
          <p><em>Humidity</em><br /> {humidity}%</p>
          <p><em>Pressure</em><br /> {pressure.toLocaleString()} hPa</p>
          <p><em>Visibility</em><br /> {visibility.toLocaleString()} m</p>
        </div>
      </div>
      <button onClick={() => handleClose()}>Close</button>
    </section>
  )
}

export default Modal