import React from "react";
import { Line } from "react-chartjs-2";
import styled from "@emotion/styled";
import { Column, GraphSection, Row, Section, SmlImage } from "../Shared/Shared";
import Loading from "./Loading";
import { getIcon } from "../../GetIcon";

const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
`;
const Scrollable = styled.div`
  height: 100%;
`;
const StyledRow = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    width: 100%;
  }
`;
const options = {
  elements: {
    line: {
      tension: 0.4
    }
  },
  plugins: {
    legend: {
      align: "start"
    }
  },
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index"
  },
  datasets: {
    line: {
      pointBackgroundColor: "#00000000",
      pointBorderWidth: 0,
      pointHoverBorderWidth: 2
    }
  },
  responsive: true,
  gridLines: { color: "#00ff00" },
  scales: {
    x: {
      grid: { color: "#00000000" }
    },
    y: {
      grid: { color: "#00000000" }
      // display: false
    }
  }
};
const labels = [];
const time = new Date();
const current = time.getDate();

for (let i = 1; i < 9; i++) {
  const ct = time.toLocaleDateString([], { weekday: "long" });
  labels.push(ct);
  time.setDate(current + i);
}
const Daily = (props) => {
  const data = props?.data?.weather?.daily;
  const getData = (type) => data?.map((h) => h[type]);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "High",
        data: getData("temp")?.map((temp) => Math.round(temp.max)),
        fill: false,
        backgroundColor: "#eb6e4b",
        borderColor: "#eb6e4b"
      },
      {
        label: "Low",
        data: getData("temp")?.map((temp) => Math.round(temp.min)),
        fill: false,
        backgroundColor: "#9e3e23",
        borderColor: "#9e3e23"
      },
      {
        label: "Humidity",
        data: getData("humidity"),
        fill: false,
        backgroundColor: "#4bebbb",
        borderColor: "#4bebbb"
      },
      {
        label: "Clouds",
        data: getData("clouds"),
        fill: false,
        backgroundColor: "#b083f0",
        borderColor: "#b083f0"
      },
      {
        label: "Precipitation",
        data: getData("pop")?.map((p) => p * 100),
        fill: false,
        backgroundColor: "#529bf5",
        borderColor: "#529bf5"
      },
      {
        label: "Moon phase",
        data: getData("moon_phase")?.map((p) => p * 100),
        fill: false,
        backgroundColor: "#9b9b9b",
        borderColor: "#9b9b9b"
      }
    ]
  };
  const List = () => {
    const items = data.map((day, i) => {
      const time = new Date(day.dt * 1000);
      time.setHours(time.getHours() + 1);
      return (
        <StyledRow key={i} className="underlined">
          <p>
            {day &&
              new Date(day.dt * 1000).toLocaleDateString([], {
                weekday: "short"
              })}
          </p>
          <div>
            <SmlImage src={getIcon(day.weather[0].icon, true)} alt="weather" />
          </div>
          {/* <p>{day.weather[0].main} </p> */}
          <p>{Math.round(day.temp.max)}°</p>
          <p>{Math.round(day.temp.min)}°</p>
          <p>
            <span role="img" aria-label="Precipitation Chance">
              💧
            </span>
            {Math.round(day.pop * 100)}%{" "}
          </p>
        </StyledRow>
      );
    });
    return <div className="">{items}</div>;
  };
  return (
    <>
      {data ? (
        <Column>
          <GraphSection className="Card">
            <Container>
              <Scrollable>
                <Line data={chartData} options={options} />
              </Scrollable>
            </Container>
          </GraphSection>
          <div className="Card">
            <List />
          </div>
        </Column>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Daily;
