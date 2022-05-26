import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useApp, TDevice } from 'context'
export type TType = 'mobile' | 'web' | 'consultancy'

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

const ServiceItemContainer = styled.div<{ selected: boolean; device: TDevice }>`
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
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ device }) =>
    device === 'smallDesktop' &&
    `
    padding: 4rem 1.813rem;
    
    height: 40rem;
  `}

  &:hover {
    h2 {
      transform: translateY(-70px);
    }
  }
`

const ItemHeader = styled.h2<{ device: TDevice }>`
  font-family: 'RocGrotesk', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 5.5rem;
  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
  color: ${({ theme }) => theme.color.text};
  transition: transform 0.3s ease-out;
  margin-bottom: 0;
  ${({ device }) =>
    device === 'smallDesktop' &&
    `
  font-size: 3.8rem;
  
`}
`

const ItemContent = styled.p<{ device: TDevice }>`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;

  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
  animation-name: ${slideIn};
  animation-duration: 0.7s;
  color: ${({ theme }) => theme.color.text};
  margin: 0;
  width: 90%;

  ${({ device }) =>
    device === 'smallDesktop' &&
    `
  font-size: 1.5rem;
  `}
`

export const ServiceItem: React.FunctionComponent<IProps> = ({
  select,
  selected,
  id,
  title,
  content,
}) => {
  const [showConten, setShowContent] = useState<boolean>(false)
  const { device } = useApp()
  console.log(device)
  return (
    <ServiceItemContainer
      device={device}
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
      selected={selected === id}
      onClick={() => select(id)}
    >
      <ItemHeader device={device}>{title}</ItemHeader>
      {showConten && <ItemContent device={device}>{content}</ItemContent>}
    </ServiceItemContainer>
  )
}
