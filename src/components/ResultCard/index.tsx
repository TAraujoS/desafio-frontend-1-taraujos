import { useCalcContext } from "../../context/CalcContext";
import "./styles.css";

export const ResultValues = () => {
  const { valueDay } = useCalcContext();
  console.log(valueDay);
  return (
    <section className="resultContainer">
      <h2>VOCÊ RECEBERÁ:</h2>
      <p>
        Amanhã: <span>R$ {valueDay.length === 0 ? 0 : valueDay[0]},00</span>
      </p>
      <p>
        Em 15 dias: <span>R$ {valueDay.length === 0 ? 0 : valueDay[1]},00</span>
      </p>
      <p>
        Em 30 dias: <span>R$ {valueDay.length === 0 ? 0 : valueDay[2]},00</span>
      </p>
      <p>
        Em 90 dias: <span>R$ {valueDay.length === 0 ? 0 : valueDay[3]},00</span>
      </p>
    </section>
  );
};
