import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CalcContext } from "../../context/CalcContext";

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
    <div>
      <h1>Simule sua Antecipação</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Informe o valor da venda*</p>
          <input type="number" {...register("amount")} />
        </div>
        <div>
          <p>Em quantas parcelas*</p>
          <input type="number" {...register("installments")} />
          <span>Máximo de 12 parcelas</span>
        </div>
        <div>
          <p>Informe o percentual de MDR*</p>
          <input type="number" {...register("mdr")} />
        </div>
      </form>
    </div>
  );
};
