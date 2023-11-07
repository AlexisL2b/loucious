import React from "react"
import { styled } from "styled-components"
import Title from "../../../reusable-ui/Title"
import { theme } from "../../../../theme"
import Presentation from "./Presentation"
import PrimaryButton from "../../../reusable-ui/PrimaryButton"

export default function Home() {
  return (
    <HomeStyled>
      <Presentation classname={"presentation"} />
      <PrimaryButton label={"button"} classname={"button"} />
    </HomeStyled>
  )
}
const HomeStyled = styled.div`
  height: 100vh;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  display: grid;
  place-items: center;
  grid-template-rows: auto auto;
  gap: 10px;
  .button {
    grid-row: 2;
    align-self: flex-start;
  }
  .presentation {
    grid-row: 1;
    align-self: flex-end;
  }
`
