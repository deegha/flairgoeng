import type { NextPage } from 'next'
import { Layout, BoldTitle, Button } from 'components'
import styled from 'styled-components'

const HomeContainer = styled.div`
  padding: 2rem;
`

const TextContainer = styled.div`
  width: 65%;
`
const Home: NextPage = () => {
  return (
    <Layout title="Flairgo | a tech company" metaContent="" metaDiscription="">
      <HomeContainer>
        <TextContainer>
          <BoldTitle>Flairgo</BoldTitle>
          <BoldTitle>We help you build technology</BoldTitle>
          <Button
            onClick={() => {
              console.log('ds')
            }}
          >
            Schedule a session
          </Button>
        </TextContainer>
      </HomeContainer>
    </Layout>
  )
}

export default Home
