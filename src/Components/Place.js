import styled from "@emotion/styled";
import { Row, TextMid } from "./Shared/Shared";

const Button = styled.button`
  background: var(--background-color);
  border: none;
  border-radius: var(--border-radius);
  /* border: 1px solid red; */
  font-size: 1.25rem;
  /* padding: 1rem; */
  width: 2rem;
  height: 2rem;
  /* width: 1.25rem; */
  display: grid;
  place-items: center;
  margin-left: 1rem;
  color: inherit;
  text-decoration: none;
`;
const Place = ({ place, places, setPlaces, setPlaceIndex, i }) => {
  const deletePlace = async () => {
    setPlaces(places.filter((p) => p !== place));
  };
  return (
    <Row className="underlined">
      <TextMid onClick={() => setPlaceIndex(i)}>{place.address}</TextMid>
      <Button onClick={() => deletePlace()}>x</Button>
    </Row>
  );
};

export default Place;
