import styled from "@emotion/styled";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Place from "./Place";
import { Column } from "./Shared/Shared";
import useStickyState from "../Hooks/UseStickyState";
const P = styled(Link)`
  /* margin: 1rem 0; */
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  > * {
  }
`;

const Header = ({ places, placeIndex }) => {
  return (
    <HeaderBar>
      <div />
      <P to="/Add">
        {places[placeIndex] ? (
          <>
            {places[placeIndex].address}
            {/* <strong>{data?.geo?.[0]?.name}</strong>, {data?.geo?.[0]?.state} */}
          </>
        ) : (
          <>
            <strong>Herndon</strong>, VA
          </>
        )}
      </P>
      <Add>{placeIndex}</Add>
    </HeaderBar>
  );
};

export default Header;
