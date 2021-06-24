import React from "react";
import { Line } from "react-chartjs-2";
import styled from "@emotion/styled";
import { Column, GraphSection, Row, SmlImage, TextMid } from "../Shared/Shared";
import Loading from "./Loading";
import { getIcon } from "../../GetIcon.js";

const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
`;
const Scrollable = styled.div`
  width: max(750px, 100%);
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
    }
  }
};
const Hourly = (props) => {
  const data = props?.data?.weather?.hourly;
  const astro = props?.data?.astro?.dataseries;
  const labels = data?.map((hour) => {
    const time = new Date(hour.dt * 1000);
    return time.toLocaleTimeString([], { hour: "numeric", hour12: true });
  });
  const initTime = props?.data?.astro?.init.toString() || "20210618";
  const astroTime = new Date();
  astroTime.setFullYear(initTime.slice(0, 4));
  astroTime.setMonth(initTime.slice(5, 6));
  astroTime.setDate(initTime.slice(7, 8));
  astroTime.setHours(initTime.slice(9, 10));
  const astroLabels = astro?.map((item) => {
    const time = new Date();
    time.setHours(astroTime.getHours() + item.timepoint);
    return time.toLocaleTimeString([], { hour: "numeric", hour12: true });
  });
  const getData = (type) => data?.map((h) => h[type]);
  const getAstroData = (type) => astro?.map((h) => Math.round(h[type]));

  // const labels = Array.from(Array(48).keys());
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Temperature",
        data: getData("temp"),
        fill: false,
        backgroundColor: "#eb6e4b",
        borderColor: "#eb6e4b"
      },
      {
        label: "Humidity",
        data: getData("humidity"),
        fill: false,
        hidden: true,
        backgroundColor: "#4bebbb",
        borderColor: "#4bebbb"
      },
      {
        label: "Visibility",
        data: getData("visibility")?.map((v) => v / 100),
        fill: false,
        hidden: true,
        backgroundColor: "#e275ad",
        borderColor: "#e275ad"
      },
      {
        label: "Clouds",
        data: getData("clouds"),
        fill: false,
        // hidden: true,
        backgroundColor: "#b083f0",
        borderColor: "#b083f0"
      },
      {
        label: "Precipitation",
        data: getData("pop")?.map((p) => p * 100),
        fill: false,
        // hidden: true,
        backgroundColor: "#529bf5",
        borderColor: "#529bf5"
      },
      {
        label: "Rain",
        data: data?.map((h) => h?.rain?.["1h"] || 0),
        fill: false,
        // hidden: true,
        backgroundColor: "#345CEB",
        borderColor: "#345CEB"
      }
    ]
  };
  const astroChartData = {
    labels: astroLabels,
    datasets: [
      {
        label: "Seeing",
        data: getAstroData("seeing")?.map((x) =>
          Math.round(((x - 1) * 100) / 7)
        ),
        fill: true,
        backgroundColor: "#eb6e4b20",
        borderColor: "#eb6e4b"
      },
      {
        label: "Transparency",
        data: getAstroData("transparency")?.map((x) =>
          Math.round(((x - 1) * 100) / 7)
        ),
        fill: true,
        backgroundColor: "#4bebbb20",
        borderColor: "#4bebbb"
      }
    ]
  };

  const items = [];
  // eslint-disable-next-line no-unused-expressions
  data?.forEach((hour, i) => {
    const time = new Date(hour.dt * 1000);
    const previous = new Date(time);
    previous.setHours(time.getHours() - 1);
    let yesterday = previous.toLocaleDateString();
    const today = time.toLocaleDateString();
    time.setHours(time.getHours() + 1);
    if (yesterday !== today || i === 0) {
      items.push(
        <Row
          style={{
            position: "sticky",
            top: "0",
            background: "var(--card-color)",
            padding: "1rem"
          }}
          className="underlined"
        >
          <TextMid>
            <strong>{time.toLocaleDateString([], { weekday: "long" })}</strong>
          </TextMid>
        </Row>
      );
    }
    items.push(
      <StyledRow className="underlined">
        <p>
          {hour &&
            new Date(hour.dt * 1000).toLocaleTimeString([], {
              hour: "numeric"
            })}
        </p>
        <div>
          <SmlImage src={getIcon(hour.weather[0].icon)} alt="weather" />
        </div>
        {/* <p>{hour.weather[0].main} </p> */}
        <p>
          <span role="img" aria-label="Precipitation Chance">
            💧
          </span>
          {Math.round(hour.pop * 100)}%{" "}
        </p>
        <p>{Math.round(hour.temp)}°</p>
      </StyledRow>
    );
  });
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
          <GraphSection className="Card">
            <Container>
              <Scrollable>
                <Line data={astroChartData} options={options} />
              </Scrollable>
            </Container>
          </GraphSection>
          <div className="Card">{items}</div>
        </Column>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Hourly;
