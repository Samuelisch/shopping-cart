import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './shopPage/Shop';
import Home from './homePage/Home';
import Contact from './contactPage/Contact';
import Cart from './cartTab/Cart';
import Header from './header/Header';
import Footer from './Footer';

const Router = (props) => {
  const { addToCart, cartView, cartViewHandler, cartContent, removeFromCart } = props
  return (
    <BrowserRouter>
      <Header cartClick={cartViewHandler} />
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
      {cartView &&
        <Cart 
          cartHandler={cartViewHandler} 
          cartContent={cartContent}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        /> 
      }
    </BrowserRouter>
  )
}

export default Router