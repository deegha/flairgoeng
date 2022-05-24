import styled from 'styled-components'
import Image from 'next/image'
import arrowDown from 'assets/arrowDown.svg'

const ArrowContainer = styled.div`
  border-radius: 50%;
  width: 12.5rem;
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  background-color: ${({ theme }) => theme.color.light};

  &: hover {
    transform: scale(1.04);
  }
`

export const Arrow: React.FC = () => {
  return (
    <ArrowContainer>
      <Image layout="fixed" src={arrowDown} alt="Navigate Next Section" />
    </ArrowContainer>
  )
}
