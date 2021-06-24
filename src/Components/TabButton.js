import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  background: none;
  border: none;
  padding: 1.2rem;
  font-size: inherit;
  width: 100%;
  color: ${(props) => (props.primary ? "#fff " : "var(--color-primary)")};
  background: ${(props) =>
    props.primary ? "var(--color-primary)" : "#fffffff"};
  border-radius: 5px;
  text-decoration: none;
`;

const TabButton = ({ primary, tab }) => {
  Button.fontWeight = "bold";
  return (
    <Button primary={primary} to={tab[0]}>
      {tab[0]}
    </Button>
  );
};

export default TabButton;
