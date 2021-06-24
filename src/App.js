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

// DEV MODE TOGGLE
let dev = false;
dev = true;

export default function App() {
  const [data, setData] = React.useState();
  const [location, setLocation] = React.useState();
  const [places, setPlaces] = React.useState([]);
  const [placeIndex, setPlaceIndex] = React.useState(0);

  // Turn this off to disable API mocking

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
  // React.useEffect(() => {
  //   const success = (pos) => {
  //     setLocation({
  //       lat: pos.coords.latitude,
  //       lon: pos.coords.longitude
  //     });
  //   };

  //   const error = (err) => {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   };
  //   setData(devData);
  //   dev
  //     ? // setLocation({ lat: -77.3806798, lon: 38.9196217 })
  //       success({ coords: { latiutde: -77.3806798, longitude: 38.9196217 } })
  //     : navigator.geolocation.getCurrentPosition(success, error, options);
  // }, []);

  // React.useEffect(() => {
  //   // console.log(
  //   //   "getting Data ",
  //   //   places[placeIndex]?.address || places[placeIndex]
  //   // );
  //   if (!location?.lat) return;
  //   const URLs = {
  //     weather: `${process.env.REACT_APP_CALL}${process.env.REACT_APP_OPEN_WEATHER_KEY}&lat=${location?.lat}&lon=${location?.lon}`,
  //     astro: `${process.env.REACT_APP_ASTRO}&lat=${location?.lat}&lon=${location?.lon}`,
  //     geo: `${process.env.REACT_APP_GEOCODING}${process.env.REACT_APP_OPEN_WEATHER_KEY}&lat=${location?.lat}&lon=${location?.lon}`,
  //     pollution: `${process.env.REACT_APP_POLLUTION}${process.env.REACT_APP_OPEN_WEATHER_KEY}&lat=${location?.lat}&lon=${location?.lon}`
  //   };

  //   const getData = () => {
  //     let response = {};
  //     !dev
  //       ? Object.entries(URLs).forEach(async (url) => {
  //           // console.log(url[1]);
  //           const r = await axios.get(url[1]);
  //           response[url[0]] = r.data;
  //           setData({ ...data, ...response });
  //         })
  //       : setData({ ...devData, ...data });
  //   };
  //   getData();;
  //   if (places.length > 0) return;
  //   const newPlace = {
  //     address: (
  //       <>
  //         <strong>{data?.geo?.[0]?.name}</strong>, {data?.geo?.[0]?.state}
  //       </>
  //     ),
  //     location: location
  //   };
  //   console.log(newPlace);
  //   setPlaces([newPlace]);
  //   console.log("Places", places);
  // }, [location, placeIndex]);

  // React.useEffect(() => {
  //   setLocation({
  //     lat: places?.[placeIndex]?.[1].lat,
  //     lon: places?.[placeIndex]?.[1].lng
  //   });
  // }, [places, placeIndex]);

  // React.useEffect(() => {
  //   const newPlace = [
  //     <>
  //       <strong>{data?.geo?.[0]?.name}</strong>, {data?.geo?.[0]?.state}
  //     </>,
  //     { lat: location.lat, lng: location.lon }
  //   ];
  //   setPlaces([newPlace, ...places]);
  // }, [data]);

  return (
    <Router>
      <div className="App">
        <Header
          data={data}
          setData={setData}
          places={places}
          placeIndex={placeIndex}
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
