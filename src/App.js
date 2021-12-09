import React from 'react'
import Router from './components/Router'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-family: Helvetica;
    font-size: 10px;
    color: rgb(15, 15, 15);
    margin: 0;
    background: rgb(245, 245, 245
  }
`

function App() {

  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
