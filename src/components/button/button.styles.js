import styled, { css } from "styled-components";

const baseButtonStyles = css`
  cursor: pointer;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  background: #262626;
  outline: none;
  padding: 1rem;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);
  &:hover {
    filter: brightness(110%);
    background-color: #262626;
  }
  &:active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
  }
`;

const extendsTwitterButton = css`
  :hover {
    color: #38a1f3;
    background-color: #262626;
  }
`;

export const CustomButton = styled.button`
  ${baseButtonStyles}
  ${(props) => props.isTwitter && extendsTwitterButton}
`;
