import { TextLrg, TextMid } from "../Shared/Shared";
import { getIcon } from "../../GetIcon.js";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div {
    width: 50%;
  }
`;
const AtAGlance = ({ data, hourly }) => (
  <Container className="Card">
    <div>
      <TextLrg style={{ marginBottom: 0 }}>{Math.round(data.temp)}°</TextLrg>
      <TextMid style={{ marginTop: 0 }}>{data.weather[0].main}</TextMid>
    </div>
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
  </Container>
);

export default AtAGlance;
