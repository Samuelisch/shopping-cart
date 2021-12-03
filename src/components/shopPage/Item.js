import React from 'react'
import styled from 'styled-components'

const Item = ({ imgSrc, title, price, clickHandler }) => {
  return (
    <div onClick={clickHandler}>
      <img src={imgSrc} alt={title} />
      <div>
        <div>{title}</div>
        <div>{price}</div>
      </div>
    </div>
  )
}

export default Item;