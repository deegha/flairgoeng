import { Process1, Process3 } from 'components'
import { useApp } from 'context'
import styled from 'styled-components'
import { devices } from 'themes/devices'

const TitleContainer = styled.h1`
  margin: 0;
  padding-bottom: 19.75rem;
  font-family: 'Questrial', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15rem;
  line-height: 21.625rem;
  text-align: center;
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.color.text};

  @media ${devices.tablet} {
    font-size: 5.25rem;
    line-height: 7rem;
  }
`

const NeonLight1 = styled.div`
  position: absolute;
  width: 448px;
  height: 480px;
  left: 18%;
  top: 277px;
  border-radius: 50%;

  background: radial-gradient(
    circle at 50% 50%,
    rgba(131, 55, 255, 1),
    rgba(131, 55, 255, 0)
  );
  filter: blur(200px);
  opacity: 0.6;

  @media ${devices.tablet} {
    width: 300px;
    height: 300px;

    left: 9%;
    top: 94px;
  }
`

const NeonLight2 = styled.div`
  position: absolute;
  width: 820.73px;
  height: 820.73px;
  left: 50%;
  top: -83px;

  background: radial-gradient(
    circle at 50% 50%,
    rgba(58, 54, 255, 1),
    rgba(58, 54, 255, 0)
  );
  filter: blur(200px);
  opacity: 0.6;

  @media ${devices.tablet} {
    width: 387px;
    height: 387px;

    left: 46%;
    top: -192px;
  }
`

const Container = styled.div`
  position: relative;
`

export const Processes: React.FC = () => {
  const { selectedService } = useApp()

  const getProcess = () => {
    switch (selectedService) {
      case 'web':
        return <Process1 />
        break
      case 'mobile':
        return <Process1 />
        break
      case 'consultancy':
        return <Process3 />
        break
      default:
        return <Process1 />
    }
  }

  return (
    <Container>
      <TitleContainer>
        OUR
        <br />
        PROCESS
      </TitleContainer>
      <div id="process" />
      {getProcess()}
      <NeonLight1 />
      <NeonLight2 />
    </Container>
  )
}
