import type { NextPage } from 'next'
import { Layout } from 'components'
import { Hero } from 'components/hero'

const Home: NextPage = () => {
  return (
    <Layout
      title="Flairgo | a tech company"
      metaContent="description"
      metaDiscription="Flairgo is a Sri Lankan tech statup which mainly focuses on web and mobile application development"
    >
      <Hero />
    </Layout>
  )
}

export default Home
