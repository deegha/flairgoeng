import styled from 'styled-components'
import { useState } from 'react'

const NavContainer = styled.div<{ hide: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  ${({ hide }) => hide && `transform: translateY(-120px)`};
  padding: 5px;

  justify-content: center;
  transition: all 0.5s ease-out;
  position: fixed;

  background: rgba(2, 2, 2, 0.1);
  backdrop-filter: blur(4px) saturate(150%);
  border: 1px solid rgba(2, 2, 2, 0.1);

  z-index: 3;
`

const NavInnerContainer = styled.nav`
  display: flex;
  justify-content: center;

  width: 80%;
`

const Nav = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`

const NavItem = styled.li<{ selected: boolean }>`
  list-style: none;
  margin: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.light};
  font-weight: 500;
  font-size: 1rem;

  ${({ selected, theme }) =>
    selected &&
    `border-bottom: 1px solid ${theme.color.light}; 
    transition: border-color 3s ease;`}
`

interface IPage {
  name: string
  url: string
}

interface IProps {
  hide: boolean
}

const links: Array<IPage> = [
  {
    name: 'Home',
    url: '',
  },
  {
    name: 'About us',
    url: 'about',
  },
  {
    name: 'Our Services',
    url: 'services',
  },
  {
    name: 'Contact us',
    url: 'contact',
  },
]

export const Navbar: React.FunctionComponent<IProps> = ({ hide }) => {
  const [selectedSection, selectSection] = useState<string>('')

  return (
    <NavContainer hide={hide}>
      <NavInnerContainer>
        <Nav>
          {links.map((link) => (
            <NavItem
              onClick={() => selectSection(link.url)}
              key={link.url}
              selected={link.url === selectedSection}
            >
              {link.name}
            </NavItem>
          ))}
        </Nav>
      </NavInnerContainer>
    </NavContainer>
  )
}
