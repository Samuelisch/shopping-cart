import React from 'react'
import styled from 'styled-components'
import ItemInstance from './ItemInstance'

const CartItems = ({ totalPrice, content, addToCart, removeFromCart }) => {
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
      {itemList}
      <hr />
      <p>Total value of cart: $ {totalPrice} </p>
    </div>
  )
}

export default CartItems