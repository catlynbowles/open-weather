import "./WeatherCard.scss";

const WeatherCard = ({
  name,
  temp,
  icon,
  handleUserSelect,
  id,
  description,
}) => {
  const splitName = name.split(",");

  return (
    <article className="weather-card">
      <h2 className="city-name">
        {splitName[0]}, <br />
        {splitName[1]}
      </h2>
      <div className="temp-center">
        <p className="temp">{temp} °F</p>
        <img
          alt={description}
          src={`http://openweathermap.org/img/wn/${icon}.png`}
        ></img>
        <br></br>
      </div>
      <div className="card-bottom">
        <button className="details-button" onClick={() => handleUserSelect(id)}>
          Details
        </button>
      </div>
    </article>
  );
};

export default WeatherCard;
