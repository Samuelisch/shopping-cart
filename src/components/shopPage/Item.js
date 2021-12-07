import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  height: 200px;
  margin: 30px;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 2px 2px rgb(210, 210, 210);
  }

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 350px;
  }
`

const StyledDescription = styled.div`
  margin: 20px 0;
  .title {
    font-size: 2rem;
    font-weight: bold;
  }

  .price {
    margin-top: 10px;
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 3rem;
    }

    .price {
      font-size: 1.5rem;
      margin-top: 20px;
    }
  }
`

const StyledImg = styled.img`
  max-width: 100%;
  margin-top: 35px;
`

const Item = ({ imgSrc, title, price, clickHandler, id }) => {
  return (
    <StyledContainer onClick={() => clickHandler(id)}>
      <StyledDescription>
        <div className="title">{title}</div>
        <div className="price">{price}</div>
      </StyledDescription>
      <StyledImg src={imgSrc.default} alt={title} />
    </StyledContainer>
  )
}

export default Item;