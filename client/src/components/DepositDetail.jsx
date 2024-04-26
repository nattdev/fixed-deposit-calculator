import { useCalculator } from "./CalculatorContext";

function DepositDetail() {
    const { deposit } = useCalculator();
    const { interestEarned, interestPeriodEarned } = useCalculator();

    const currencySymbol = deposit["currency"] == "soles" ? "S/. " : "$ ";
    return (
        <div>
            <div>
                <p>Con un Capital de <span>{deposit["capital"]} {currencySymbol == "S/. " ? "soles" : "dólares"}</span></p>
                <p>por un Plazo de <span>{deposit["term"]} días</span></p>
                <p>con un TREA de <span>{deposit["trea"]}  %</span></p>
            </div>
            <div>
                <div>
                    <img src="#"></img>
                    <p>El interés <span>Mensual</span> ganado es:</p>
                    <p>{currencySymbol} {interestPeriodEarned}</p>
                </div>
                <div>
                    <img src="#"></img>
                    <p><span>Al finalizar, </span>el total de fondos será:</p>
                    <p>{currencySymbol} {interestEarned}</p>
                </div>
            </div>
        </div>
    )
}

export default DepositDetail;