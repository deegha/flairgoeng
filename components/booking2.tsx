import styled from 'styled-components'
import Image from 'next/image'
import reactNative from 'assets/reactNative.svg'
import react from 'assets/react.svg'
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
  padding-right: 14.375rem;
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
  padding-top: 2rem;
  padding-bottom: 3.625rem;
`

const BookingLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  border: 3px solid ${({ theme }) => theme.color.primary};
`

const BookingLogoText = styled.div`
  color: ${({ theme }) => theme.color.text};
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

export const Booking2: React.FC = () => {
  return (
    <BookingContainer>
      <LeftContainer>
        <BookingLogo image={reactNative} text="React Native"></BookingLogo>
        <BookingLogo image={react} text="React.js"></BookingLogo>
      </LeftContainer>
      <RightContainer>
        <H1>Turn your product into a great one.</H1>
        <RightTextContainer>
          Do contact us anytime to discuss your company’s digital
          transformation. We look forward to ensuring your continued growth and
          success.
        </RightTextContainer>
        <Button type="primary" onClick={() => console.log('Hello')}>
          BOOK A CONSULTATION
        </Button>
      </RightContainer>
    </BookingContainer>
  )
}
