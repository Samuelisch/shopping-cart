import React, { useState, useEffect } from 'react'
import ItemGrid from './ItemGrid'
import Instruments from '../assets/Instruments'
import ItemSelect from './ItemSelect'

const Shop = ({ addToCart }) => {
  const [selectItem, setSelectItem] = useState(null)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(Instruments)
  }, [])

  const handleItemClick = (uniqueId) => {
    setSelectItem(items.find(item => item.id === uniqueId))
  }

  const exitButtonHandler = () => {
    setSelectItem(null)
  }

  return (
    <div>
      <ItemGrid items={items} clickHandler={handleItemClick} />
      {selectItem &&
        <ItemSelect 
          item={selectItem}
          addButtonHandler={addToCart}
          exitButtonHandler={exitButtonHandler}
        />
      }
    </div>
  )
}

export default Shop