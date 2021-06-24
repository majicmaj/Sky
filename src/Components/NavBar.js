import styled from "@emotion/styled";
import TabButton from "./TabButton";
import { useLocation } from "react-router-dom";

const Nav = styled.nav({
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  background: "var(--card-color)",
  zIndex: 10
});

const NavBar = ({ tabs }) => {
  const location = useLocation();
  return (
    <Nav>
      {tabs.map((tab, i) => (
        <TabButton
          primary={location.pathname === `/${tab[0]}`}
          tab={tab}
          key={i}
        ></TabButton>
      ))}
    </Nav>
  );
};

export default NavBar;
