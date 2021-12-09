import React from 'react'
import styled from 'styled-components'
import Button from '../assets/Button'
import NumInput from '../assets/NumInput'

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`

const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30%;
  }

  @media (min-width: 1024px) {
    img {
      width: 40%;
      max-width: 400px;
    }
  }
`

const StyledDescription = styled.div`
  font-weight: bold;
  font-size: 1.3rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`

const StyledInput = styled.div`
  display: flex;
  align-items: center;
`

const ItemInstance = ({ item, quantityChangeHandler, addHandler, removeHandler }) => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <img src={item.imgSrc.default} alt={item.name} />
        <StyledDescription>
          <p>{item.name}</p>
        </StyledDescription>
      </StyledImageContainer>
      <StyledInput>
        <Button text="-" clickHandler={() => removeHandler(item)} />
        <NumInput value={item.quantity} changeHandler={(e) => quantityChangeHandler(e)} />
        <Button text="+" clickHandler={() => addHandler(item)} />
      </StyledInput>
    </StyledContainer>
  )
}

export default ItemInstance