import styled, { keyframes } from 'styled-components'
import holo from 'assets/hologram.svg'
import Image from 'next/image'

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

// const bounse = keyframes`
//   0% {
//     transform: translateY(0);

//   }

//   50% {
//     transform: translateY(10px);

//   }

//   100% {
//     transform: translateY(0);

//   }
// `

const HoloItemContainer = styled.div<{ appear: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-item: center;
  animation-name: ${slideIn};
  animation-duration: 0.7s;
  position: relative;
  left: 70.37%;
  right: 7.01%;
  top: 5.64%;
  bottom: 86.2%;
  width: 18px;

  img {
    width: 100%;
  }

  background: linear-gradient(
    90deg,
    #c0bff6 -0.04%,
    #c5c4f7 28.98%,
    #d3d2f9 64.01%,
    #e9e9fd 100.04%
  );
`

const HoloBottom = styled.div``

// const HoloTop = styled.div`
//   height: 150px;

//   width: 165px;

//   background: url(https://res.cloudinary.com/duqpgdc9v/image/upload/w_160/v1653128539/flairgo/kindpng_1139421.png);
//   background-size: cover;
//   background-repeat: no-repeat;

//   animation-name: ${slideIn};

//   animation-duration: 0.7s;

//   animation-name: ${bounse};
//   animation-delay: 0.2s;
//   animation-duration: 1.8s;
//   animation-iteration-count: infinite;
// `

export const Hologram: React.FunctionComponent<IProps> = ({ appear }) => {
  return (
    <HoloItemContainer appear={appear}>
      <HoloBottom>
        <Image src={holo} alt="hologram" />
      </HoloBottom>
    </HoloItemContainer>
  )
}
