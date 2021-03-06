import { ServiceItem, scroll } from 'components'
import styled from 'styled-components'
import { useApp } from 'context'
import { devices } from 'themes/devices'
import { TType } from './serviceItem'

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;

  @media ${devices.tablet} {
    flex-direction: column;
    margin: 16.5rem 0;
  }
`

const ServicesContainer = styled.div``

const NeonLight = styled.div`
  position: absolute;
  width: 448px;
  height: 480px;
  left: 28%;
  top: 1308px;
  border-radius: 50%;

  background: radial-gradient(
    circle at 50% 50%,
    rgba(58, 54, 255, 1),
    rgba(58, 54, 255, 0)
  );
  filter: blur(100px);
  opacity: 0.6;
`

export const Services: React.FC = () => {
  const { setService, selectedService } = useApp()
  const handleSelectService = (selectedService: TType) => {
    setService(selectedService)
    scroll('process')
  }
  return (
    <ServicesContainer id="services">
      <NeonLight />
      <ItemContainer>
        <ServiceItem
          id="mobile"
          select={handleSelectService}
          selected={selectedService}
          title="Cross Platform Mobile Applications"
          content="Build one app that runs on every platform. With a native feeling. Deliver mobile solutions with less effort by using reusable components"
        />
        <ServiceItem
          id="web"
          select={handleSelectService}
          selected={selectedService}
          title="Web App Development"
          content="Build fast performing web apps, Deliver web solutions with less effort by using reusable components"
        />
        <ServiceItem
          id="consultancy"
          select={handleSelectService}
          selected={selectedService}
          title="Front-End Consultancy"
          content="Build fast performing web apps, Deliver web solutions with less effort by using reusable components."
        />
      </ItemContainer>
    </ServicesContainer>
  )
}
