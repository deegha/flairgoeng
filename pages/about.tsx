import type { NextPage } from 'next'
import { Layout, BoldTitle, Header3, Header4 } from 'components'
import styled from 'styled-components'

const AboutContainer = styled.div`
  padding: 2rem;
  width: 65%;
`

const HeadingContainer = styled(BoldTitle)`
  margin-top: 8.9%;
`

const Box = styled.div`
  width: 26.25rem;
  height: 21.875rem;
  border: 1px solid ${({ theme }) => theme.color.light};
`

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10.25rem;
  margin-top: 4rem;
  width: 100%;
  justify-content: space-around;
`

const BoxTopicContainer = styled(Header3)`
  display: flex;
  justify-content: center;
  margin-top: 1.125rem;
  margin-bottom: 2rem;
`

const BoxTextContainer = styled(Header4)`
  text-align: justify;
  padding-left: 3.375rem;
  padding-right: 3.375rem;
`

const AboutUs: NextPage = () => {
  return (
    <Layout title="Flairgo | about us" metaContent="" metaDiscription="">
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
