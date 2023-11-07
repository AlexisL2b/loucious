import React from "react"
import { styled } from "styled-components"

export default function MatchList() {
  return <MatchListStyled>MatchList</MatchListStyled>
}

const MatchListStyled = styled.div`
  height: 90%;
  width: 90%;
  background: rgba(15, 46, 34, 0.8);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid #145750;
`
