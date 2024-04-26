import { CalculatorContextProvider } from "./components/CalculatorContext";
import DepositConfig from "./components/DepositConfig";
import DepositDetail from "./components/DepositDetail";

function App() {
  return (
    <div>
      <CalculatorContextProvider>
        <DepositConfig />
        <DepositDetail />
      </CalculatorContextProvider>
    </div>
  )
}

export default App;