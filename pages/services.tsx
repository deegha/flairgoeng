import type { NextPage } from 'next'
import { Layout, BoldTitle, Header4, Header5 } from 'components'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

import mobile from '/assets/mobile.svg'
import computer from '/assets/computer.svg'
import user from '/assets/user.svg'

const slideIn = keyframes`
  0% {
    transform: translateY(-100);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
  }
`

const ServicesContainer = styled.div`
  padding: 2rem;
  width: 65%;
`

const ServicesCollection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 6.25rem;
`

const Service = styled.div`
  width: 18rem;
  animation-name: ${slideIn};
  animation-duration: 2s;
`
const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const HeadingContainer = styled(BoldTitle)`
  margin-top: 8.9%;
`

const ServiceTitle = styled(Header4)`
  margin-top: 2rem;
  text-align: center;
`

const ServiceDesc = styled(Header5)`
  margin-top: 2rem;
  text-align: center;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
`

const Services: NextPage = () => {
  return (
    <Layout
      title="Flairgo | Services"
      metaContent="description"
      metaDiscription="Flairgo is a Sri Lankan tech statup which mainly focuses on web and mobile application development"
    >
      <ServicesContainer>
        <HeadingContainer>Our Services</HeadingContainer>
        <ServicesCollection>
          <Service>
            <ImgContainer>
              <Image
                src={mobile}
                width={135}
                height={135}
                alt="Mobile app development"
              />
            </ImgContainer>
            <ServiceTitle>Cross Platform Mobile Applications</ServiceTitle>
            <ServiceDesc>
              We build mobile applications that function on both iOS and
              Android.
            </ServiceDesc>
          </Service>
          <Service>
            <ImgContainer>
              <Image
                src={computer}
                width={135}
                height={135}
                alt="Web development"
              />
            </ImgContainer>
            <ServiceTitle>Web Applications</ServiceTitle>
            <ServiceDesc>
              We build mobile applications that function on both iOS and
              Android.
            </ServiceDesc>
          </Service>
          <Service>
            <ImgContainer>
              <Image
                src={user}
                width={135}
                height={135}
                alt="Fraont end consultancy"
              />
            </ImgContainer>
            <ServiceTitle>Front-End Consultancy</ServiceTitle>
            <ServiceDesc>
              We build mobile applications that function on both iOS and
              Android.
            </ServiceDesc>
          </Service>
        </ServicesCollection>
      </ServicesContainer>
    </Layout>
  )
}

export default Services
