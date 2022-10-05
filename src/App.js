import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Purchase from './components/Purchase'
import PaymentEntry from './components/PaymentEntry'
import ShippingEntry from './components/ShippingEntry'
import ViewOrder from './components/ViewOrder'
import Confirmation from './components/Confirmation'
import Navbar from './components/Navbar';
import SampleFooter from "./components/footer";
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <div className="content">
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/cart' element={<Cart/>} />

          <Route path = '/purchase' element={<Purchase/>} />
          <Route path = '/' element={<Navigate replace to = "/purchase" />} />
          <Route path = '/purchase/paymentEntry' element={<PaymentEntry/>} />
          <Route path = '/purchase/shippingEntry' element={<ShippingEntry/>} />
          <Route path = '/purchase/viewOrder' element={<ViewOrder/>} />
          <Route path = '/purchase/confirmation' element={<Confirmation/>} />
        </Routes>
      </div>
      <SampleFooter />
    </Router>
    </div>
  );
}

export default App;
