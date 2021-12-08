import React from 'react';

const Button = ({ className, clickHandler, text,  }) => (
  <button className={className} onClick={clickHandler}>{text}</button>
)

export default Button