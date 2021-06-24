import styled from "@emotion/styled";
import React from "react";
import Navigator from "../Components/Navigator";

const Dashboard = ({ data, setData, places, setPlaces, setPlaceIndex }) => {
  const Main = styled.main`
    height: 100%;
  `;
  return (
    <Main>
      <Navigator
        data={data}
        setData={setData}
        places={places}
        setPlaces={setPlaces}
        setPlaceIndex={setPlaceIndex}
      />
    </Main>
  );
};

export default Dashboard;
