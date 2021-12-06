import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 225px;
  height: 300px;
  border: 1px solid black;
  margin: 30px;
`

const StyledImageContainer = styled.div`
  width: 100%;
  height: 225px;
  border: 1px solid red;
  background: rgb(245, 245, 245)
`

const StyledDescription = styled.div`
  margin: 10px 0;
  .title {
    font-size: 2rem;
    font-weight: bold;
  }

  .price {
    margin-top: 10px;
    font-size: 1.2rem;
  }
`

const Item = ({ imgSrc, title, price, clickHandler, id }) => {
  return (
    <StyledContainer onClick={(e) => clickHandler(e, id)}>
      <StyledImageContainer>
        <img src={imgSrc} alt={title} />
      </StyledImageContainer>
      <StyledDescription>
        <div className="title">{title}</div>
        <div className="price">{price}</div>
      </StyledDescription>
    </StyledContainer>
  )
}

export default Item;