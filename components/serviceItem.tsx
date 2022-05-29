import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
export type TType = 'mobile' | 'web' | 'consultancy'
import { devices } from 'themes/devices'

interface IProps {
  select: (key: TType) => void
  selected: TType
  id: TType
  title: string
  content: string
}

const slideIn = keyframes`
  0% {
    transform: translateY(130px);
    opacity: 0;
  }

  100% {
    transform: translateY(0;
    opacity: 1;
  }
`

const ServiceItemContainer = styled.div<{ selected: boolean }>`
  transition: outline 0.3s ease-out;
  cursor: pointer;
  margin: 14.5rem 0;
  width: 32%;
  height: 50rem;
  backdrop-filter: blur(6.25rem);
  border-radius: 0.75rem;
  ${({ selected }) => selected && `outline: 4px solid #3A36FF;`}
  background: rgba(255, 255, 255, 0.04);
  padding: 3.813rem;
  overflow: hidden;

  display: flex;

  flex-direction: column;

  &:hover {
    h2 {
      transform: translateY(-150px);
    }
  }

  @media ${devices.tablet} {
    width: 100%;
    height: 100%;
    margin: 1.5rem 0;

    &:hover {
      h2 {
        transform: translateY(0px);
      }
    }
  }
`

const ItemHeader = styled.h2`
  font-family: 'RocGrotesk', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 5.5rem;
  position: relative;
  top: 150px;
  color: ${({ theme }) => theme.color.text};
  transition: transform 0.3s ease-out;
  margin-bottom: 0;

  @media ${devices.laptopL} {
    font-size: 3rem;
  }

  @media ${devices.tablet} {
    top: 0px;
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 2rem;
  }
`

const ItemContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;

  animation-name: ${slideIn};
  animation-duration: 0.7s;
  color: ${({ theme }) => theme.color.text};
  margin: 0;
  width: 90%;

  @media ${devices.laptopL} {
    font-size: 1.8rem;
  }

  @media ${devices.tablet} {
    display: none;
  }
`

const ItemContentTablet = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  display: none;
  line-height: 2rem;

  color: ${({ theme }) => theme.color.text};
  margin: 0;
  width: 100%;

  @media ${devices.tablet} {
    display: block;
  }
`

export const ServiceItem: React.FunctionComponent<IProps> = ({
  select,
  selected,
  id,
  title,
  content,
}) => {
  const [showConten, setShowContent] = useState<boolean>(false)

  return (
    <ServiceItemContainer
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
      selected={selected === id}
      onClick={() => select(id)}
    >
      <ItemHeader>{title}</ItemHeader>
      {showConten && <ItemContent>{content}</ItemContent>}
      <ItemContentTablet>{content}</ItemContentTablet>
    </ServiceItemContainer>
  )
}
