import { CalculatorContextProvider } from "./components/CalculatorContext";
import DepositConfig from "./components/DepositConfig";
import DepositDetail from "./components/DepositDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header className="sm:text-xl text-lg bg-sky-950 text-white text-center p-3 font-medium">
        <h1>Calculadora Depósito a Plazo Fijo</h1>
      </header>
      <CalculatorContextProvider>
        <DepositConfig />
        <DepositDetail />
      </CalculatorContextProvider>
      <Footer />
    </div>
  )
}

export default App;