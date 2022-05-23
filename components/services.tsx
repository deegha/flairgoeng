import { ServiceItem } from 'components'
import styled from 'styled-components'
import { useApp } from 'context'

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const NeonLight = styled.div`
  position: absolute;
  width: 448px;
  height: 480px;
  left: 33%;
  top: 1308px;

  background: #3b37ff;
  filter: blur(500px);
`

export const Services: React.FC = () => {
  const { setService, selectedService } = useApp()
  return (
    <ServicesContainer>
      <NeonLight />
      <ServiceItem
        id="mobile"
        select={setService}
        selected={selectedService}
        title="Cross Platform Mobile Applications"
        content="Build one app that runs on every platform. With a native feeling. Deliver mobile solutions with less effort by using reusable components"
      />
      <ServiceItem
        id="web"
        select={setService}
        selected={selectedService}
        title="Web App Development"
        content="Build fast performing web apps, Deliver web solutions with less effort by using reusable components"
      />
      <ServiceItem
        id="consultancy"
        select={setService}
        selected={selectedService}
        title="Front-End Consultancy"
        content="Build fast performing web apps, Deliver web solutions with less effort by using reusable components."
      />
    </ServicesContainer>
  )
}
