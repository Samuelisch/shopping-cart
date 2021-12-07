import React, { useState, useEffect } from 'react'
import ItemGrid from './ItemGrid'
import Instruments from '../assets/Items'

const Shop = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(Instruments)
  }, [])

  const handleItemClick = (e, uniqueId) => {
    console.log(items.find(item => item.id === uniqueId))
  }

  return (
    <div>
      <ItemGrid items={items} clickHandler={handleItemClick} />
    </div>
  )
}

export default Shop