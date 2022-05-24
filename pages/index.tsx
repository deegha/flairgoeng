import type { NextPage } from 'next'
import { Layout } from 'components'
import { Hero, Services, Processes } from 'components'

const Home: NextPage = () => {
  return (
    <Layout
      title="Flairgo | a tech company"
      metaContent="description"
      metaDiscription="Flairgo is a Sri Lankan tech statup which mainly focuses on web and mobile application development"
    >
      <Hero />
      <Services />
      <Processes />
    </Layout>
  )
}

export default Home
