import type { NextPage } from 'next'
import { Layout, BoldTitle, Button } from 'components'
import styled, { keyframes } from 'styled-components'
import { useRouter } from 'next/router'

const slideIn = keyframes`
  0% {
    transform: translateY(-100);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
  }
`

const HomeContainer = styled.div`
  padding: 2rem;
  width: 65%;
`

const LowerTextContainer = styled.div`
  padding: 2rem;
  width: 65%;
`

const Logo = styled(BoldTitle)`
  margin: 8.9% 0;
`

const Title = styled(BoldTitle)`
  margin-bottom: 2.8%;
`

const LowerText = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.125rem;
  color: #a4b0be;
  animation-name: ${slideIn};
  animation-duration: 3s;
`

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <Layout
      title="Flairgo | a tech company"
      metaContent="description"
      metaDiscription="Flairgo is a Sri Lankan tech statup which mainly focuses on web and mobile application development"
    >
      <HomeContainer>
        <Logo>Flairgo</Logo>
        <Title>We help you build technology</Title>

        <Button onClick={() => router.push('contact')}>
          Schedule a session
        </Button>
      </HomeContainer>

      <LowerTextContainer>
        <LowerText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
        </LowerText>
      </LowerTextContainer>
    </Layout>
  )
}

export default Home
