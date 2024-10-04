function DepositInfo() {
    return (
        <div className="flex justify-center items-center flex-col text-center my-6 mx-auto xl:w-3/5 md:px-32 px-8 w-full">
            <p className="text-xl font-semibold mb-2">¿Qué es un depósito a plazo fijo?</p>
            <p className="sm:text-base text-sm">
                Es un instrumento financiero ofrecido por entidades bancarias y financieras donde un cliente deposita una cantidad de dinero por un período de tiempo específico a cambio de recibir un interés fijo predeterminado.
            </p>
            <div className="flex flex-col text-sm sm:text-base justify-center text-center py-3 w-3/4">
                <p className="flex flex-col py-1">
                    <span className="font-semibold pb-1">Capital</span>  Dinero inicial depositado o invertido.
                </p>
                <p className="flex flex-col py-1">
                    <span className="font-semibold pb-1">TREA</span>  Rendimiento anual total de una inversión, incluyendo intereses y costos.
                </p>
                <p className="flex flex-col py-1">
                    <span className="font-semibold pb-1">Plazo</span> Tiempo acordado para mantener el dinero depositado sin retirarlo.
                </p>
            </div>
        </div>
    )
}

export default DepositInfo;