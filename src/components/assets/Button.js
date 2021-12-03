import React from 'react';

const Button = ({ clickHandler, text,  }) => (
  <button onClick={clickHandler}>{text}</button>
)

export default Button