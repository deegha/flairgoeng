import styled from 'styled-components'

const TextLargeContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;

  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
`

export const TextLarge = ({ children }: { children: React.ReactNode }) => {
  return <TextLargeContainer>{children}</TextLargeContainer>
}
