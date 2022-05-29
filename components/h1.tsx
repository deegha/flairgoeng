import styled from 'styled-components'
import { devices } from 'themes/devices'

const H1Container = styled.h1`
  font-family: 'Questrial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 5.5rem;
  margin: 0;

  @media ${devices.tablet} {
    font-size: 2.625rem;
    line-height: 56px;
  }
`

interface IProp {
  children: React.ReactNode
}

export const H1: React.FC<IProp> = ({ children }) => {
  return <H1Container>{children}</H1Container>
}
