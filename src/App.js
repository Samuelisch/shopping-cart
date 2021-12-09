import React, { useState } from 'react'
import Router from './components/Router'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-family: Helvetica;
    font-size: 10px;
    color: rgb(15, 15, 15);
    margin: 0;
    background: rgb(245, 245, 245
  }
`

function App() {
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
    <div>
      <GlobalStyle />
      <Router 
        addToCart={addToCart}
        cartViewHandler={cartViewHandler}
        cartContent={cartContent}
        removeFromCart={removeFromCart}
        cartView={cartView}
      />
    </div>
  );
}

export default App;
