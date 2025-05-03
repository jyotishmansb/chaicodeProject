import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Privacy from './pages/privacy/Privacy';
import Refund from './pages/refund/Refund';
import Tos from './pages/tos/Tos';
import Pricing from './pages/pricing/Pricing';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (

    <BrowserRouter>
     
     <Navbar />
      <Routes>
      
        <Route index element={<Home />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='refund' element={<Refund />} />
        <Route path='tos' element={<Tos />} />
        <Route path='pricing' element={<Pricing />} />


      </Routes>
      <Footer />




    </BrowserRouter>


  )
}

export default App
