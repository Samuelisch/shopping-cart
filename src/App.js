import React, { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/Footer'
import Router from './components/Router'
import Cart from './components/cartTab/Cart'
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
  const [cartView, setCartView] = useState(true)

  const cartViewHandler = () => {
    setCartView(!cartView)
  }

  const addToCart = (item, num=1) => {
    
  }

  const removeFromCart = (item) => {

  }

  return (
    <div>
      <GlobalStyle />
      <Header cartClick={cartViewHandler} />
      <Router addToCart={addToCart} />
      {true &&
        <Cart 
          exitCartHandler={cartViewHandler} 
          carContent={cartContent}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        /> 
      }
    </div>
  );
}

export default App;
