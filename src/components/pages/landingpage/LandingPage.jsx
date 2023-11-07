import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../theme"
import Title from "../../reusable-ui/Title"
import Home from "./home/Home"
import ChampionshipMatch from "./championship-match/ChampionshipMatch"

export default function LandingPage() {
  return (
    <LandingPageStyled className="landing">
      <Home />
      <ChampionshipMatch />
    </LandingPageStyled>
  )
}

const LandingPageStyled = styled.div`
  background-color: ${theme.colors.background_subtle};
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
`
