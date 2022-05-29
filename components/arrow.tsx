import styled from 'styled-components'
import Image from 'next/image'
import arrowDown from 'assets/arrowDown.svg'
import { devices } from 'themes/devices'

const ArrowContainer = styled.div`
  border-radius: 50%;
  width: 11.5rem;
  height: 11.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  background-color: ${({ theme }) => theme.color.light};
  cursor: pointer;
  &: hover {
    transform: scale(1.04);
  }

  @media ${devices.tablet} {
    width: 6.25rem;
    height: 6.25rem;
    span {
      height: 50px !important;
    }
  }
`

export const Arrow: React.FC = () => {
  const scroll = (url: string) => {
    const section = document.querySelector(`#${url}`)
    if (!section) return
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ArrowContainer onClick={() => scroll('services')}>
      <Image layout="fixed" src={arrowDown} alt="Navigate Next Section" />
    </ArrowContainer>
  )
}
