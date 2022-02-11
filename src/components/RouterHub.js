import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Catalogue from '../pages/Catalogue';
import About from '../pages/About';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';
import Cart from './Cart';

const RouterHub = (props) => {
  return (
    <BrowserRouter>
    <Cart cartDisplay={props.cartDisplay}/>
    <Header cart={props.cart} toggleCart={props.toggleCart}/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />}>
            <Route path='' element={<Catalogue addToCart={props.addToCart} removeFromCart={props.removeFromCart}/>} />
            <Route path=':product' element={<Product />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default RouterHub;

function Products() {
    return(
        <Outlet />
    );
}