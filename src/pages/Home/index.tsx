import { RegisterValue } from "../../components/RegisterCard";
import { ResultValues } from "../../components/ResultCard";
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
