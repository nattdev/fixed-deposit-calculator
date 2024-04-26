import { CalculatorContextProvider } from "./components/CalculatorContext";
import DepositConfig from "./components/DepositConfig";
import DepositDetail from "./components/DepositDetail";

function App() {
  return (
    <div>
      <header>
        <h1>Calculadora Depósito a Plazo Fijo</h1>
      </header>
      <CalculatorContextProvider>
        <DepositConfig />
        <DepositDetail />
      </CalculatorContextProvider>
    </div>
  )
}

export default App;