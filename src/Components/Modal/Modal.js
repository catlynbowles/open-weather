
const Modal = ({description, temp, humidity, pressure, id, name, setShowModal, visibility}) => {
  return (
    <div>
      <div>
        {name}
      </div>
      <div>
        <p>{description}</p>
        <p>Temperature: {temp}°F</p>
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure.toLocaleString()} hPa</p>
        <p>Visibility: {visibility.toLocaleString()} m</p>
      </div>
      <button onClick={() => setShowModal(false)}>Close</button>
    </div>
  )
}

export default Modal