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
  "01d": "https://i.imgur.com/C1zpDkS.png", // Clear
  "01n": "https://i.imgur.com/43wXZRJ.png",
  "02d": "https://i.imgur.com/g8ynThE.png", // Few Clouds
  "02n": "https://i.imgur.com/oa8GJC7.png",
  "03d": "https://i.imgur.com/g4d0haV.png", // Scatters Clouds
  "03n": "https://i.imgur.com/g4d0haV.png",
  "04d": "https://i.imgur.com/G5IfZhx.png", // Broken Clouds
  "04n": "https://i.imgur.com/G5IfZhx.png",
  "09d": "https://i.imgur.com/FPVU579.png", // Shower Rain
  "09n": "https://i.imgur.com/FPVU579.png",
  "10d": "https://i.imgur.com/rftzxRO.png", // Rain
  "10n": "https://i.imgur.com/DiXibVq.png",
  "11d": "https://i.imgur.com/TiPb8to.png", // Thunderstorm
  "11n": "https://i.imgur.com/TiPb8to.png",
  "13d": "https://i.imgur.com/aivcjJ9.png", // Snow
  "13n": "https://i.imgur.com/1NH3d8g.png",
  "50d": "https://i.imgur.com/DieNLs4.png", // Mist
  "50n": "https://i.imgur.com/DieNLs4.png",
  high: "https://i.imgur.com/0pjLUo6.png",
  low: "https://i.imgur.com/EI1djFI.png",
  sunrise: "https://i.imgur.com/td5C4TB.png",
  sunset: "https://i.imgur.com/8yoMV8Z.png"
};

export const getIcon = (icon, small = false) => {
  if (small) return iconDictSmall[icon] || iconDictSmall["50n"];
  return iconDict[icon] || iconDict["50n"];
};
