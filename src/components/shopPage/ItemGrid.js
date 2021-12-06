import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const StyledGrid = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ItemGrid = ({ items, clickHandler }) => {
  const itemsMap = items.map(item => (
    <Item
      key={item.id}
      id={item.id} 
      imgSrc={item.imgSrc}
      title={item.name}
      price={item.price}
      clickHandler={clickHandler}
    />
  ))

  return (
    <StyledGrid>
      {itemsMap}
    </StyledGrid>
  )
}

export default ItemGrid