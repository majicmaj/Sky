import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
// import Place from "./Place";
// import { Column } from "./Shared/Shared";
// import useStickyState from "../Hooks/UseStickyState";
const P = styled(Link)`
  margin: 0 0.5rem;
  font-size: 1.25rem;
  color: inherit;
  text-decoration: none;
`;
const Add = styled.button`
  background: var(--card-color);
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
`;

const HeaderBar = styled.header`
  /* display: flex;
  justify-content: space-evenly;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: max-content;
  /* border: 1px solid red; */
  /* margin: 0 auto; */
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  position: sticky;
  top: 0;
  background: var(--card-color);
  > * {
  }
`;

const Dot = styled.button`
  height: 0.5rem;
  width: 0.5rem;
  padding: 0;
  background: #99999950;
  border: none;
  border-radius: 100%;
  margin: 0.5rem;
`;
const DotsBar = styled.div`
  display: flex;
  /* border: 1px solid red; */
`;
const Header = ({ places, placeIndex, setPlaceIndex }) => {
  const getDots = (side) => {
    const dots = [];
    if (side === "left") {
      for (let i = 0; i < placeIndex; i++) {
        dots.push(<Dot />);
      }
    } else {
      for (let i = placeIndex; i < places.length - 1; i++) {
        dots.push(<Dot onClick={() => setPlaceIndex(i)} />);
      }
    }
    return dots;
  };
  return (
    <HeaderBar>
      <DotsBar
        style={{ justifyContent: "flex-end" }}
        onClick={() => {
          if (placeIndex > 0) setPlaceIndex(placeIndex - 1);
        }}
      >
        {getDots("left")}
      </DotsBar>
      <P to="/Add">
        {places[placeIndex] ? (
          <>{places[placeIndex].address}</>
        ) : (
          <>
            <strong>Herndon</strong>, VA
          </>
        )}
      </P>

      <DotsBar
        style={{ justifyContent: "flex-start" }}
        onClick={() => {
          if (placeIndex < places.length - 1) setPlaceIndex(placeIndex + 1);
        }}
      >
        {getDots("right")}
      </DotsBar>
    </HeaderBar>
  );
};

export default Header;
