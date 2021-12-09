import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './shopPage/Shop';
import Home from './homePage/Home';
import Cart from './cartTab/Cart';
import Header from './header/Header';

const Router = () => {
  const [cartContent, setCartContent] = useState([])
  const [numItems, setNumItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartView, setCartView] = useState(false)

  useEffect(() => {
      let total = 0;
      cartContent.forEach(item => total += item.price * item.quantity)
      setTotalPrice(((total * 100) / 100).toFixed(2))
  }, [cartContent])

  useEffect(() => {
    if (cartContent.length === 0) {
      setNumItems(0)
    } else {
      let total = 0;
      cartContent.forEach(item => total += item.quantity)
      setNumItems(total)
    }
  }, [cartContent])

  const cartViewHandler = () => {
    setCartView(!cartView)
  }

  const addNumToCart = (item, num) => {
    let newNum = item.quantity + num
    if (newNum > 10) {
      newNum = 10
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

  const removeNumFromCart = (item) => {
    let newNum = item.quantity - 1
    if (newNum <= 0) {
      deleteItemFromCart(item)
    } else {
      let newItem = Object.assign({}, item, {quantity: newNum})
      setCartContent(cartContent.map(content => content.id !== item.id ? content : newItem))
    }
  }

  const deleteItemFromCart = (item) => {
    if (window.confirm(`Remove ${item.name} from cart?`)) {
      let copyContent = [...cartContent]
      setCartContent(copyContent.filter(content => content.id !== item.id))
    } else {
      return
    }
  }

  const clearCart = () => {
    setCartContent([])
  }

  return (
    <BrowserRouter>
      <Header cartClick={cartViewHandler} numCart={numItems} />
      <Routes>
        <Route index element={<Home />} />
        <Route 
          path="shopping-cart/products" 
          element={
            <Shop 
              addToCart={addToCart}
            />
          } 
        />
      </Routes>
      {cartView &&
        <Cart 
          exitCartHandler={cartViewHandler} 
          cartContent={cartContent}
          addToCart={addToCart}
          removeFromCart={removeNumFromCart}
          totalPrice={totalPrice}
          clearCart={clearCart}
        /> 
      }
    </BrowserRouter>
  )
}

export default Router