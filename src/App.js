import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";

import Home from './home/Home';
import About from'./about/About';
import Contact from './contact/Contact';
import ProductDescription from'./products/ProductDescription';
import Cart from './cart/Cart';
import Menu from './menubar/Menu';

function App() {
  return (
    <Router>
      <Menu />
    <Routes>
      
      <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/product" element = {<ProductDescription />} />
          <Route path="/cart" element = {<Cart />} />
      </Route>
  </Routes>
  </Router>
  );
}

export default App;
