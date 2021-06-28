import styled from "@emotion/styled";
import React from "react";
import Place from "../Place";
import { Column } from "../Shared/Shared";

let autoComplete;

const Input = styled.input`
  background: var(--card-color);
  border: none;
  border-radius: var(--border-radius);
  color: inherit;
  font-size: 1.25rem;
`;

export const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  // script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

export const handleScriptLoad = (inputRef, handlePlaceSelect) => {
  autoComplete = new window.google.maps.places.Autocomplete(inputRef.current, {
    types: ["(cities)"]
  });
  autoComplete.setFields(["address_components", "geometry"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(autoComplete)
  );
};

const Add = ({ places, setPlaces, setPlaceIndex }) => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const handlePlaceSelect = (autoComplete) => {
      const place = autoComplete.getPlace();
      if (!place?.address_components) return;
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const loc = { latitude: lat, longitude: lng };
      const newPlace = {
        address: (
          <>
            <strong>{place.address_components[0].long_name}</strong>,{" "}
            {place.address_components[2].short_name}
          </>
        ),
        location: loc
      };
      setPlaces([...places, newPlace]);
      setValue("");
    };
    handleScriptLoad(inputRef, handlePlaceSelect);
  }, []);

  // React.useEffect(() => {}, [inputRef]);

  return (
    <Column>
      <Input
        value={value}
        ref={inputRef}
        autoFocus
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="Card"
      />
      {places?.length > 0 && (
        <div className="Card">
          {places.map((place, i) => (
            <Place
              key={i}
              place={place}
              places={places}
              i={i}
              setPlaces={setPlaces}
              setPlaceIndex={setPlaceIndex}
            />
          ))}
        </div>
      )}
    </Column>
  );
};

export default Add;
