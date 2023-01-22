import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 50vh;
  width: 100%;
  min-height: 515px;

  border: 2px solid var(--lightblue-border);

  @media screen and (max-width: 425px) {
    height: 100vh;
    flex-direction: column;
    border: none;
  }
`;
