import React from 'react'
import styled from 'styled-components'

interface IButton {
  onClick: () => void
  children: React.ReactNode
}

const ButtonContainer = styled.div`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color.button.text.primary};
  background-color: ${({ theme }) => theme.color.button.background.primary};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: 22rem;
  cursor: pointer;
`

export const Button: React.FC<IButton> = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}
