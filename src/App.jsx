import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import LandingPage from "./components/pages/landingpage/LandingPage"
import { styled } from "styled-components"

function App() {
  return (
    <AppStyled>
      <LandingPage />
    </AppStyled>
  )
}

export default App

const AppStyled = styled.div`
  height: 100%;
  background-color: red;
`
