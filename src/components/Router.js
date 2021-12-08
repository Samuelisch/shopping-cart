import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './shopPage/Shop';
import Home from './homePage/Home';
import Contact from './contactPage/Contact';

const Router = ({ addToCart }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route 
          path="products" 
          element={
            <Shop 
              addToCart={addToCart}
            />
          } 
        />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router