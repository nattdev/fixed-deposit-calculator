function DepositConfig() {

    return (
        <div>
            <section>
                <div>
                    <input id="soles" type="radio" name="currency" value="soles">
                    </input>
                    <label htmlFor="soles">Soles
                    </label>
                </div>
                <p>Moneda</p>
                <div>
                    <input id="dolares" type="radio" name="currency" value="dolares">
                    </input>
                    <label htmlFor="dolares">Dólares
                    </label>
                </div>
            </section>
            <section>
                <div>
                    <img src="#"></img>
                    <p>Capital</p>
                    <input type="number" step={0.01}></input>
                </div>
                <div>
                    <img src="#"></img>
                    <p>TREA</p>
                    <input type="number" step={0.01}></input>
                </div>
                <div>
                    <img src="#"></img>
                    <p>Plazo</p>
                    <select id="days" name="days">
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
                        <input id="mensual" type="radio" name="interest-period" value="mensual">
                        </input>
                        <label htmlFor="mensual">Mensual
                        </label>
                    </li>
                    <li>
                        <input id="anual" type="radio" name="interest-period" value="anual">
                        </input>
                        <label htmlFor="anual">Anual
                        </label>
                    </li>
                    <li>
                        <input id="alfinalizar" type="radio" name="interest-period" value="alfinalizar">
                        </input>
                        <label htmlFor="alfinalizar">Al finalizar
                        </label>
                    </li>
                </ul>
            </section>
            <button>Calcular</button>
            <section>
                <p>Interés Ganado</p>
                <p>S/. 1000.4</p>
            </section>
        </div>
    )
}

export default DepositConfig;