import React, { useState } from 'react'
import ItemGrid from './ItemGrid'

const Shop = () => {
  const [items, setItems] = useState([
    {
      id: 149078,
      imgSrc: '#',
      name: 'first item',
      price: '$24.50'
    },
    {
      id: 85093428,
      imgSrc: '#',
      name: 'second item',
      price: '$8.25'
    },
    {
      id: 534958,
      imgSrc: '#',
      name: 'third item',
      price: '$10.20'
    },
    {
      id: 542334534,
      imgSrc: '#',
      name: 'fourth item',
      price: '$20.75'
    },
    {
      id: 80695485,
      imgSrc: '#',
      name: 'fifth item',
      price: '$11.65'
    },
    {
      id: 1239891248,
      imgSrc: '#',
      name: 'sixth item',
      price: '$6.75'
    }
  ])

  const handleItemClick = (e, uniqueId) => {
    console.log(uniqueId)
  }

  return (
    <ItemGrid items={items} clickHandler={handleItemClick} />
  )
}

export default Shop