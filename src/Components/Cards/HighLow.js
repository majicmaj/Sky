import styled from "@emotion/styled";
import { getIcon } from "../../GetIcon";
import { Moon, SpanSml, TextMid, SmlImage } from "../Shared/Shared";

const StatsScroll = styled.div`
  overflow-x: scroll;
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  min-width: max-content;
  justify-content: space-evenly;
  > * {
    min-width: 100px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
const HighLow = ({ data, daily, hourly }) => (
  <div className="Card">
    <StatsScroll>
      <Container>
        {data?.rain?.["1h"] && (
          <div>
            <TextMid>Rain</TextMid>
            <SmlImage alt="weather icon" src={getIcon("09d", true)} />
            <TextMid>
              <strong>{data.rain["1h"]}</strong>
              <SpanSml>mm</SpanSml>
            </TextMid>
          </div>
        )}
        <div>
          <TextMid>Next Hour</TextMid>
          <SmlImage
            alt="weather icon"
            src={getIcon(hourly[1].weather[0].icon, true)}
          />
          <TextMid>
            <strong>{hourly[1].weather[0].main}</strong>
          </TextMid>
        </div>
        <div>
          <TextMid>High</TextMid>
          <SmlImage src={getIcon("high", true)} alt="high" />
          <TextMid>
            <strong>{Math.round(daily[0].temp.max)}°</strong>{" "}
          </TextMid>
        </div>
        <div>
          <TextMid>Low</TextMid>
          <SmlImage src={getIcon("low", true)} alt="low" />
          <TextMid>
            <strong> {Math.round(daily[0].temp.min)}°</strong>
          </TextMid>
        </div>
        <div>
          <TextMid>Sunrise</TextMid>
          <SmlImage src={getIcon("sunrise", true)} alt="sunrise" />
          <TextMid>
            <strong>
              {new Date(data.sunrise * 1000).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
              })}
            </strong>
          </TextMid>
        </div>
        <div>
          <TextMid>Sunset</TextMid>
          <SmlImage src={getIcon("sunset", true)} alt="sunset" />
          <TextMid>
            <strong>
              {new Date(data.sunset * 1000).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
              })}
            </strong>
          </TextMid>
        </div>
        <div>
          <TextMid>Moon</TextMid>
          <div>
            <Moon value={daily[0]?.moon_phase} />
          </div>
          <TextMid>
            <strong>{daily[0]?.moon_phase * 100}%</strong>
          </TextMid>
        </div>
      </Container>
    </StatsScroll>
  </div>
);

export default HighLow;
