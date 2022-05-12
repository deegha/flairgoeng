import styled from 'styled-components'

export { Header } from './header'
export { Navbar } from './navBar'
export { Layout } from './layout/layout'
export { Button } from './button'

export const BoldTitle = styled.h1`
  font-size: 5.1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.color.light};
`
