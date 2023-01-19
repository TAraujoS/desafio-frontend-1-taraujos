import { RegisterValue } from "../../components/RegisterCalc";
import { ResultValues } from "../../components/ResultCalc";
import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <RegisterValue />
      <ResultValues />
    </Container>
  );
};

export default Main;
