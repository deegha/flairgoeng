import type { NextPage } from 'next'
import { Layout } from 'components'
import styled from 'styled-components'

const Container = styled.div`
  width: 100hvw;
  padding: 2rem;
`

const Contact: NextPage = () => {
  return (
    <Layout title="Flairgo | contact us" metaContent="" metaDiscription="">
      <Container>this is the contact us page</Container>
    </Layout>
  )
}

export default Contact
