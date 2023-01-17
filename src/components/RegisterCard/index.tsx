import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CalcContext } from "../../context/CalcContext";
import { Container, DivInput } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IRegisterValue {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}

export const RegisterValue = () => {
  const { registerValue } = useContext(CalcContext);

  const schema = yup.object().shape({
    amount: yup.string().required("Campo obrigatório"),
    installments: yup.string().required("Campo obrigatório"),
    mdr: yup.string().required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegisterValue>({ resolver: yupResolver(schema) });

  return (
    <Container>
      <h1>Simule sua Antecipação</h1>
      <form onSubmit={handleSubmit(registerValue)}>
        <DivInput>
          <label>Informe o valor da venda*</label>
          <div className="input-value">
            <span>R$</span>
            <input
              type="number"
              placeholder={errors.amount?.message}
              {...register("amount")}
            />
          </div>
        </DivInput>

        <DivInput>
          <label>Em quantas parcelas*</label>
          <input
            type="number"
            placeholder={errors.installments?.message}
            {...register("installments")}
          />
          <span>Máximo de 12 parcelas</span>
        </DivInput>

        <DivInput>
          <label>Informe o percentual de MDR*</label>
          <input
            type="number"
            placeholder={errors.mdr?.message}
            {...register("mdr")}
          />
        </DivInput>
        {/* <button type="submit">Enviar</button> */}
      </form>
    </Container>
  );
};
