
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import ChesseCalculator from './componets/cheeseCalculator/calculatorCheese';

function App() {
  return (
    
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/calculator' element={<ChesseCalculator/>}/>
          </Routes>
        </BrowserRouter>       
      </div>   
  );
}
export default App
