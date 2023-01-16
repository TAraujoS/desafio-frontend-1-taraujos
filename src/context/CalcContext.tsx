import { createContext, ReactNode } from "react"
import { IRegisterValue } from "../components/RegisterCard";

interface ICalcProviderProps{
    children: ReactNode
}

interface ICalcContext {
    registerValue(data: IRegisterValue): void
}

export const CalcContext = createContext({} as ICalcContext);

const CalcProvider = ({children}: ICalcProviderProps) => {

    function registerValue(data: IRegisterValue): void {
        console.log(data)
    }
    return (
        <CalcContext.Provider value={{registerValue}}>
            {children}
        </CalcContext.Provider>
    )
}

export default CalcProvider
