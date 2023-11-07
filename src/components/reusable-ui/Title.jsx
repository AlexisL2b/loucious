import React from "react"
import { styled } from "styled-components"
import { theme } from "../../theme"

export default function Title({ content }) {
  return <TitleStyled>{content}</TitleStyled>
}
const TitleStyled = styled.div`
  color: #0bd8b6;
  font-size: 7.594rem;
  font-family: ${theme.fontsFamily.poppins};
`
