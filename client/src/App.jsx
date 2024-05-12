import { CalculatorContextProvider } from "./components/CalculatorContext";
import DepositConfig from "./components/DepositConfig";
import DepositDetail from "./components/DepositDetail";
import DepositInfo from "./components/DepositInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <header className="sm:text-xl text-lg bg-sky-950 text-white text-center p-3 font-medium">
        <h1>Calculadora Depósito a Plazo Fijo</h1>
      </header>
      <DepositInfo />
      <CalculatorContextProvider>
        <DepositConfig />
        <DepositDetail />
      </CalculatorContextProvider>
      <Footer />
    </div>
  )
}

export default App;