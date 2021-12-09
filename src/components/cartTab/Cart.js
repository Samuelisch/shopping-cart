import React from 'react'
import styled from 'styled-components'
import Button from '../assets/Button'
import CartItems from './CartItems'

const StyledContainer = styled.div`
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(210, 210, 210, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledContent = styled.div`
  width: 80%;
  max-width: 800px;
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
`

const StyledButtons = styled.div`
  button {
    width: 100%;
    border-radius: 5px;
    margin: 10px 0;
  }

  .confirm {
    background: rgb(255, 165, 0);

     &:hover {
      background: rgb(240, 120, 0);
     }
  }

  .clear {
    background: rgb(240, 0, 20);

    &:hover {
      background: rgb(230, 0, 0);
     }
  }
`

const Cart = ({ clearCart, totalPrice, exitCartHandler, cartContent, addToCart, removeFromCart }) => {
  const exitCart = (e) => {
    if (e.target === document.querySelector('.cartOutsideContent')) {
      exitCartHandler()
    }
  }

  const orderItems = () => {
    if (cartContent.length === 0) {
      window.alert('Cart is empty!')
      return
    } else {
      window.alert(`Items ordered! Your card has been charged $${((totalPrice * 1.07 * 100) / 100).toFixed(2)}`)
      clearCart()
    }
  }

  const clearContent = () => {
    if (cartContent.length === 0) {
      window.alert('Cart is empty!')
      return
    }
    if (window.confirm("Clear entire cart's content?")) {
      clearCart()
    }
  }

  return (
    <StyledContainer className="cartOutsideContent" onClick={(e) => exitCart(e)}>
      <StyledContent>
          <CartItems 
            content={cartContent} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} 
            totalPrice={totalPrice}
          />
          <StyledButtons>
            <Button className="clear" clickHandler={clearContent} text="Clear cart" />
            <Button  className="confirm" clickHandler={orderItems} text="Proceed to payment" />
          </StyledButtons>
      </StyledContent>
    </StyledContainer>
  )
}

export default Cart