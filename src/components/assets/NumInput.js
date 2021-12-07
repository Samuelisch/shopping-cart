import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 15px;
  text-align: center;
`

const NumInput = ({ value, changeHandler }) => (
  <StyledInput type="num" value={value} onChange={changeHandler} />
)

export default NumInput