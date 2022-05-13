import styled, { keyframes } from 'styled-components'
import { Navbar, Header } from 'components'

const slideIn = keyframes`
  0% {
    transform: translateX(100vh);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: linear-gradient(
      to bottom,
      rgba(0, 0, 128, 0.2),
      rgba(0, 0, 0, 0.9)
    ),
    url('https://res.cloudinary.com/duqpgdc9v/image/upload/v1652367567/flairgo-eng/flaigo-eng-bg.jpg');
  min-height: 100vh;
  overflow: hidden;
`

const Holder = styled.div``

const Page = styled.div`
  animation-name: ${slideIn};
  animation-duration: 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  return (
    <Container>
      <Header
        title={title}
        metaContent={metaContent}
        metaDescription={metaDiscription}
      />
      <Holder>
        <Navbar />
      </Holder>
      <Page>{children}</Page>
    </Container>
  )
}
