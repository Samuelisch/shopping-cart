import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.div`
  border: 1px solid blue;
  background: rgb(120,250, 120);

  .headerContainer {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    margin: 0 auto;
    max-width: 1440px;
  }

  h1 {
    font-size: 3.8rem;
  }

  nav {
    font-size: 1.8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul {
    display: flex;
    list-style: none;
  }

  a {
    color: rgb(15, 15, 15);
    text-decoration: none;
    margin-right: 30px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="headerContainer">
        <h1>Store Title</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </nav>
      </div>
    </StyledHeader>
  )
}

export default Header