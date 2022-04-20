import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: inherit;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 30vh;
  height: 30vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 0;
  color: #d70040;
  text-align: center;
  @media screen and (max-width: 1000px) {
    font-size: 2.15rem;
  }
`;

export const ErrorImageTextSub = styled.h2`
  font-size: 1.2rem;
  line-height: 1.2rem;
  color: #000;
  text-align: center;
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;
