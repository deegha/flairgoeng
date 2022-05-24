import styled from 'styled-components'
import { H3, H4, H5 } from 'components'

interface IProp {
  Heading: string
  Subheading: string
  Content: string
}

const OuterContainer = styled.div`
  padding: 6.25rem 8.188rem 6.25rem 4.625rem;
  width: 50%;
  color: ${({ theme }) => theme.color.text};
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(100px);
  &:nth-child(even) {
    align-self:flex-end;
`

export const ProcessItem: React.FC<IProp> = ({ Heading, Subheading, Content }) => {
  return (
    <OuterContainer>
      <div>
        <H3>{Heading}</H3>
        <H4>{Subheading}</H4>
        <H5>{Content}</H5>
      </div>
    </OuterContainer>
  )
}
