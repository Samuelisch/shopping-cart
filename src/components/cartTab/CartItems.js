import React from 'react'
import styled from 'styled-components'
import ItemInstance from './ItemInstance'

const CartItems = ({ content, addToCart, removeFromCart }) => {
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
    </div>
  )
}

export default CartItems