import React from 'react'
import styled from 'styled-components'
import ItemInstance from './ItemInstance'

const StyledEmpty = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`

const StyledPrice = styled.div`
  .tax {
    text-align: left;
    font-size: 1.3rem;
  }

  .total {
    text-align: center;
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    .tax {
      font-size: 1.5rem;
    }

    .total {
      font-size: 1.8rem;
    }
  }
`

const CartItems = ({ totalPrice, content, addToCart, removeFromCart }) => {
  const totalTax = ((totalPrice * 0.07 * 100) / 100).toFixed(2)
  const itemList = content.map(item => (
    <ItemInstance 
      key={item.id}
      item={item}
      addHandler={addToCart}
      removeHandler={removeFromCart}
    />
  ))

  return (
    <div>
      {content.length === 0 &&
        <StyledEmpty>Cart is empty</StyledEmpty>
      }
      {itemList}
      <StyledPrice>
        <div className="tax">
          <p>Total before GST:  ${totalPrice}</p>
          <p>GST(7%):  ${totalTax} </p>
        </div>
        <p className="total">Total payable: ${((totalPrice * 1.07 * 100) / 100).toFixed(2)} </p>
      </StyledPrice>
    </div>
  )
}

export default CartItems