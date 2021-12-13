import styled from "styled-components";

export const MyButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: -3px 3px 3px var(--btn-pshadow);
  background-color: ${(props) =>
    props.navScrolled ? "var(--btn-ptext)" : "var(--btn-primary)"};
  color: ${(props) =>
    props.navScrolled ? "var(--btn-primary)" : "var(--btn-ptext)"};
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {
    box-shadow: ${(props) =>
      props.navScrolled ? "none" : "0px 0px 3px var(--btn-pshadow)"};
    transform: ${(props) =>
      props.navScrolled ? "none" : "translate(-2px, 2px)"};
  }
`;
