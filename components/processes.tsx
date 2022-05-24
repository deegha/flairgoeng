import { Process1, Process3 } from 'components'
import { useApp } from 'context'
import styled from 'styled-components'

const TitleContainer = styled.h1`
  margin: 0;
  padding-bottom: 19.75rem;
  font-family: 'RocGrotesk', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15rem;
  line-height: 21.625rem;
  text-align: center;
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.color.text};
`

const NeonLight1 = styled.div`
  position: absolute;
  width: 448px;
  height: 480px;
  left: 18%;
  top: 2500px;
  border-radius: 50%;

  background: radial-gradient(circle at 50% 50%, rgba(58, 54, 255, 1), rgba(58, 54, 255, 0));
  filter: blur(100px);
  opacity: 0.6;
`

const NeonLight2 = styled.div`
  position: absolute;
  width: 820.73px;
  height: 820.73px;
  left: 50%;
  top: 1900px;
  border-radius: 50%;

  background: radial-gradient(circle at 50% 50%, rgba(58, 54, 255, 1), rgba(58, 54, 255, 0));
  filter: blur(100px);
  opacity: 0.6;
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
    <div>
      <TitleContainer>
        OUR
        <br />
        PROCESS
      </TitleContainer>
      {getProcess()}
      <NeonLight1 />
      <NeonLight2 />
    </div>
  )
}
