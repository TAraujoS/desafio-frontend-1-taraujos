import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  padding: 4rem;

  background-color: var(--white);
  color: black;

  h1 {
    margin-bottom: 1.5rem;
    color: var(--gray-h1);
  }

  form {
    height: 85%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .error {
    font-size: 12px;
    font-weight: 500;

    color: var(--red-input);
  }

  @media screen and (max-width: 425px) {
    padding: 2rem 4rem;

    form {
      gap: 10px;

      label {
        font-size: 12px;
      }
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 14px;
    font-weight: 500;

    color: var(--gray-label);
  }
  .input-value {
    display: flex;
    flex-direction: row;
    align-items: center;

    border: 2px solid var(--blue-input);
    border-radius: 5px;
    gap: 0;

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
      padding: 0 0 0 5px;
      color: var(--gray-input);
    }

    &:hover {
      border: 2px solid var(--blue-inputfocus);
    }
  }

  input {
    height: 40px;
    padding-left: 5px;
    border: 2px solid var(--blue-input);
    border-radius: 5px;

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

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: var(--red-input);
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: var(--red-input);
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: var(--red-input);
    }
  }

  span {
    font-size: 12px;
    font-weight: 500;

    color: var(--gray-span);
  }
`;
