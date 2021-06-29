import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { Row, SpanSml, TextMid } from "./Shared/Shared";

const StyledDiv = styled.div`
  /* border-radius: 1rem; */
  margin-bottom: 0.5rem;
`;

const Alert = (alert) => {
  const { sender_name, event, start, end, description } = alert.alert;
  const history = useHistory();
  return (
    <StyledDiv
      className="Card"
      onClick={() => {
        history.push("/Alerts");
      }}
    >
      <TextMid
        onClick={() => {
          history.push("/Alerts");
        }}
      >
        <strong>{event}</strong>
      </TextMid>
      <Row>
        <TextMid>
          {new Date(start * 1000).toLocaleDateString([], {
            hour: "numeric",
            hour12: true
          })}
        </TextMid>
        <TextMid>
          Untill:{" "}
          {new Date(end * 1000).toLocaleDateString([], {
            hour: "numeric",
            hour12: true
          })}
        </TextMid>
      </Row>
      <p style={{ textTransform: "capitalize" }}>{description}</p>
      <p>
        <SpanSml>{sender_name}</SpanSml>
      </p>
    </StyledDiv>
  );
};

export default Alert;
