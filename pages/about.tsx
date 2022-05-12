import type { NextPage } from 'next'
import { Layout } from 'components'
import styled from 'styled-components'

const AboutContainer = styled.div`
  width: 100hvw;
  padding: 2rem;
`

const AboutUs: NextPage = () => {
  return (
    <Layout title="Flairgo | abput us" metaContent="" metaDiscription="">
      <AboutContainer>this is the about us page</AboutContainer>
    </Layout>
  )
}

export default AboutUs
