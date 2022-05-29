import styled from 'styled-components'
import { devices } from 'themes/devices'

const H3Container = styled.h3`
  font-family: 'Questrial', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 2.625rem;
  line-height: 3.5rem;
  margin: 0;

  @media ${devices.tablet} {
    font-size: 2rem;
  }
`
interface IProp {
  children: React.ReactNode
}

export const H3: React.FC<IProp> = ({ children }) => {
  return <H3Container>{children}</H3Container>
}
