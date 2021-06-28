// import styled from "@emotion/styled";
import React from "react";
// import AirPollution from "../Cards/AirPollution";
// import AtAGlance from "../Cards/AtAGlance";
// import HighLow from "../Cards/HighLow";
// import NegativeStats from "../Cards/NegativeStats";
// import PositiveStats from "../Cards/PositiveStats";
import Loading from "./Loading";
import {
  Column,
  StyledRow,
  SmlImage,
  TextMid,
  TextLrg,
  StatsScroll,
  Container
} from "../Shared/Shared";
import { getIcon } from "../../GetIcon";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const data = props?.data?.weather?.current;
  const hourly = props?.data?.weather?.hourly;
  const daily = props?.data?.weather?.daily;
  // const astro = props?.data?.astro?.dataseries?.[0];
  // const pollution = props?.data?.pollution?.list?.[0];
  const hourlyItems = [];
  // eslint-disable-next-line no-unused-expressions
  hourly?.slice(1, 25).forEach((hour, i) => {
    const time = new Date(hour.dt * 1000);
    const previous = new Date(time);
    previous.setHours(time.getHours() - 1);
    // let yesterday = previous.toLocaleDateString();
    // const today = time.toLocaleDateString();
    time.setHours(time.getHours() + 1);
    // if (yesterday !== today || i === 0) {
    //   hourlyItems.push(
    //     <Row
    //       style={{
    //         position: "sticky",
    //         top: "0",
    //         background: "var(--card-color)",
    //         padding: "1rem"
    //       }}
    //       className="underlined"
    //     >
    //       <TextMid>
    //         <strong>{time.toLocaleDateString([], { weekday: "long" })}</strong>
    //       </TextMid>
    //     </Row>
    //   );
    // }
    hourlyItems.push(
      <Column style={{ minWidth: "70px" }}>
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
        {/* <p>
          <span role="img" aria-label="Precipitation Chance">
            💧
          </span>
          {Math.round(hour.pop * 100)}%{" "}
        </p> */}
        <p>
          <strong>{Math.round(hour.temp)}°</strong>
        </p>
      </Column>
    );
  });
  const Daily = () => {
    const items = daily.map((day, i) => {
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
            <SmlImage src={getIcon(day.weather[0].icon)} alt="weather" />
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
  const hist = useHistory();
  const goTo = (target) => hist.push(target);
  return data ? (
    <Column>
      <div
        className="Card"
        style={{
          background:
            data.weather[0].icon.slice(-1) === "d"
              ? "var(--color-primary)"
              : "var(--color-primary-dark-gradient)",
          color: "#fff"
        }}
        onClick={() => goTo("/Now")}
      >
        <div>
          <img
            alt="weather icon"
            style={{
              width: "100%",
              maxWidth: "256px",
              height: "auto"
            }}
            src={getIcon(data.weather[0].icon)}
          />
        </div>
        <div>
          <TextMid style={{ marginTop: 0 }}>{data.weather[0].main}</TextMid>
          <TextLrg style={{ marginBottom: "1rem" }}>
            {Math.round(data.temp)}°
          </TextLrg>
        </div>
      </div>
      <div className="Card" onClick={() => goTo("/Hourly")}>
        <StatsScroll>
          <Container>{hourlyItems}</Container>
        </StatsScroll>
      </div>
      <div className="Card" onClick={() => goTo("/Daily")}>
        <Daily />
      </div>
    </Column>
  ) : (
    <Loading />
  );
};

export default Home;
