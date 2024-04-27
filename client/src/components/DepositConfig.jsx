import { useCalculator } from "./CalculatorContext";
import currencyIcon from "../assets/icons/currencyIcon.svg"
import termIcon from "../assets/icons/termIcon.svg"
import treaIcon from "../assets/icons/treaIcon.svg"

function DepositConfig() {

    const { deposit, setDeposit } = useCalculator();
    const { interestEarned, setInterestEarned } = useCalculator();
    const { interestPeriodEarned, setInterestPeriodEarned } = useCalculator();

    function handleCurrencyOption(event) {
        const newCurrency = event.target.value;
        setDeposit(prevState => ({
            ...prevState,
            currency: newCurrency
        }));
    }

    function handlePeriodOption(event) {
        const newPeriod = event.target.value;
        setDeposit(prevState => ({
            ...prevState,
            period: newPeriod
        }));
    }

    function handleTermOption(event) {
        const newTerm = event.target.value;
        setDeposit(prevState => ({
            ...prevState,
            term: newTerm
        }));
    }

    function handleCapitalInput(event) {
        const newCapital = event.target.value;
        setDeposit(prevState => ({
            ...prevState,
            capital: newCapital
        }));
    }

    function handleTreaInput(event) {
        const newTrea = event.target.value;
        setDeposit(prevState => ({
            ...prevState,
            trea: newTrea
        }));
    }

    function handleCalculate() {
        const i = parseFloat(deposit["trea"]);
        const n = parseFloat(deposit["term"]);
        const k = parseFloat(deposit["capital"]);

        const interestCalculation = (((1 + (i * 1 / 100)) ** (n / 360) - 1) * k);

        const interestPeriodEarnedCalculation = interestCalculation / (n / 30);

        const interestTotal = interestCalculation;
        setInterestPeriodEarned(interestPeriodEarnedCalculation.toFixed(2));
        setInterestEarned(interestTotal.toFixed(2));
    }

    return (
        <div className="flex flex-col items-center text-center text-lg">
            <section className="flex gap-6 m-6 justify-center items-center">
                <div>
                    <input id="soles" type="radio" name="currency" value="soles" onChange={handleCurrencyOption} defaultChecked={true} className="hidden peer">
                    </input>
                    <label htmlFor="soles" className="rounded-3xl py-1 px-9 inline-block w-22 border-2 border-slate-600 peer-checked:bg-[#3166CF22] peer-checked:border-[#17246C55] cursor-pointer text-[#1C4494] font-medium">Soles
                    </label>
                </div>
                <p className="font-medium">Moneda</p>
                <div>
                    <input id="dolares" type="radio" name="currency" value="dolares" onChange={handleCurrencyOption} className="hidden peer">
                    </input>
                    <label htmlFor="dolares" className="p-2 rounded-3xl py-1 px-9 inline-block w-22 border-2 border-slate-600 peer-checked:bg-[#3166CF22] peer-checked:border-[#17246C77] cursor-pointer text-[#1C4494] font-medium">Dólares
                    </label>
                </div>
            </section>
            <section className="flex m-3">
                <div className="flex items-center flex-col gap-2 w-2/6">
                    <img src={currencyIcon} className="min-h-[56px] min-w-[56px]"></img>
                    <p>Capital</p>
                    <div className="flex items-center justify-center relative">
                        <span className="absolute left-0 pl-3">{deposit["currency"] == "soles" ? "S/. " : "$ "}</span>
                        <input type="number" step={0.01} onChange={handleCapitalInput} defaultValue={0} className="w-full border-2 rounded-2xl pl-9"></input>
                    </div>
                </div>
                <div className="flex items-center flex-col gap-2 w-2/6">
                    <img src={treaIcon} className="min-h-[56px] min-w-[56px]"></img>
                    <p>TREA</p>
                    <div className="flex items-center justify-center mx-3 relative">
                        <span className="absolute left-0 pl-3">% </span>
                        <input type="number" step={0.01} onChange={handleTreaInput} defaultValue={0.00} className="w-full border-2 rounded-2xl pl-9"></input>
                    </div>
                </div>
                <div className="flex items-center flex-col gap-2 w-2/6">
                    <img src={termIcon} className="min-h-[56px] min-w-[56px]"></img>
                    <p>Plazo</p>
                    <select id="days" name="days" onChange={handleTermOption} defaultValue={"90"} className="h-8 w-full border-2 rounded-2xl pl-3">
                        <option value="90">90 días</option>
                        <option value="180">180 días</option>
                        <option value="360">360 días</option>
                    </select>
                </div>
            </section>
            <section className="m-3">
                <p className="font-medium">Pago de Interés</p>
                <ul className="flex gap-3 m-3">
                    <li>
                        <input id="mensual" type="radio" name="interest-period" value="mensual" onChange={handlePeriodOption} className="hidden peer">
                        </input>
                        <label htmlFor="mensual" className="p-2 rounded-3xl py-0 px-9 inline-block border-2 border-slate-600 peer-checked:bg-[#3166CF22] peer-checked:border-[#17246C77] cursor-pointer peer-checked:text-[#1C4494] font-medium text-black">Mensual
                        </label>
                    </li>
                    {/* <li>
                        <input id="anual" type="radio" name="interest-period" value="anual" onChange={handlePeriodOption}>
                        </input>
                        <label htmlFor="anual">Anual
                        </label>
                    </li> */}
                    <li>
                        <input id="al-finalizar" type="radio" name="interest-period" value="al-finalizar" onChange={handlePeriodOption} defaultChecked={true} className="hidden peer">
                        </input>
                        <label htmlFor="al-finalizar" className="p-2 rounded-3xl py-0 px-9 inline-block border-2 border-slate-600 peer-checked:bg-[#3166CF22] peer-checked:border-[#17246C77] cursor-pointer peer-checked:text-[#1C4494] text-black font-medium">Al finalizar
                        </label>
                    </li>
                </ul>
            </section>
            <button className="bg-[#1C4494] px-4 py-3 w-1/5 min-w-48 text-white rounded-full xl font-normal text-xl m-3" onClick={handleCalculate}>Calcular</button>
            <section>
                <p>Interés Ganado</p>
                <p>{deposit["currency"] == "soles" ? "S/. " : "$ "}{deposit["period"] == "mensual" ? interestPeriodEarned : interestEarned}</p>
            </section>
        </div>
    )
}

export default DepositConfig;