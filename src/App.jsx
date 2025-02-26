import 'normalize.css';
import './App.css'
import CalculatorCompoundInterest from './app/calcCompoundInterest/page.jsx';
import DollarCotization from './app/dollarCotization/DollarCotization.jsx';

const App = () =>  {
  
  return (
    <div>
      <CalculatorCompoundInterest/>
      {/*<StockData symbol="APPL"/>*/}
      <DollarCotization/>
    </div>
  )
}

export default App
