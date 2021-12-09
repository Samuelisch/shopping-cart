import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './shopPage/Shop';
import Home from './homePage/Home';
import Contact from './contactPage/Contact';
import Cart from './cartTab/Cart';
import Header from './header/Header';
import Footer from './Footer';

const Router = () => {
  const [cartContent, setCartContent] = useState([
    {
      id: 58437,
      name: 'RC Grenadilla',
      price: 3450,
      quantity: 2
    },
    {
      id: 4938243,
      name: 'R13 Grenadilla',
      price: 3450,
      quantity: 6
    },
    {
      id: 498312098,
      name: 'Tosca Grenadilla',
      price: 7950,
      quantity: 4
    },
  ])
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartView, setCartView] = useState(false)

  useEffect(() => {
    if (cartContent.length === 0) {
      setTotalPrice(0)
    } else {
      let total = 0;
      cartContent.forEach(item => total += item.price * item.quantity)
      setTotalPrice(total)
    }
  }, [cartContent])

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
  }

  const removeFromCart = (item) => {

  }

  return (
    <BrowserRouter>
      <Header cartClick={cartViewHandler} numItem />
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
      {true &&
        <Cart 
          cartHandler={cartViewHandler} 
          cartContent={cartContent}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          totalPrice={totalPrice}
        /> 
      }
    </BrowserRouter>
  )
}

export default Router