import { CalculatorContextProvider } from "./components/CalculatorContext";
import DepositConfig from "./components/DepositConfig";

function App() {
  return (
    <div>
      <CalculatorContextProvider>
        <DepositConfig />
      </CalculatorContextProvider>
    </div>
  )
}

export default App;