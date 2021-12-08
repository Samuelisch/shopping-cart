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

const StyledButton = styled(Button)`
  background: rgb(255, 165, 0);
  border-radius: 5px;
`

const Cart = ({ exitCartHandler, cartContent, addToCart, removeFromCart }) => {
  return (
    <StyledContainer>
      <StyledContent>
          <CartItems 
            content={cartContent} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} 
          />
          <StyledButton className="confirm" text="Proceed to payment" />
      </StyledContent>
    </StyledContainer>
  )
}

export default Cart