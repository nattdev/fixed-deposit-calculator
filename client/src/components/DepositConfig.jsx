import { useCalculator } from "./CalculatorContext";

function DepositConfig() {

    const { deposit, setDeposit } = useCalculator();
    const { interestEarned, setInterestEarned } = useCalculator();

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

        const interestPeriodEarnead = deposit["period"] == "mensual" ? interestCalculation / (n / 30) : interestCalculation;

        setInterestEarned(interestPeriodEarnead.toFixed(2));
    }

    return (
        <div>
            <section>
                <div>
                    <input id="soles" type="radio" name="currency" value="soles" onChange={handleCurrencyOption} defaultChecked={true}>
                    </input>
                    <label htmlFor="soles">Soles
                    </label>
                </div>
                <p>Moneda</p>
                <div>
                    <input id="dolares" type="radio" name="currency" value="dolares" onChange={handleCurrencyOption}>
                    </input>
                    <label htmlFor="dolares">Dólares
                    </label>
                </div>
            </section>
            <section>
                <div>
                    <img src="#"></img>
                    <p>Capital</p>
                    <div>
                        <span>{deposit["currency"] == "soles" ? "S/. " : "$ "}</span>
                        <input type="number" step={0.01} onChange={handleCapitalInput} defaultValue={0}></input>
                    </div>
                </div>
                <div>
                    <img src="#"></img>
                    <p>TREA</p>
                    <div>
                        <span>% </span>
                        <input type="number" step={0.01} onChange={handleTreaInput} defaultValue={0.00}></input>
                    </div>
                </div>
                <div>
                    <img src="#"></img>
                    <p>Plazo</p>
                    <select id="days" name="days" onChange={handleTermOption} defaultValue={"90"}>
                        <option value="90">90 días</option>
                        <option value="180">180 días</option>
                        <option value="360">360 días</option>
                    </select>
                </div>
            </section>
            <section>
                <p>Pago de Interés</p>
                <ul>
                    <li>
                        <input id="mensual" type="radio" name="interest-period" value="mensual" onChange={handlePeriodOption} >
                        </input>
                        <label htmlFor="mensual">Mensual
                        </label>
                    </li>
                    {/* <li>
                        <input id="anual" type="radio" name="interest-period" value="anual" onChange={handlePeriodOption}>
                        </input>
                        <label htmlFor="anual">Anual
                        </label>
                    </li> */}
                    <li>
                        <input id="al-finalizar" type="radio" name="interest-period" value="al-finalizar" onChange={handlePeriodOption} defaultChecked={true}>
                        </input>
                        <label htmlFor="al-finalizar">Al finalizar
                        </label>
                    </li>
                </ul>
            </section>
            <button onClick={handleCalculate}>Calcular</button>
            <section>
                <p>Interés Ganado</p>
                <p>{deposit["currency"] == "soles" ? "S/. " : "$ "}{interestEarned}</p>
            </section>
        </div>
    )
}

export default DepositConfig;