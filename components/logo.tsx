import Image from 'next/image'
import flairgoImg from 'assets/flairgoLogo.svg'
import styled from 'styled-components'

interface IProps {
  width: string
}

const ImageContainer = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  max-width: 100%;
  object-fit: contain;
  height: ${(props) => (parseFloat(props.width) * 9.61).toString()}px;
  position: relative;
`

export const Logo = ({ width }: IProps) => {
  return (
    <ImageContainer width={width}>
      <Image layout="fill" src={flairgoImg} alt="Flairgo" />
    </ImageContainer>
  )
}
