import styled from 'styled-components'

const H1Container = styled.h1`
  font-family: 'RocGrotesk', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 5.5rem;
  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
`

interface IProp {
  children: React.ReactNode
}

export const H1: React.FC<IProp> = ({ children }) => {
  return <H1Container>{children}</H1Container>
}
