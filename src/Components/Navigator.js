import styled from "@emotion/styled";
import React from "react";
import Daily from "./Tabs/Daily";
import Hourly from "./Tabs/Hourly";
import Now from "./Tabs/Now";
import NavBar from "./NavBar";
import Tab from "./Tab";
import Home from "./Tabs/Home";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* border: 1px solid red; */
`;
const Navigator = ({ data, setData, places, setPlaces, setPlaceIndex }) => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const tabs = [
    ["Home", Home],
    ["Now", Now],
    ["Hourly", Hourly],
    ["Daily", Daily]
  ];

  return (
    <Div>
      <NavBar
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <Tab
        places={places}
        setPlaces={setPlaces}
        data={data}
        setData={setData}
        tabs={tabs}
        currentTab={currentTab}
        setPlaceIndex={setPlaceIndex}
      />
    </Div>
  );
};

export default Navigator;
