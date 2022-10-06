
const Modal = ({description, temp, humidity, pressure, id, name, setShowModal}) => {
  return (
    <div>
      <div>
        {name}
      </div>
      <div>
        <p>{description}</p>
        <p>Temperature: {temp}</p>
        <p>Humidity: {humidity}</p>
        <p>Pressure: {pressure}</p>
      </div>
      <button onClick={() => setShowModal(false)}>Close</button>
    </div>
  )
}

export default Modal