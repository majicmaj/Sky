import { Progress, Row, SpanSml, TextMid } from "../Shared/Shared";

const PositiveStats = ({ data, astro, pollution }) => (
  <div className="Card">
    <div className="underlined">
      <Row>
        <TextMid>Visilbility</TextMid>
        <TextMid>
          <strong>{data.visibility}</strong>
          <SpanSml>m</SpanSml>
        </TextMid>
      </Row>
      <Progress value={(data.visibility - 1) / 9999} />
    </div>
    <div className="underlined">
      <Row>
        <TextMid>Seeing</TextMid>
        <TextMid>
          <strong>{Math.round(((astro?.seeing - 1) / 7) * 100)}</strong>
          <SpanSml>%</SpanSml>
        </TextMid>
      </Row>
      <Progress value={(astro?.seeing - 1) / 7} />
    </div>
    <div className="underlined">
      <Row>
        <TextMid>Transparency</TextMid>
        <TextMid>
          <strong>{Math.round(((astro.transparency - 1) / 7) * 100)}</strong>
          <SpanSml>%</SpanSml>
        </TextMid>
      </Row>
      <Progress value={(astro.transparency - 1) / 7} />
    </div>
    <div className="underlined">
      <Row>
        <TextMid>Air Quality</TextMid>

        <TextMid>
          <strong>{6 - pollution?.main.aqi}</strong>
          <SpanSml>/5</SpanSml>
        </TextMid>
      </Row>
      <Progress value={(6 - pollution?.main.aqi) / 5} />
    </div>
    <p style={{ textAlign: "left" }}>
      <SpanSml>
        <i>Higher is better</i>
      </SpanSml>
    </p>
  </div>
);

export default PositiveStats;
