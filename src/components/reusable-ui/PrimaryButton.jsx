import React from "react"
import { styled } from "styled-components"

export default function PrimaryButton({ label, classname }) {
  return (
    <PrimaryButtonStyled className={classname}>{label}</PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  padding: 8px 16px;
  background-color: #084843;
  border: 2px solid #207e73;
  border-radius: 15px;
  color: white;
`
