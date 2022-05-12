import styled from 'styled-components'

export { Header } from './header'
export { Navbar } from './navBar'
export { Layout } from './layout/layout'
export { Button } from './button'

export const BoldTitle = styled.h1`
  font-size: 5.1rem;
  font-weight: 800;
  margin: 0;
  color: ${({ theme }) => theme.color.light};
`

export const Header3 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.color.light};
`

export const Header4 = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.color.light};
`
