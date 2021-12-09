import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './shopPage/Shop';
import Home from './homePage/Home';
import Contact from './contactPage/Contact';
import Cart from './cartTab/Cart';
import Header from './header/Header';
import Footer from './Footer';

const Router = () => {
  const [cartContent, setCartContent] = useState([])
  const [cartView, setCartView] = useState(false)

  const cartViewHandler = () => {
    setCartView(!cartView)
  }

  const addNumToCart = (item, num) => {
    let newNum = item.quantity + num
    if (newNum > 9) {
      return
    }
    let newItem = Object.assign({}, item, {quantity: newNum})
    setCartContent(cartContent.map(content => content.id !== item.id ? content : newItem))
  }

  const addToCart = (item, num=1) => {
    let copyContent = [...cartContent]
    let existingItem = copyContent.find(content => content.id === item.id)
    let newItem = {}
    if (!existingItem) {
      newItem = Object.assign({}, item, {quantity: num})
      copyContent.push(newItem)
      setCartContent(copyContent)
    } else {
      addNumToCart(existingItem, num)
    }
    console.log(cartContent)
  }

  const removeFromCart = (item) => {

  }
  
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