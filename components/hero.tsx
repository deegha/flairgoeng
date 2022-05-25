import styled from 'styled-components'
import Image from 'next/image'
import heroRight from 'assets/heroRight.svg'
import { H1, Arrow } from 'components'
import React from 'react'

const HeroContainer = styled.div`
  display: flex;
  padding-top: 13.625rem;
  justify-content: space-between;
`

const LeftContainer = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.color.text};
`

const HeaderContainer = styled.div`
  width: 80%;
`

const LeftBottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const BottomRight = styled.div`
  position: relative;
  width: 55%;
`

const IntroTextContainer = styled.div`
  width: 100%;
  position: absolute;
  top: -3.9rem;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;

  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
`

const ArrowBtnContainer = styled.div`
  padding-top: 4rem;
  padding-right: 8rem;
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
              We are React Native community-trusted, extremely skilled Javascript developers ready
              for hire for your next React Native and React project
            </IntroTextContainer>
          </BottomRight>
        </LeftBottomContainer>
      </LeftContainer>

      <Image layout="fixed" src={heroRight} alt="Computer" priority />
    </HeroContainer>
  )
}
