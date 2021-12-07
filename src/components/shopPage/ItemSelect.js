import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../assets/Button'
import NumInput from '../assets/NumInput'

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
  height: 400px;
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
`

const StyledImg = styled.img`
  width: 100%;
  margin-top: 50px;
`

const StyledDescription = styled.div`
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
`

const StyledConfigurations = styled.div`
  float: right;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 10px;
  }
`

const ItemSelect = ({ item, addButtonHandler, exitButtonHandler }) => {
  const [num, setNum] = useState(1)

  return (
    <StyledContainer>
      <StyledContent>
        <StyledImg src={item.imgSrc.default} alt={item.name} />
        <StyledDescription>
          <hr />
          <h2>{item.name}</h2>
          <p>The price of this clarinet is {item.price}. This includes a premium ligature, silk swab, a box of reeds, and numerous other exclusive accessories.</p>
          <StyledConfigurations>
            <div>
              <Button text="-" />
              <NumInput value={1}/>
              <Button text="+" />
            </div>
            <Button text="Add to cart"/>
          </StyledConfigurations>
        </StyledDescription>
      </StyledContent>
    </StyledContainer>
  )
}

export default ItemSelect