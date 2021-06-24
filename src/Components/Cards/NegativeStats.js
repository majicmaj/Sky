import { Progress, Row, SpanSml, TextMid } from "../Shared/Shared";

const NegativeStats = ({ data, hourly }) => (
  <div className="Card">
    <div className="underlined">
      <Row>
        <TextMid>Precipitation</TextMid>
        <TextMid>
          <strong>{Math.round(hourly[0].pop * 100)}</strong>
          <SpanSml>%</SpanSml>
        </TextMid>
      </Row>
      <Progress red value={hourly[0].pop} />
    </div>
    <div className="underlined">
      <Row>
        <TextMid>Cloud Cover</TextMid>
        <TextMid>
          <strong>{data.clouds}</strong>
          <SpanSml>%</SpanSml>
        </TextMid>
      </Row>
      <Progress red value={(data.clouds - 1) / 99} />
    </div>
    <div Column className="underlined">
      <Row>
        <TextMid>Humidity</TextMid>
        <TextMid>
          <strong>{data.humidity}</strong>
          <SpanSml>%</SpanSml>
        </TextMid>
      </Row>
      <Progress red value={data.humidity / 100} />
    </div>
    <div Column className="underlined">
      <Row>
        <TextMid>UV Index</TextMid>
        <TextMid>
          <strong>{data.uvi}</strong>
          <SpanSml>/10</SpanSml>
        </TextMid>
      </Row>
      <Progress red value={data.uvi / 10} />
    </div>
    <p style={{ textAlign: "left" }}>
      <SpanSml>
        <i>Lower is better</i>
      </SpanSml>
    </p>
  </div>
);

export default NegativeStats;
