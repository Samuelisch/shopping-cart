import React from 'react'
import Header from './components/header/Header'
import Footer from './components/Footer'
import Router from './components/Router'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-family: Helvetica;
    font-size: 10px;
    color: rgb(15, 15, 15);
    margin: 0;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Router />
    </div>
  );
}

export default App;
