import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import Privacy from './pages/privacy/Privacy';
import Refund from './pages/refund/Refund';
import Tos from './pages/tos/Tos';
import Pricing from './pages/pricing/Pricing';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import NotFound from './pages/notFound/NotFound';
import ScrollToTop from './helpers/ScrollTop';

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='refund' element={<Refund />} />
          <Route path='tos' element={<Tos />} />
          <Route path='pricing' element={<Pricing />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
