import styled from 'styled-components'
import Image from 'next/image'
import heroRight from 'assets/heroRight.svg'
import { H4, H1, Arrow } from 'components'
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
  top: -6rem;
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
              <H4>
                We are React Native community-trusted, extremely skilled Javascript developers ready
                for hire for your next React Native and React project
              </H4>
            </IntroTextContainer>
          </BottomRight>
        </LeftBottomContainer>
      </LeftContainer>

      <Image layout="fixed" src={heroRight} alt="Computer" priority />
    </HeroContainer>
  )
}
