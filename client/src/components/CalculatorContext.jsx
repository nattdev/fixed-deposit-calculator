import { createContext, useContext } from "react";

export const CalculatorContext = createContext([]);

export const useCalculator = () => {
    const context = useContext(CalculatorContext);
    if (!context) {
        throw new Error("useCalculator must be used within a CalculatorContextProvider")
    } else {
        return context;
    }
}

export const CalculatorContextProvider = ({children}) => {

    return(
        <CalculatorContext.Provider value={{}}>
            {children}
        </CalculatorContext.Provider>
    )
}