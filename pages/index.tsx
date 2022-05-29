import type { NextPage } from 'next'
import { Layout } from 'components'
import { Hero, Services, Processes, Bookings, Footer } from 'components'

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
      <Bookings />
      <Footer />
    </Layout>
  )
}

export default Home
