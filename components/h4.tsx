import styled from 'styled-components'
import { devices } from 'themes/devices'

const H4Container = styled.h4`
  font-family: 'Questrial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;
  margin: 0;

  @media ${devices.tablet} {
    font-size: 1.5 rem;
  }
`
interface IProp {
  children: React.ReactNode
}

export const H4: React.FC<IProp> = ({ children }) => {
  return <H4Container>{children}</H4Container>
}
