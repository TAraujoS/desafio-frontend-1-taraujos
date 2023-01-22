import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IRegisterValue } from "../components/RegisterCalc";
import api from "../services";

interface ICalcProviderProps {
  children: ReactNode;
}

interface ICalcContext {
  registerValue(data: IRegisterValue): void;
  valueDay: string;
}

export const CalcContext = createContext({} as ICalcContext);

const CalcProvider = ({ children }: ICalcProviderProps) => {
  const [valueDay, setValueDay] = useState<string>("");

  function registerValue(data: IRegisterValue): void {
    api
      .post("", data)
      .then((response) => {
        setValueDay(response.data);
      })
      .catch((err) => {
        if (err.code === "ERR_BAD_REQUEST") {
          toast.error("Erro 408: Timeout");
        }
        if (err.code === "ERR_BAD_RESPONSE") {
          toast.error("Erro 500 : Internal Server Error ");
        }
        if (err.code === "ECONNABORTED") {
          toast.warning("Delay Error - Slow connection");
        }
        console.warn(err);
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
