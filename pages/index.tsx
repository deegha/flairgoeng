import type { NextPage } from 'next'
import { Layout, HoloItem } from 'components'
import styled from 'styled-components'

import { useState } from 'react'

const Card = styled.div`
  border-radius: 12px;
  width: 530px;
  height: 848px;
  background: rgba(255, 255, 255, 0.04);
  padding: 4.25rem;
  border: 4px solid #3a36ff;
  backdrop-filter: blur(100px);

  border-radius: 12px;

  h2 {
    font-family: 'Roc Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 88px;
    font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
    color: #ffffff;
    font-family: 'RocGrotesk', sans-serif;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
    color: #ffffff;
  }
`

const Proccesses = styled.div`
  position: relative;
  display: flex;
  gap: 90px;
  width: 100%;
  z-index: 1;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin 20px 0;
`

const Home: NextPage = () => {
  const [selected, setSelected] = useState(false)

  return (
    <Layout
      title="Flairgo | a tech company"
      metaContent="description"
      metaDiscription="Flairgo is a Sri Lankan tech statup which mainly focuses on web and mobile application development"
    >
      <Proccesses>
        <Card
          onMouseEnter={() => setSelected(true)}
          onMouseLeave={() => setSelected(false)}
        >
          <h2>Lorem Ipsum is simply dummy text </h2>
          <p>
            {' '}
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has
          </p>
        </Card>
        <Card>
          <h2>Lorem Ipsum is simply dummy text </h2>
          <p>
            {' '}
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has
          </p>
        </Card>
        <Card>
          <h2>Lorem Ipsum is simply dummy text </h2>
          <p>
            {' '}
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has
          </p>
        </Card>
      </Proccesses>

      {selected && <HoloItem appear={selected} />}
    </Layout>
  )
}

export default Home
