import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import Shop from './Components/shop/Shop';
import Summary from './Components/Summary/Summary';
import Cart from './Components/cart/Cart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Summary></Summary>
    </div>
  );
}

export default App;
