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
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid rgb(15,15,15)
    }
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

const CartIcon = styled.li`
  position: relative;
  border-bottom: 1px solid transparent;
  
  &:hover {
    border-bottom: 1px solid rgb(15,15,15)
  }
`

const CartNumIcon = styled.div`
  font-size: 1.2rem;
  position: absolute;
  bottom: 10px;
  left: 20px;
  background: rgb(245, 165, 80);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: default;
  }
`

const NavBar = ({ cartClick, numCart }) => (
  <StyledNav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <CartIcon onClick={cartClick}>
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        {numCart !== 0 &&
          <CartNumIcon>{numCart}</CartNumIcon>}
      </CartIcon>
    </ul>
  </StyledNav>
)

export default NavBar