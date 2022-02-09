import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Catalogue from '../pages/Catalogue';
import About from '../pages/About';

const RouterHub = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Products' element={<Catalogue />} />
        <Route path='About' element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default RouterHub;