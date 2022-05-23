import styled from 'styled-components'

const TextLargeContainer = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;

  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;

  color: #ffffff;
`

export const HeadingLarge: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <TextLargeContainer>{children}</TextLargeContainer>
}
