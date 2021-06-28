import React from "react";
import axios from "axios";
import Header from "./Components/Header";
import Dashboard from "./Containers/Dashboard";
import weather from "./data/onecall.json";
import astro from "./data/astro.json";
import pollution from "./data/pollution.json";
import geo from "./data/geo.json";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
// import useStickyState from "./Hooks/UseStickyState";

// DEV MODE TOGGLE
let dev = false;
// dev = true;

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
const devData = {
  weather: weather,
  astro: astro,
  pollution: pollution,
  geo: geo
};

export default function App() {
  const [data, setData] = React.useState();
  const [location, setLocation] = React.useState();
  const [places, setPlaces] = React.useState([]);
  const [placeIndex, setPlaceIndex] = React.useState(0);
  // const [cache, setCache] = React.useState({});

  React.useEffect(() => {
    if (!data) {
      setData(devData);
    }
    // if ([places?.[placeIndex]]?.location) {
    //   return setLocation([places[placeIndex]].location);
    // }

    const success = ({ coords }) => {
      setLocation(coords);
    };

    dev
      ? success({ coords: { latitude: -77.3806798, longitude: 38.9196217 } })
      : navigator.geolocation.getCurrentPosition(
          success,
          console.warn,
          options
        );
  }, []);

  React.useEffect(() => {
    if (!location?.latitude) return;
    const URLs = {
      weather: `${process.env.REACT_APP_CALL}${process.env.REACT_APP_OPEN_WEATHER_KEY}&lat=${location?.latitude}&lon=${location?.longitude}`,
      astro: `${process.env.REACT_APP_ASTRO}&lat=${location?.latitude}&lon=${location?.longitude}`,
      geo: `${process.env.REACT_APP_GEOCODING}${process.env.REACT_APP_OPEN_WEATHER_KEY}&lat=${location?.latitude}&lon=${location?.longitude}`,
      pollution: `${process.env.REACT_APP_POLLUTION}${process.env.REACT_APP_OPEN_WEATHER_KEY}&lat=${location?.latitude}&lon=${location?.longitude}`
    };
    let response = {};
    const getData = async () => {
      dev
        ? setData({ ...devData, ...data })
        : Object.entries(URLs).forEach(async (url) => {
            console.log(url[1]);
            const r = await axios.get(url[1]);
            response[url[0]] = r.data;
            setData({ ...data, ...response });
          });
    };
    getData();
  }, [location]);

  React.useEffect(() => {
    if (places.length > 0 || !data?.geo || !location?.latitude) return;
    const newPlace = {
      address: (
        <>
          <strong>{data?.geo?.[0]?.name},</strong> {data?.geo?.[0]?.state}
        </>
      ),
      location: location
    };
    setPlaces([newPlace]);
  }, [data]);

  React.useEffect(() => {
    if (!places[placeIndex]?.location) return;
    setLocation(places[placeIndex].location);
    console.log(location);
  }, [placeIndex]);

  return (
    <Router>
      <div className="App">
        <Header
          data={data}
          setData={setData}
          places={places}
          placeIndex={placeIndex}
          setPlaceIndex={setPlaceIndex}
        />
        {dev && (
          <div
            className="Card"
            style={{
              background: "var(--color-primary)",
              color: "#fff",
              padding: "1rem"
            }}
          >
            <p>
              Developer Mode <strong>On</strong>
            </p>
          </div>
        )}
        <Dashboard
          data={data}
          setData={setData}
          places={places}
          setPlaces={setPlaces}
          setPlaceIndex={setPlaceIndex}
        />
      </div>
    </Router>
  );
}
