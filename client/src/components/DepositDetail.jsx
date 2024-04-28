import { useCalculator } from "./CalculatorContext";
import monthlyInterestIcon from "../assets/icons/monthlyInterestIcon.svg";
import endInterestIcon from "../assets/icons/endInterestIcon.svg";

function DepositDetail() {
    const { deposit } = useCalculator();
    const { interestEarned, interestPeriodEarned } = useCalculator();

    const currencySymbol = deposit["currency"] == "soles" ? "S/. " : "$ ";
    return (
        <section className="flex flex-col sm:text-lg text-base justify-center items-center my-6 font-normal w-fit m-auto">
            <header className="font-medium mb-3 text-xl">
                <p>Detalle de plazo fijo</p>
            </header>
            <div className="flex flex-col items-center text-center border-2 rounded-xl pt-3 pb-6 mx-6">
                <div className="mb-6">
                    <p>Con un Capital de <span className="font-bold">{deposit["capital"]} {currencySymbol == "S/. " ? "soles" : "dólares"}</span></p>
                    <p>por un Plazo de <span className="font-bold">{deposit["term"]} días</span></p>
                    <p>con un TREA de <span className="font-bold">{deposit["trea"]}  %</span></p>
                </div>
                <div className="flex justify-center gap-6">
                    <div className="flex flex-col w-2/5  items-center text-center">
                        <img className="w-[56px] h-[56px] m-1" src={monthlyInterestIcon}></img>
                        <p>El interés <span className="underline underline-offset-2">Mensual</span> ganado es:</p>
                        <p className="font-bold">{currencySymbol} {interestPeriodEarned}</p>
                    </div>
                    <div className="flex flex-col w-2/5  items-center text-center">
                        <img className="w-[56px] h-[56px] m-1" src={endInterestIcon}></img>
                        <p><span className="underline underline-offset-2">Al finalizar</span>, el interés total será:</p>
                        <p className="font-bold">{currencySymbol} {interestEarned}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DepositDetail;