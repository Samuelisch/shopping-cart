import React from 'react'

const Input = ({ type, placeholder, value, changeHandler,  }) => (
  <input type={type} placeholder={placeholder} value={value} onChange={changeHandler} />
)

export default Input