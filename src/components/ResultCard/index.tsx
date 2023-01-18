import { useCalcContext } from "../../context/CalcContext";
import Container from "./styles";

export const ResultValues = () => {
  const { valueDay } = useCalcContext();

  return (
    <Container>
      <h2>VOCÊ RECEBERÁ:</h2>
      <p>
        Amanhã: <span>R$ {valueDay.length !== 0 ? valueDay[1] : 0},00</span>
      </p>
      <p>
        Em 15 dias:{" "}
        <span>R$ {valueDay.length !== 0 ? valueDay[15] : 0},00</span>
      </p>
      <p>
        Em 30 dias:{" "}
        <span>R$ {valueDay.length !== 0 ? valueDay[30] : 0},00</span>
      </p>
      <p>
        Em 90 dias:{" "}
        <span>R$ {valueDay.length !== 0 ? valueDay[90] : 0},00</span>
      </p>
    </Container>
  );
};
