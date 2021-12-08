import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar';

const StyledHeader = styled.div`
  border: 1px solid blue;
  background: rgb(120,250, 120);

  .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1560px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  @media (min-width: 800px) {
    .headerContainer {
      flex-direction: row;
      padding: 0 30px;
      margin: 0 auto;
    }

    h1 {
      margin-bottom: 25.460px;
      font-size: 3.5rem;
    }
  }
`;

const Header = ({ cartClick }) => {
  return (
    <StyledHeader>
      <div className="headerContainer">
        <h1>Store Title</h1>
        <NavBar cartClick={cartClick}/>
      </div>
    </StyledHeader>
  )
}

export default Header