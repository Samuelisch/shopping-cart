import React from 'react'
import styled from 'styled-components'
import Button from '../assets/Button'

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
  justify-content: space-around;
`

const StyledNum = styled.p`
  width: 20px;
  font-size: 1.7rem;
  text-align: center;
`

const ItemInstance = ({ item, addHandler, removeHandler }) => {
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
        <StyledNum>{item.quantity}</StyledNum>
        <Button text="+" clickHandler={() => addHandler(item)} />
      </StyledInput>
    </StyledContainer>
  )
}

export default ItemInstance