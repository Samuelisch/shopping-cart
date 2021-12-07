import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const StyledNav = styled.nav`
  font-size: 1.5rem;
  width: 100%;
  max-width: 350px;

  ul {
    padding: 0;
    display: flex;
    list-style: none;
    justify-content: space-around;
  }

  a {
    color: rgb(15, 15, 15);
    text-decoration: none;
    margin-right: 20px;
  }

  @media (min-width: 800px) {
    font-size: 1.6rem;

    ul {
      justify-content: center;
    }

    a {
      margin-right: 30px;
    }
  }
`

const NavBar = () => (
  <StyledNav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/Contact">Contact</a></li>
      <li><FontAwesomeIcon icon={faShoppingCart} size="lg" /></li>
    </ul>
  </StyledNav>
)

export default NavBar