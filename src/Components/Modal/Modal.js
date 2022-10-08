
const Modal = ({description, temp, humidity, pressure, id, name, setShowModal, visibility, feelsLike, tempMin, tempMax}) => {
  return (
    <div>
      <div>
        {name}
        <p>{description}</p>
      </div>
      <div>
        <p>Temperature: {temp} °F</p>
        <p>Feels Like: {feelsLike} °F</p>
        <p>Today's Low: {tempMin} °F</p>
        <p>Today's High: {tempMax} °F</p>
      </div>
      <div>
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure.toLocaleString()} hPa</p>
        <p>Visibility: {visibility.toLocaleString()} m</p>
      </div>
      <button onClick={() => setShowModal(false)}>Close</button>
    </div>
  )
}

export default Modal