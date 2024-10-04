import { CalculatorContextProvider } from "./components/CalculatorContext";
import DepositConfig from "./components/DepositConfig";
import DepositDetail from "./components/DepositDetail";
import DepositInfo from "./components/DepositInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <CalculatorContextProvider>
        <DepositConfig />
        <DepositDetail />
      </CalculatorContextProvider>
      <DepositInfo />
      <Footer />
    </div>
  )
}

export default App;