import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IRegisterValue } from "../components/RegisterCard";
import api from "../services";

interface ICalcProviderProps {
  children: ReactNode;
}

interface ICalcContext {
  registerValue(data: IRegisterValue): void;
  tomorrow: number;
  fifteen: number;
  thirty: number;
  ninety: number;
}

export const CalcContext = createContext({} as ICalcContext);

const CalcProvider = ({ children }: ICalcProviderProps) => {
  const [tomorrow, setTomorrow] = useState<number>(0);
  const [fifteen, setFifteen] = useState<number>(0);
  const [thirty, setThirty] = useState<number>(0);
  const [ninety, setNinety] = useState<number>(0);

  //   useEffect(() => {}, []);

  function registerValue(data: IRegisterValue): void {
    api
      .post("", data)
      .then((response) => {
        console.log(response.data);
        const tomorrow = response.data[1];
        setTomorrow(tomorrow);

        const fifteen = response.data[15];
        setFifteen(fifteen);

        const thirty = response.data[30];
        setThirty(thirty);

        const ninety = response.data[90];
        setNinety(ninety);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CalcContext.Provider
      value={{ registerValue, tomorrow, fifteen, thirty, ninety }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export function useCalcContext() {
  return useContext(CalcContext);
}

export default CalcProvider;
