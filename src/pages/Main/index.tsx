import { RegisterValue } from "../../components/RegisterCalc";
import { ResultValues } from "../../components/ResultCalc";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <RegisterValue />
      <ResultValues />
    </Container>
  );
};

export default Home;
