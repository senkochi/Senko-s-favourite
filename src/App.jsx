import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Characters from './pages/Characters';
import About from './pages/About';
import Donate from './pages/Donate';
import Footer from './components/Footer/Footer';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
        
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/characters' element={<Characters />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/donate' element={<Donate />}></Route>
            <Route path='/products/:slug' element={<ProductDetails />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        
    </div>
  )
}

export default App