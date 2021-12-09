import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledImg = styled.img`
  width: 100%;
`

const StyledName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`

const Featured = ({ item }) => {
  return (
    <StyledContainer>
      <StyledImg src={item.image} alt="featured clarinet" />
      <StyledName>{item.name}</StyledName>
    </StyledContainer>
  )
}

export default Featured