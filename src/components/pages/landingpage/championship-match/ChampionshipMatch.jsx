import React from "react"
import { styled } from "styled-components"
import Championship from "./championship/Championship"
import MatchList from "./matchlist/MatchList"

export default function ChampionshipMatch() {
  return (
    <ChampionshipMatchStyled>
      <Championship />
      <MatchList />
    </ChampionshipMatchStyled>
  )
}

const ChampionshipMatchStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  height: 100vh;
  place-items: center;
  padding-left: 50px;
`
