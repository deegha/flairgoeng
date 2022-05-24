import styled from 'styled-components'
import { useState } from 'react'
import { Logo } from './logo'
import { Button } from './button'

const NavContainer = styled.div<{ hide: boolean }>`
  display: flex;
  max-width: 104.39rem;
  width: 100%;
  height: 8rem;
  ${({ hide }) => hide && `transform: translateY(-12.5rem)`};
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-out;
  position: fixed;
  top: 0;
  background: rgba(2, 2, 2, 0.1);
  backdrop-filter: blur(4px) saturate(150%);
  border: 1px solid rgba(2, 2, 2, 0.1);
  padding: 0 20px;
  z-index: 3;
`

const NavInnerContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
`

const Nav = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 4;
  justify-content: center;
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

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
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
    name: 'SERVICES',
    url: 'services',
  },
  {
    name: 'PROCESS',
    url: 'process',
  },
  {
    name: 'CONTACT',
    url: 'contact',
  },
]

export const Navbar: React.FunctionComponent<IProps> = ({ hide }) => {
  const [selectedSection, selectSection] = useState<string>('')

  return (
    <NavContainer hide={hide}>
      <NavInnerContainer>
        <LogoContainer>
          <Logo width={'9.61rem'} />
        </LogoContainer>

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
        <BtnContainer>
          <Button onClick={() => console.log('Hello')} type={'primary'}>
            HIRE US
          </Button>
        </BtnContainer>
      </NavInnerContainer>
    </NavContainer>
  )
}
