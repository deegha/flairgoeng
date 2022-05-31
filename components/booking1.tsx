import styled from 'styled-components'
import Image from 'next/image'
import php from 'assets/php.svg'
import node from 'assets/nodejs.svg'
import reactNative from 'assets/reactNative.svg'
import react from 'assets/react.svg'
import next from 'assets/nextJs.svg'
import vue from 'assets/vue.svg'
import express from 'assets/express.svg'
import firebase from 'assets/firebase.svg'
import { H1, Button } from 'components'

const BookingContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15.75rem;
`

const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  row-gap: 6.25rem;
  padding-right: 12.5rem;
  justify-content: space-between;
`

const RightContainer = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.color.text};
`

const RightTextContainer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;
  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
  padding-top: 2rem;
  padding-bottom: 3.625rem;
`

const BookingLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BookingLogoText = styled.div`
  color: ${({ theme }) => theme.color.text};
  padding-top: 2.5rem;
  padding-top: 2.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 3.25rem;
`

interface IBookingLogoProp {
  image: string
  text: string
}

const BookingLogo: React.FC<IBookingLogoProp> = ({ image, text }) => {
  return (
    <BookingLogoContainer>
      <Image layout="fixed" src={image} alt={text} />
      <BookingLogoText>{text}</BookingLogoText>
    </BookingLogoContainer>
  )
}

export const Booking1: React.FC = () => {
  return (
    <BookingContainer>
      <LeftContainer>
        <BookingLogo image={php} text="PHP"></BookingLogo>
        <BookingLogo image={node} text="Node.js"></BookingLogo>
        <BookingLogo image={reactNative} text="React Native"></BookingLogo>
        <BookingLogo image={react} text="React.js"></BookingLogo>
        <BookingLogo image={next} text="Next.js"></BookingLogo>
        <BookingLogo image={vue} text="Vue.js"></BookingLogo>
        <BookingLogo image={express} text="Express.js"></BookingLogo>
        <BookingLogo image={firebase} text="Firebase"></BookingLogo>
      </LeftContainer>
      <RightContainer>
        <H1>Turn your product into a great one.</H1>
        <RightTextContainer>
          Do contact us anytime to discuss your company’s digital
          transformation. We look forward to ensuring your continued growth and
          success.
        </RightTextContainer>
        <Button
          type="primary"
          onClick={() => {
            window.open('https://calendly.com/flairgolabs/30min', '_blank')
          }}
        >
          HIRE US
        </Button>
      </RightContainer>
    </BookingContainer>
  )
}
