import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
`

const NavInnerContainer = styled.nav`
  display: flex;
  justify-content: flex-end;

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
    `border-bottom: 1px solid ${theme.color.light}; transition: border-color 3s ease;`}
`

interface IPage {
  name: string
  url: string
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

export const Navbar: React.FunctionComponent = () => {
  const router = useRouter()

  return (
    <NavContainer>
      <NavInnerContainer>
        <Nav>
          {links.map((link) => (
            <Link href={`/${link.url}`} key={link.url}>
              <a>
                <NavItem selected={router.pathname === `/${link.url}`}>
                  {link.name}
                </NavItem>
              </a>
            </Link>
          ))}
        </Nav>
      </NavInnerContainer>
    </NavContainer>
  )
}
