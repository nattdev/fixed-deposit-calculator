import { useCalculator } from "./CalculatorContext";
import EndInterestIcon from "../assets/icons/endInterestIcon.jsx";
import MonthlyInterestIcon from "../assets/icons/monthlyInterestIcon.jsx";
import TotalInterestIcon from "../assets/icons/totalInterestIcon.jsx";

function DepositDetail() {
    const { deposit } = useCalculator();
    const { interestEarned, interestPeriodEarned } = useCalculator();
    const { isCalculated } = useCalculator();

    const currencySymbol = deposit["currency"] == "soles" ? "S/. " : "$ ";
    const totalAmount = parseFloat(deposit["capital"]) + parseFloat(interestEarned);

    return (
        <section className="flex flex-col sm:text-lg text-base justify-center items-center my-6 font-normal w-fit m-auto relative px-6">
            <header className="font-medium mb-3 text-xl">
                <p>Detalle de plazo fijo</p>
            </header>
            <div className={` ${isCalculated ? "text-black" : "text-gray-300"} relative rounded-xl flex overflow-hidden transition-colors duration-700`}>
                <div className="flex flex-col items-center text-center border-2 rounded-xl pt-3 pb-6 mx-0.5 my-0.5 px-8 relative z-30 bg-white w-full">
                    <div className="mb-6">
                        <p>Con un Capital de <span className="font-bold">{deposit["capital"]} {currencySymbol == "S/. " ? "soles" : "dólares"}</span></p>
                        <p>por un Plazo de <span className="font-bold">{deposit["term"]} días</span></p>
                        <p>con un TREA de <span className="font-bold">{deposit["trea"]}  %</span></p>
                    </div>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <div className="flex flex-col w-2/5 items-center text-center sm:max-w-none max-w-32">
                            <MonthlyInterestIcon styles={`w-[56px] h-[56px] m-1 ${isCalculated ? "fill-black" : "fill-gray-300"} transition-colors duration-700`} />
                            <p>El interés <span>Mensual</span> ganado es:</p>
                            <p className="font-bold">{currencySymbol} {interestPeriodEarned}</p>
                        </div>
                        <div className="flex flex-col w-2/5  items-center text-center sm:max-w-none max-w-32">
                            <EndInterestIcon styles={`w-[56px] h-[56px] m-1 ${isCalculated ? "fill-black" : "fill-gray-300"} transition-colors duration-700`} />
                            <p>El interés <span>Total</span> ganado es:</p>
                            <p className="font-bold">{currencySymbol} {interestEarned}</p>
                        </div>
                        <div className="flex flex-col w-2/5  items-center text-center sm:max-w-none max-w-32">
                            <TotalInterestIcon styles={`w-[56px] h-[56px] m-1 ${isCalculated ? "fill-black" : "fill-gray-300"} transition-colors duration-700`} />
                            <p><span>Al finalizar</span> el plazo, tendrás:</p>
                            <p className="font-bold">{currencySymbol} {totalAmount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DepositDetail;