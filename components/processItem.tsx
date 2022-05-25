import styled from 'styled-components'
import { H3, H4 } from 'components'

interface IProp {
  Heading: string
  Subheading: string
  Content: string
}

const MidContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const OuterContainer = styled.div`
  padding: 6.25rem 8.188rem 6.25rem 4.625rem;
  width: 50%;
  color: ${({ theme }) => theme.color.text};
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(100px);
  &:nth-child(even) {
    align-self:flex-end;
`

const ContentContainer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;

  /* or 133% */
  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
`

export const ProcessItem: React.FC<IProp> = ({ Heading, Subheading, Content }) => {
  return (
    <OuterContainer>
      <div>
        <H3>{Heading}</H3>
        <MidContainer>
          <H4>{Subheading}</H4>
        </MidContainer>
        <ContentContainer>{Content}</ContentContainer>
      </div>
    </OuterContainer>
  )
}
