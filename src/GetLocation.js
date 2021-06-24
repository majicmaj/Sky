let autoComplete;
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

  script.src = url;
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

// const handlePlaceSelect = async () => {
//   const placeObject = autoComplete.getPlace();
//   console.log(placeObject);
// };
