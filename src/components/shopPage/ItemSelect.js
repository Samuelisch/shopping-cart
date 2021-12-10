import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../assets/Button'

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
  max-width: 1280px;
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
`

const StyledImgContainer = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`

const StyledImg = styled.img`
  width: 100%;
`

const StyledDescription = styled.div`
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-style: italic;
    font-size: 1.2rem;
    width: 50%;
  }
`

const StyledConfigurations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;

  button {
    margin-bottom: 10px;
  }
`

const StyledInputs = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledNum = styled.span`
  width: 25px;
  font-size: 1.5rem;
  text-align: center;
`

const ItemSelect = ({ item, addButtonHandler, exitButtonHandler }) => {
  const [num, setNum] = useState(1)

  const numChangeHandler = (value) => {
    if (value < 1 || value > 10) {
      return
    }
    setNum(value)
  }

  const plusBtnHandler = () => {
    numChangeHandler(num + 1)
  }

  const minusBtnHandler = () => {
    numChangeHandler(num - 1)
  }

  const clickHandler = (e) => {
    if (e.target === document.querySelector('.outsideContent')) {
      exitButtonHandler()
    }
  }

  return (
    <StyledContainer className="outsideContent" onClick={(e) => clickHandler(e)}>
      <StyledContent>
        <StyledImgContainer>
          <StyledImg src={item.imgSrc.default} alt={item.name} />
        </StyledImgContainer>
        <StyledDescription>
          <hr />
          <h2>{item.name}</h2>
          <p>The price of this clarinet is ${item.price}.</p>
          <p> This includes a premium ligature, silk swab, a box of reeds, and numerous other exclusive accessories.</p>
          <StyledFooter>
            <p>*All orders are limited to 10 pieces per model</p>
            <StyledConfigurations>
              <StyledInputs>
                <Button text="-" clickHandler={minusBtnHandler} />
                <StyledNum>{num}</StyledNum>
                <Button text="+" clickHandler={plusBtnHandler} />
              </StyledInputs>
              <Button text="Add to cart" clickHandler={() => addButtonHandler(item, num)} />
            </StyledConfigurations>
          </StyledFooter>
        </StyledDescription>
      </StyledContent>
    </StyledContainer>
  )
}

export default ItemSelect