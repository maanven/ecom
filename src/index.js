import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './menubar/Menu';
import Footer from './footer/Footer';
//  import Home from './home/Home';
// import About from'./about/About';
// import Contact from './contact/Contact';
//  import ProductDescription from'./products/ProductDescription';
// import Cart from './cart/Cart';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    {/* <Home />   */}
    {/* <About /> */}
     {/* <Contact />  */}
    {/* <ProductDescription/>  */}
    {/* <Cart /> */}
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
