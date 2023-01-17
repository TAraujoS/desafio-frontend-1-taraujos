import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  height: 75%;
  margin: 3rem;

  h2 {
    font-size: 16px;
    font-style: oblique;

    padding-right: 3rem;

    border-bottom: 2px solid var(--lightblue-border);
    color: var(--blue-h2);
  }

  p {
    font-size: 16px;
    font-weight: 500;
    font-style: oblique;

    color: var(--blue-p);
    span {
      font-weight: 700;
      font-size: 16px;

      color: var(--blue-span);
    }
  }
`;

export default Container;
