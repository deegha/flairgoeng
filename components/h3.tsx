import styled from 'styled-components'

const H3Container = styled.h3`
  font-family: 'RocGrotesk', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 2.625rem;
  line-height: 3.5rem;

  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
`
interface IProp {
  children: React.ReactNode
}

export const H3: React.FC<IProp> = ({ children }) => {
  return <H3Container>{children}</H3Container>
}
