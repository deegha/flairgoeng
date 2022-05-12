import type { NextPage } from 'next'
import { Layout } from 'components'
import styled from 'styled-components'

const Container = styled.div`
  width: 100hvw;
  padding: 2rem;
`

const Services: NextPage = () => {
  return (
    <Layout title="Flairgo | Services" metaContent="" metaDiscription="">
      <Container>this is the about us page</Container>
    </Layout>
  )
}

export default Services
