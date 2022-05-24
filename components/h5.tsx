import styled from 'styled-components'

const H5Container = styled.h5`
  font-family: 'RocGrotesk', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;

  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
`
interface IProp {
  children: React.ReactNode
}

export const H5: React.FC<IProp> = ({ children }) => {
  return <H5Container>{children}</H5Container>
}
