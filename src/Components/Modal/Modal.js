import './Modal.scss'

const Modal = ({ description, temp, humidity, pressure, id, name, setShowModal, visibility, feelsLike, tempMin, tempMax, icon }) => {
  return (
    <section className='modal-body'>
      <div className='modal-header'>
        <h2>{name}</h2>
      </div>
      <div>
        <h3>{description}</h3>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`}></img>
      </div>
      <div className='stats-container'>
        <div className='temp-box'>
          <h3>Today's Temperatures</h3>
          <p>Currently<br />{temp} °F</p>
          <p>Feels Like<br /> {feelsLike} °F</p>
          <p>Today's Highs and Lows<br /> {tempMin} °F - {tempMax} °F</p>
        </div>
        <div className='other-box'>
          <h3>Additional Factors</h3>
          <p>Humidity<br /> {humidity}%</p>
          <p>Pressure<br /> {pressure.toLocaleString()} hPa</p>
          <p>Visibility<br /> {visibility.toLocaleString()} m</p>
        </div>
      </div>
      <button onClick={() => setShowModal(false)}>Close</button>
    </section>
  )
}

export default Modal