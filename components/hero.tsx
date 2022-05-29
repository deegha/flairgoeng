import styled from 'styled-components'
import Image from 'next/image'
import heroRight from 'assets/heroRight.svg'
import { H1, Arrow } from 'components'
import React from 'react'
import { devices } from 'themes/devices'

const HeroContainer = styled.div`
  display: flex;
  padding-top: 13.625rem;
  justify-content: space-between;

  @media ${devices.tablet} {
    padding-top: 8.625rem;
  }
`

const LeftContainer = styled.div`
  width: 70%;
  color: ${({ theme }) => theme.color.text};
`

const HeaderContainer = styled.div`
  width: 80%;

  @media ${devices.tablet} {
    width: 100%;
  }
`

const LeftBottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  @media ${devices.tablet} {
    padding-top: 8rem;
  }
`

const BottomRight = styled.div`
  position: relative;
  width: 55%;

  @media ${devices.tablet} {
    width: 100%;
  }
`

const IntroTextContainer = styled.div`
  width: 100%;
  position: absolute;
  top: -3.9rem;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;

  @media ${devices.laptopL} {
    font-size: 1.5rem;
    top: -0.9rem;
  }

  @media ${devices.tablet} {
    font-size: 1rem;
    line-height: 2rem;
    top: 0;
  }
`

const ArrowBtnContainer = styled.div`
  padding-top: 4rem;
  padding-right: 8rem;

  @media ${devices.laptopL} {
    padding-top: 2rem;
    padding-right: 4rem;
  }

  @media ${devices.tablet} {
    padding-top: 0;
    padding-right: 2rem;
  }
`

const ImageContainer = styled.div`
  span {
    width: 600px !important;
    height: 600px !important;
  }
  @media ${devices.laptopL} {
    span {
      width: 500px !important;
      height: 500px !important;
    }
  }

  @media ${devices.tablet} {
    span {
      width: 12.5rem !important;
      height: 12.5rem !important;
    }
  }
`

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <LeftContainer>
        <HeaderContainer>
          <H1>React and React Native Development Experts</H1>
        </HeaderContainer>
        <LeftBottomContainer>
          <ArrowBtnContainer>
            <Arrow />
          </ArrowBtnContainer>
          <BottomRight>
            <IntroTextContainer>
              We are React Native community-trusted, extremely skilled
              Javascript developers ready for hire for your next React Native
              and React project
            </IntroTextContainer>
          </BottomRight>
        </LeftBottomContainer>
      </LeftContainer>
      <ImageContainer>
        <Image layout="fixed" src={heroRight} alt="Computer" priority />
      </ImageContainer>
    </HeroContainer>
  )
}
