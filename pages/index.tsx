import type { NextPage } from 'next'
import { Layout, BoldTitle, Button } from 'components'
import styled from 'styled-components'

const HomeContainer = styled.div`
  padding: 2rem;
  width: 65%;
`

const Logo = styled(BoldTitle)`
  margin: 8.9% 0;
`

const Title = styled(BoldTitle)`
  margin-bottom: 2.8%;
`

const Home: NextPage = () => {
  return (
    <Layout title="Flairgo | a tech company" metaContent="" metaDiscription="">
      <HomeContainer>
        <Logo>Flairgo</Logo>
        <Title>We help you build technology</Title>

        <Button
          onClick={() => {
            console.log('ds')
          }}
        >
          Schedule a session
        </Button>
      </HomeContainer>
    </Layout>
  )
}

export default Home
