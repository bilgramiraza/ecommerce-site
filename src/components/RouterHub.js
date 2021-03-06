import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Catalogue from '../pages/Catalogue';
import About from '../pages/About';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';

const RouterHub = (props) => {
  return (
    <BrowserRouter>
    <Header cart={props.cart}
            increaseItemCount={props.increaseItemCount}
            decreaseItemCount={props.decreaseItemCount}
            removeFromCart={props.removeFromCart}
			resetCart={props.clearCart}/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />}>
            <Route path='' element={<Catalogue addToCart={props.addToCart} itemExists={props.itemExists}/>} />
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