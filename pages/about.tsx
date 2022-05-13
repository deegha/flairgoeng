import type { NextPage } from 'next'
import { Layout, BoldTitle, Header3, Header4 } from 'components'
import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  0% {
    transform: translateY(-100);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
  }
`

const AboutContainer = styled.div`
  padding: 2rem;
  width: 65%;
`

const HeadingContainer = styled(BoldTitle)`
  margin-top: 8.9%;
`

const Box = styled.div`
  animation-name: ${slideIn};
  animation-duration: 2s;
  width: 26.25rem;
  height: 21.875rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  padding: 2rem;
  text-align-center;
`

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10.25rem;
  margin-top: 4rem;
  width: 100%;
  justify-content: space-around;
  animation-name: ${slideIn};
  animation-duration: 0.4s;
`

const BoxTopicContainer = styled(Header3)`
  display: flex;
  justify-content: center;
  margin-top: 1.125rem;
  margin-bottom: 2rem;
`

const BoxTextContainer = styled(Header4)`
  text-align: center;
  font-weight: 100;
  line-height: 2rem;
  letter-spacing: 0.1rem;
`

const AboutUs: NextPage = () => {
  return (
    <Layout
      title="Flairgo | about us"
      metaContent="description"
      metaDiscription="Flairgo is a Sri Lankan tech statup which mainly focuses on web and mobile application development"
    >
      <AboutContainer>
        <HeadingContainer>We are</HeadingContainer>
        <Header3>a software company blah blah</Header3>
        <BoxContainer>
          <Box>
            <BoxTopicContainer>Our Vision</BoxTopicContainer>
            <BoxTextContainer>
              Provide digital solutions to enterprises through technology
            </BoxTextContainer>
          </Box>
          <Box>
            <BoxTopicContainer>Our Mission</BoxTopicContainer>
            <BoxTextContainer>
              Provide digital solutions to enterprises through technology
            </BoxTextContainer>
          </Box>
        </BoxContainer>
      </AboutContainer>
    </Layout>
  )
}

export default AboutUs
