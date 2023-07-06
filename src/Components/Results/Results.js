import "./Results.scss";
import { useEffect, useState } from "react";
import { getCityCoordinate } from "../../apiCalls";
import Homepage from "../../Views/Homepage/Homepage";
import Error from "../Error/Error";
import { useLocation, Link } from "react-router-dom";

function Results() {
  const location = useLocation();
  const { city, state } = location.state;
  console.log(city, state);
  const [cityCoordinates, setCityCoordinates] = useState([]);
  const [error, setError] = useState("");
  const [locations] = useState([{ city: city, state: state }]);
  // const [locations] = useState([
  //   { city: "Honolulu", state: "Hawaii" },
  //   { city: "New York", state: "New York" },
  //   { city: "Las Vegas", state: "Nevada" },
  //   { city: "Anchorage", state: "Alaska" },
  //   { city: "Portland", state: "Oregon" },
  // ]);

  useEffect(() => {
    Promise.allSettled(
      locations.map((loc) => getCityCoordinate(loc.city, loc.state))
    )
      .then((data) =>
        setCityCoordinates(
          data
            .filter((loc) => loc.status === "fulfilled")
            .map((loc) => loc.value)
            .flat(1)
        )
      )
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="Results">
      {error ? (
        <Error error={error} />
      ) : (
        <Homepage cityCoordinates={cityCoordinates} />
      )}
      <Link to="/" style={{ textDecoration: "none" }} className="link">
        Go Back
      </Link>
    </div>
  );
}

export default Results;
