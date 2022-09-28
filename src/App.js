import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Purchase from './components/Purchase'
import PaymentEntry from './components/PaymentEntry'
import ShippingEntry from './components/ShippingEntry'
import ViewOrder from './components/ViewOrder'
import Confirmation from './components/Confirmation'

function App() {
  return (
    <div className="App">
    <Router>
      <div className="content">
        <Routes>
          <Route path = '/purchase' element={<Purchase/>} />
          <Route path = '/' element={<Navigate replace to = "/purchase" />} />
          <Route path = '/purchase/paymentEntry' element={<PaymentEntry/>} />
          <Route path = '/purchase/shippingEntry' element={<ShippingEntry/>} />
          <Route path = '/purchase/viewOrder' element={<ViewOrder/>} />
          <Route path = '/purchase/confirmation' element={<Confirmation/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
