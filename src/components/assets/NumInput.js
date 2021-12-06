import React from 'react'
import Input from './Input'
import styled from 'styled-components'

const NumInput = ({ changeHandler, value }) => (
  <Input type="number" changeHandler={changeHandler} value={value} />
)

export default NumInput