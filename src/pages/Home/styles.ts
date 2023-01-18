import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 70vh;
  width: 100%;
  min-height: 450px;

  border: 2px solid var(--lightblue-border);

  @media screen and (max-width: 1024px) {
    height: 45vh;
  }

  @media screen and (min-width: 1440px) {
    height: 45vh;
  }
`;
