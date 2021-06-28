const iconDict = {
  "01d": "https://i.imgur.com/NMDA4Bl.png", // Clear
  "01n": "https://i.imgur.com/ofbFRR9.png",
  "02d": "https://i.imgur.com/49eFUwO.png", // Few Clouds
  "02n": "https://i.imgur.com/w9hbSel.png",
  "03d": "https://i.imgur.com/U7C6wtI.png", // Scatters Clouds
  "03n": "https://i.imgur.com/U7C6wtI.png",
  "04d": "https://i.imgur.com/on0DzwQ.png", // Broken Clouds
  "04n": "https://i.imgur.com/on0DzwQ.png",
  "09d": "https://i.imgur.com/vdXY27M.png", // Shower Rain
  "09n": "https://i.imgur.com/vdXY27M.png",
  "10d": "https://i.imgur.com/GIjO03H.png", // Rain
  "10n": "https://i.imgur.com/vyE7IRd.png",
  "11d": "https://i.imgur.com/5CyNpdM.png", // Thunderstorm
  "11n": "https://i.imgur.com/5CyNpdM.png",
  "13d": "https://i.imgur.com/kKeH0zt.png", // Snow
  "13n": "https://i.imgur.com/3TliUMC.png",
  "50d": "https://i.imgur.com/XjsVd7R.png", // Mist
  "50n": "https://i.imgur.com/XjsVd7R.png",
  high: "https://i.imgur.com/OaugRD4.png",
  low: "https://i.imgur.com/k863Yse.png",
  sunrise: "https://i.imgur.com/1SmRKPp.png",
  sunset: "https://i.imgur.com/zm9fVXJ.png"
};

const iconDictSmall = {
  "01d": "https://i.imgur.com/lAF9QMn.png", // Clear
  "01n": "https://i.imgur.com/SFA2fV3.png",
  "02d": "https://i.imgur.com/vD3Q7AG.png", // Few Clouds
  "02n": "https://i.imgur.com/z6A8QUk.png",
  "03d": "https://i.imgur.com/jySmqqH.png", // Scatters Clouds
  "03n": "https://i.imgur.com/jySmqqH.png",
  "04d": "https://i.imgur.com/fjKJgZ8.png", // Broken Clouds
  "04n": "https://i.imgur.com/fjKJgZ8.png",
  "09d": "https://i.imgur.com/GgRLWVw.png", // Shower Rain
  "09n": "https://i.imgur.com/GgRLWVw.png",
  "10d": "https://i.imgur.com/uvSxUaE.png", // Rain
  "10n": "https://i.imgur.com/DX1E7XH.png",
  "11d": "https://i.imgur.com/oA3VxUU.png", // Thunderstorm
  "11n": "https://i.imgur.com/oA3VxUU.png",
  "13d": "https://i.imgur.com/hpyGDFx.png", // Snow
  "13n": "https://i.imgur.com/r5ZTtRz.png",
  "50d": "https://i.imgur.com/biSmT5W.png", // Mist
  "50n": "https://i.imgur.com/biSmT5W.png",
  high: "https://i.imgur.com/DAvnxZj.png",
  low: "https://i.imgur.com/vSEjxHC.png",
  sunrise: "https://i.imgur.com/2xCK2ck.png",
  sunset: "https://i.imgur.com/qW9FZ5j.png"
};

export const getIcon = (icon, small = false) => {
  if (small) return iconDictSmall[icon] || iconDictSmall["50n"];
  return iconDict[icon] || iconDict["50n"];
};
