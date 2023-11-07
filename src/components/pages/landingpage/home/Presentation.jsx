import React from "react"
import { styled } from "styled-components"
import Title from "../../../reusable-ui/Title"
import { theme } from "../../../../theme"
import PrimaryButton from "../../../reusable-ui/PrimaryButton"

export default function Presentation({ classname }) {
  return (
    <PresentationStyled className={classname}>
      <Title content={"FootStatPro"} />
      <span className="desc_1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vel.
      </span>
      <span className="desc_2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vel.
      </span>
    </PresentationStyled>
  )
}
const PresentationStyled = styled.div`
  width: 50%;

  span {
    font-family: ${theme.fontsFamily.poppins};
    font-size: 3.375rem;
    color: #adf0dd;
  }
`
