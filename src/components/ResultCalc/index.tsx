import { useCalcContext } from "../../context/CalcContext";
import Container from "./styles";

export const ResultValues = () => {
  const { valueDay } = useCalcContext();

  return (
    <Container>
      <h2>VOCÊ RECEBERÁ:</h2>
      <p>
        Amanhã: <span>R$ {valueDay === "" ? 0 : valueDay[1]},00</span>
      </p>
      <p>
        Em 15 dias: <span>R$ {valueDay === "" ? 0 : valueDay[15]},00</span>
      </p>
      <p>
        Em 30 dias: <span>R$ {valueDay === "" ? 0 : valueDay[30]},00</span>
      </p>
      <p>
        Em 90 dias: <span>R$ {valueDay === "" ? 0 : valueDay[90]},00</span>
      </p>
      {Object.keys(valueDay).map((day: any) =>
        day !== "1" && day !== "15" && day !== "30" && day !== "90" ? (
          <p key={day}>
            Em {day} dias: <span>R$ {valueDay[day]},00</span>
          </p>
        ) : (
          <p key={day} className="empty"></p>
        )
      )}
    </Container>
  );
};
