import { useCalcContext } from "../../context/CalcContext";
import Container from "./styles";

export const ResultValues = () => {
  const { tomorrow, fifteen, thirty, ninety } = useCalcContext();
  return (
    <Container>
      <h2>VOCÊ RECEBERÁ:</h2>
      <p>
        Amanhã: <span>R$ {tomorrow},00</span>
      </p>
      <p>
        Em 15 dias: <span>R$ {fifteen},00</span>
      </p>
      <p>
        Em 30 dias: <span>R$ {thirty},00</span>
      </p>
      <p>
        Em 90 dias: <span>R$ {ninety},00</span>
      </p>
    </Container>
  );
};
