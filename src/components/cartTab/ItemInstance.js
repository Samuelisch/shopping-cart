import React from 'react'
import styled from 'styled-components'
import Button from '../assets/Button'
import NumInput from '../assets/NumInput'

const StyledContainer = styled.div`
  border: 1px solid red;
`

const ItemInstance = ({ item, addHandler, removeHandler }) => {
  return (
    <StyledContainer>
      <p>{item.name}</p>
      <p>{item.quantity}</p>
    </StyledContainer>
  )
}

export default ItemInstance