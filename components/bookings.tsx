import { useApp } from 'context'
import { Booking1, Booking2 } from 'components'
import styled from 'styled-components'

const BookingContainer = styled.div`
  padding-top: 25rem;
`

export const Bookings: React.FC = () => {
  const { selectedService } = useApp()

  const getBooking = () => {
    switch (selectedService) {
      case 'web':
        return <Booking1 />
        break
      case 'mobile':
        return <Booking1 />
        break
      case 'consultancy':
        return <Booking2 />
        break
      default:
        return <Booking1 />
    }
  }

  return <BookingContainer>{getBooking()}</BookingContainer>
}
