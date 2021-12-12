import styled from "styled-components";

export const MyButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: -3px 3px 3px var(--btn-pshadow);
  background-color: var(--btn-primary);
  color: var(--btn-ptext);
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {
    box-shadow: 0px 0px 3px var(--btn-pshadow);
    transform: translate(-2px, 2px);
  }
`;
