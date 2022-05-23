import styled, { keyframes } from 'styled-components'

interface IProps {
  appear: boolean
}

const slideIn = keyframes`
  0% {
    transform: translateY(30px);
    opacity: 0;
  }

  40% {
    transform: translateY(20px);
    opacity: 0.1;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const bounse = keyframes`
  0% {
    transform: translateY(0);
  
  }

  50% {
    transform: translateY(10px);
  
  }

  100% {
    transform: translateY(0);
  
  }
`

const HoloItemContainer = styled.div<{ appear: boolean }>`
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-item: center;
  animation-name: ${slideIn};
  animation-duration: 0.7s;
`

const HoloBottom = styled.div`
  height: 200px;
  background: #ffffff;
  width: 100%;
  background: url(https://res.cloudinary.com/duqpgdc9v/image/upload/w_160/v1653128438/flairgo/Pngtree_holographic_projection_5619430.png);
  background-size: contain;
  background-repeat: no-repeat;
`

const HoloTop = styled.div`
  height: 150px;

  width: 165px;

  background: url(https://res.cloudinary.com/duqpgdc9v/image/upload/w_160/v1653128539/flairgo/kindpng_1139421.png);
  background-size: cover;
  background-repeat: no-repeat;

  animation-name: ${slideIn};

  animation-duration: 0.7s;

  animation-name: ${bounse};
  animation-delay: 0.2s;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
`

export const HoloItem: React.FunctionComponent<IProps> = ({ appear }) => {
  return (
    <HoloItemContainer appear={appear}>
      <HoloTop />
      <HoloBottom />
    </HoloItemContainer>
  )
}
