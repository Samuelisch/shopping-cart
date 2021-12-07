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
    <div key={item.id}>
    <Item
      id={item.id} 
      imgSrc={item.imgSrc}
      title={item.name}
      price={item.price}
      clickHandler={clickHandler}
    />
    <hr />
    </div>
  ))

  return (
    <StyledGrid>
      {itemsMap}
    </StyledGrid>
  )
}

export default ItemGrid