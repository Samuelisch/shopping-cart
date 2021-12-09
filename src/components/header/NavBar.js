import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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

const NavBar = ({ cartClick }) => (
  <StyledNav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      <li onClick={cartClick}><FontAwesomeIcon icon={faShoppingCart} size="lg" /></li>
    </ul>
  </StyledNav>
)

export default NavBar