import styled from 'styled-components'
import { useState } from 'react'
import { Logo } from './logo'
import { Button } from './button'
import { devices } from 'themes/devices'
import HambergerIcon from 'assets/evaMenuOutline.svg'
import Image from 'next/image'

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
  padding: 0 90px;
  z-index: 3;

  @media ${devices.tablet} {
    padding: 0 30px;
    height: 6rem;
  }
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

  @media ${devices.tablet} {
    display: none;
  }
`

const NavItem = styled.li<{ selected: boolean }>`
  list-style: none;
  margin: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.light};
  font-weight: 500;
  font-size: 1rem;
  opacity: 0.4;

  ${({ selected }) =>
    selected &&
    `opacity: 1; 
    transition: border-color 3s ease;`}
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media ${devices.tablet} {
    display: none;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`

const Hamberger = styled.div`
  display: none;
  @media ${devices.tablet} {
    display: block;
  }
`

const MobileNav = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: #212121;
  top: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;

    li {
      font-size: 2.625rem;
      line-height: 3.5rem;
      margin: 1.5rem 0;
      list-style: none;
      color: ${({ theme }) => theme.color.light};
    }
  }
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

export const scroll = (url: string) => {
  const section = document.querySelector(`#${url}`)
  if (!section) return
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const Navbar: React.FunctionComponent<IProps> = ({ hide }) => {
  const [selectedSection, selectSection] = useState<string>('')
  const [mobileNav, setMobileNav] = useState<boolean>(false)

  const handleClickNavItem = (url: string) => {
    selectSection(url)
    scroll(url)
  }

  return (
    <NavContainer hide={hide}>
      <NavInnerContainer>
        <LogoContainer>
          <Logo width={'9.61rem'} />
        </LogoContainer>

        <Nav>
          {links.map((link) => (
            <NavItem
              onClick={() => handleClickNavItem(link.url)}
              key={link.url}
              selected={link.url === selectedSection}
            >
              {link.name}
            </NavItem>
          ))}
        </Nav>
        <BtnContainer>
          <Button
            type="primary"
            onClick={() => {
              window.open('https://calendly.com/flairgolabs/30min', '_blank')
            }}
          >
            HIRE US
          </Button>
        </BtnContainer>
        <Hamberger onClick={() => setMobileNav(true)}>
          <Image
            layout="fixed"
            src={HambergerIcon}
            alt="Navigate Next Section"
          />
        </Hamberger>
      </NavInnerContainer>
      {mobileNav && (
        <MobileNav>
          <ul>
            {links.map((link) => (
              <li key={link.url}>{link.name}</li>
            ))}
          </ul>
        </MobileNav>
      )}
    </NavContainer>
  )
}
