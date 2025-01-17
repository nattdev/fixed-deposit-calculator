import { createContext, useContext, useState } from "react";

export const CalculatorContext = createContext([]);

export const useCalculator = () => {
    const context = useContext(CalculatorContext);
    if (!context) {
        throw new Error("useCalculator must be used within a CalculatorContextProvider")
    } else {
        return context;
    }
}

export const CalculatorContextProvider = ({ children }) => {

    const initialDepositValues = {
        currency: "soles",
        capital: 0,
        trea: 0,
        term: 90,
        period: "al-finalizar",
    }

    const [deposit, setDeposit] = useState(initialDepositValues);
    const [interestEarned, setInterestEarned] = useState(0);
    const [interestPeriodEarned, setInterestPeriodEarned] = useState(0);
    const [isCalculated, setIsCalculated] = useState(false);

    return (
        <CalculatorContext.Provider value={{ deposit, setDeposit, interestEarned, setInterestEarned, interestPeriodEarned, setInterestPeriodEarned, isCalculated, setIsCalculated}}>
            {children}
        </CalculatorContext.Provider>
    )
}