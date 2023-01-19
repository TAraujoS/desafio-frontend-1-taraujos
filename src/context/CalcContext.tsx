import { createContext, ReactNode, useContext, useState } from "react";
import { IRegisterValue } from "../components/RegisterCalc";
import api from "../services";

interface ICalcProviderProps {
  children: ReactNode;
}

interface ICalcContext {
  registerValue(data: IRegisterValue): void;
  valueDay: number[];
}

export const CalcContext = createContext({} as ICalcContext);

const CalcProvider = ({ children }: ICalcProviderProps) => {
  const [valueDay, setValueDay] = useState<number[]>([]);

  function registerValue(data: IRegisterValue): void {
    api
      .post("", data)
      .then((response) => {
        setValueDay(Object.values(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CalcContext.Provider value={{ registerValue, valueDay }}>
      {children}
    </CalcContext.Provider>
  );
};

export function useCalcContext() {
  return useContext(CalcContext);
}

export default CalcProvider;
