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
  days?: string | number[];
}

export const RegisterValue = () => {
  const { registerValue } = useContext(CalcContext);

  const schema = yup.object().shape({
    amount: yup
      .string()
      .test("min", "*Valor mínimo 1000", (val) => Number(val) >= 1000)
      .test(
        "max",
        "*Valor máximo 100000000",
        (val) => Number(val) <= 100000000
      ),
    installments: yup
      .string()
      .test("max", "*Valor máximo 12", (val) => Number(val) <= 12),
    mdr: yup
      .string()
      .test("max", "*Valor máximo 100", (val) => Number(val) <= 100),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegisterValue>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IRegisterValue) => {
    if (data.days === "") {
      delete data.days;
    } else if (data.days) {
      data.days = (data.days as string)
        .concat(", 1, 15, 30, 90")
        .split(",")
        .map((day: string) => Number(day));
    }
    if (data.amount && data.installments && data.mdr) {
      registerValue(data);
    }
  };

  return (
    <Container>
      <h1>Simule sua Antecipação</h1>
      <form onChange={handleSubmit(onSubmit)}>
        <DivInput>
          <label>Informe o valor da venda*</label>
          <div className="input-value">
            <span>R$</span>
            <input
              type="number"
              id="amout"
              min={1000}
              placeholder={errors.amount?.message}
              {...register("amount")}
            />
          </div>
          <span className="error">{errors.amount?.message}</span>
        </DivInput>

        <DivInput>
          <label>Em quantas parcelas*</label>
          <input
            type="number"
            id="installments"
            min={1}
            max={12}
            placeholder={errors.installments?.message}
            {...register("installments")}
          />
          <span className="error">{errors.installments?.message}</span>
          <span>Máximo de 12 parcelas</span>
        </DivInput>

        <DivInput>
          <label>Informe o percentual de MDR*</label>
          <input
            type="number"
            id="mdr"
            min={0}
            max={100}
            placeholder={errors.mdr?.message}
            {...register("mdr")}
          />
          <span className="error">{errors.mdr?.message}</span>
        </DivInput>

        <DivInput>
          <label>Outro periodo em dias (opcional)*</label>
          <input type="number" id="days" {...register("days")} />
        </DivInput>
      </form>
    </Container>
  );
};
