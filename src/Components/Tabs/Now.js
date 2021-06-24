import styled from "@emotion/styled";
import React from "react";
import AirPollution from "../Cards/AirPollution";
import AtAGlance from "../Cards/AtAGlance";
import HighLow from "../Cards/HighLow";
import NegativeStats from "../Cards/NegativeStats";
import PositiveStats from "../Cards/PositiveStats";
import Loading from "./Loading";
import { Column } from "../Shared/Shared";

const Responsive = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid red; */
  padding: 0 0.5rem;
  margin: 0;
  > * {
    flex: 1 0 auto;
    margin: 0.5rem;
    width: calc(50% - 1rem);
    min-width: 250px;
  }
`;

const Now = (props) => {
  const data = props?.data?.weather?.current;
  const hourly = props?.data?.weather?.hourly;
  const daily = props?.data?.weather?.daily;
  const astro = props?.data?.astro?.dataseries?.[0];
  const pollution = props?.data?.pollution?.list?.[0];
  return data ? (
    <Column>
      <AtAGlance data={data} hourly={hourly} />
      <HighLow data={data} daily={daily} hourly={hourly} />
      <Responsive>
        <NegativeStats data={data} hourly={hourly} />
        <PositiveStats pollution={pollution} data={data} astro={astro} />
      </Responsive>
      <AirPollution pollution={pollution} />
    </Column>
  ) : (
    <Loading />
  );
};

export default Now;
