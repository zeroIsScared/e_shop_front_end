
import './App.css';
import Product from './shop/ui/components/product/ui.js';
import { getProducts } from './shop/ui/components/product/api.js';

function App() {
  const products = getProducts();

  return (
    <div className="App">
      {products.map(item => {
        return <Product key={item.id} productObject={item}/>
      })}
      
      
    </div>
  );
}

export default App;
