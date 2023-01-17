import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--white);
  color: black;
  padding: 3rem;
  height: 100%;

  h1 {
    margin-bottom: 1.5rem;
    color: var(--gray-h1);
  }

  form {
    display: flex;
    flex-direction: column;
    height: 85%;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      gap: 7px;

      label {
        color: var(--gray-label);
        font-size: 14px;
        font-weight: 500;
      }
      .input-value {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 2px solid var(--blue-input);
        border-radius: 5px;
        gap: 0;
        position: relative;
        > input {
          width: 100%;
          border: none;

          &:hover {
            border: none;
          }

          &:focus {
            border: none;
          }
        }

        > span {
          padding: 5px;
          color: var(--gray-input);
          padding: 0 0 0 5px;
        }

        &:hover {
          border: 2px solid var(--blue-inputfocus);
        }
      }

      input {
        height: 40px;
        border: 2px solid var(--blue-input);
        border-radius: 5px;
        padding-left: 5px;

        &:hover {
          border: 2px solid var(--blue-inputfocus);
        }

        &:focus {
          border: 2px solid var(--blue-inputfocus);
        }

        /* Chrome, Safari, Edge, Opera */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        &[type="number"] {
          -moz-appearance: textfield;
        }
      }
      span {
        color: var(--gray-span);
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
`;
