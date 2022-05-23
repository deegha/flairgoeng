import styled from 'styled-components'

const H1Container = styled.h1`
  font-family: 'RocGrotesk', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 88px;
  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
`

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return <H1Container>{children}</H1Container>
}
