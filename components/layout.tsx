import styled from 'styled-components'
import { Navbar, Header } from 'components'
import { useEffect, useState } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  padding: 50px;
`

const Page = styled.div`
  max-width: 104.39rem;
  padding: 0 20px;
`

interface IProps {
  title: string
  metaContent: string
  metaDiscription: string
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<IProps> = ({
  children,
  title,
  metaContent,
  metaDiscription,
}) => {
  const { isScrollingUp, isScrollingDown } = useScrollDirection()
  const [hideNav, setHideNav] = useState<boolean>(false)

  useEffect(() => {
    isScrollingDown && setHideNav(true)
    isScrollingUp && setHideNav(false)
  }, [isScrollingDown, isScrollingUp])

  return (
    <Container>
      <Header
        title={title}
        metaContent={metaContent}
        metaDescription={metaDiscription}
      />

      <Navbar hide={hideNav} />

      <Page>{children}</Page>
    </Container>
  )
}
