import { Row, SpanSml, TextMid } from "../Shared/Shared";

const AirPollution = ({ pollution }) => (
  <div className="Card">
    <Row>
      <TextMid>Air Pollution</TextMid>
    </Row>
    {pollution &&
      Object.entries(pollution?.components).map((item, i) => (
        <Row key={i} className="underlined">
          <TextMid>{item[0].toUpperCase().replace("_", ".")}</TextMid>
          <TextMid>
            <strong>{item[1]}</strong>
            <SpanSml> μg/m3</SpanSml>
          </TextMid>
        </Row>
      ))}
    <Row>
      <SpanSml>
        <i>Lower is better</i>
      </SpanSml>
    </Row>
  </div>
);

export default AirPollution;
