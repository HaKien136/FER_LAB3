import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import ProdcutDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProdcutDetail />} />
    </BrowserRouter>
  );
}

export default App;
