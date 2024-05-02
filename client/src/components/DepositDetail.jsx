import { useCalculator } from "./CalculatorContext";
import monthlyInterestIcon from "../assets/icons/monthlyInterestIcon.svg";
import endInterestIcon from "../assets/icons/endInterestIcon.svg";

function DepositDetail() {
    const { deposit } = useCalculator();
    const { interestEarned, interestPeriodEarned } = useCalculator();
    const { isCalculated } = useCalculator();

    const currencySymbol = deposit["currency"] == "soles" ? "S/. " : "$ ";
    return (
        <section className="flex flex-col sm:text-lg text-base justify-center items-center my-6 font-normal w-fit m-auto relative px-6">
            <header className="font-medium mb-3 text-xl">
                <p>Detalle de plazo fijo</p>
            </header>
            <div className="relative rounded-xl flex overflow-hidden">
                <div className="flex flex-col items-center text-center border-2 rounded-xl pt-3 pb-6 mx-0.5 my-0.5 px-8 relative z-30 bg-white w-full">
                    <div className="mb-6">
                        <p>Con un Capital de <span className="font-bold">{deposit["capital"]} {currencySymbol == "S/. " ? "soles" : "dólares"}</span></p>
                        <p>por un Plazo de <span className="font-bold">{deposit["term"]} días</span></p>
                        <p>con un TREA de <span className="font-bold">{deposit["trea"]}  %</span></p>
                    </div>
                    <div className="flex justify-center gap-6">
                        <div className="flex flex-col w-2/5 items-center text-center sm:max-w-none max-w-32">
                            <img className="w-[56px] h-[56px] m-1" src={monthlyInterestIcon}></img>
                            <p>El interés <span className="underline underline-offset-2">Mensual</span> ganado es:</p>
                            <p className="font-bold">{currencySymbol} {interestPeriodEarned}</p>
                        </div>
                        <div className="flex flex-col w-2/5  items-center text-center sm:max-w-none max-w-32">
                            <img className="w-[56px] h-[56px] m-1" src={endInterestIcon}></img>
                            <p><span className="underline underline-offset-2">Al finalizar</span>, el interés total.
                                será:</p>
                            <p className="font-bold">{currencySymbol} {interestEarned}</p>
                        </div>
                    </div>
                </div>
                <span className={`w-[183%] h-[15%] bg-[#1C4494] absolute left-[-50%] top-[50%] rotate-[25deg] z-10 ${isCalculated ? "animate-border-animation" : "invisible"}`}></span>
            </div>
        </section>
    )
}

export default DepositDetail;