import { RegisterValue } from "../RegisterCard";
import { ResultValues } from "../ResultCard";
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
