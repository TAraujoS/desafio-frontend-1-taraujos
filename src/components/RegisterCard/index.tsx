import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CalcContext } from "../../context/CalcContext";
import { Container } from "./styles";

export interface IRegisterValue {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}

export const RegisterValue = () => {
  const { registerValue } = useContext(CalcContext);
  const { handleSubmit, register } = useForm<IRegisterValue>();

  const onSubmit: SubmitHandler<IRegisterValue> = (data) => {
    registerValue(data);
  };

  return (
    <Container>
      <h1>Simule sua Antecipação</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Informe o valor da venda*</label>
          <div className="input-value">
            <span>R$</span>
            <input type="number" {...register("amount")} />
          </div>
        </div>
        <div>
          <label>Em quantas parcelas*</label>

          <input type="number" {...register("installments")} />
          <span>Máximo de 12 parcelas</span>
        </div>
        <div>
          <label>Informe o percentual de MDR*</label>
          <input type="number" {...register("mdr")} />
        </div>
      </form>
    </Container>
  );
};
