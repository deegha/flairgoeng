import React from 'react'
import styled from 'styled-components'

type BtnType = 'primary' | 'secondary' | 'disabled'

interface IButton {
  onClick: () => void
  type: BtnType
  children: React.ReactNode
}

const ButtonContainer = styled.div<{ type: BtnType }>`
  padding: 0.5rem 1rem;
  color: ${({ theme, type }) => theme.color.button.text[type]};
  background-color: ${({ theme, type }) => theme.color.button.background[type]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.188rem;
  height: 4rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  line-height: 2rem;
  &:hover {
    color: ${({ theme, type }) => theme.color.button.hover.text[type]};
    background-color: ${({ theme, type }) =>
      theme.color.button.hover.background[type]};
  }
`

export const Button: React.FC<IButton> = ({ onClick, type, children }) => {
  return (
    <ButtonContainer
      onClick={type !== 'disabled' ? onClick : undefined}
      type={type}
    >
      {children}
    </ButtonContainer>
  )
}
