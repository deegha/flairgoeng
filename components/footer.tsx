import styled from 'styled-components'
import { Logo, H3, H5 } from 'components'
import Image from 'next/image'
import upArrow from 'assets/upArrow.svg'
import { devices } from 'themes/devices'

const FooterContainer = styled.div`
  padding-top: 9.625rem;
`

const OuterContainer = styled.div`
  display: flex;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  color: ${({ theme }) => theme.color.text};
  width: 50%;

  @media ${devices.tablet} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const TextContainer = styled.div`
  padding-top: 2rem;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`
const RightContainer = styled.div`
  width: 50%;

  @media ${devices.tablet} {
    width: 100%;
  }
`

const BtnTextContainer = styled.div`
  color: ${({ theme }) => theme.color.text};
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding-top: 2rem;
`

const LeftTop = styled.div`
  padding-top: 9.125rem;
`

const LeftBottom = styled.div`
  padding-top: 8.313rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const RightTop = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${devices.tablet} {
    display: none;
  }
`

const RightBottom = styled.div`
  display: flex;
  padding-top: 6.25rem;
  justify-content: flex-end;
  gap: 4rem;

  @media ${devices.tablet} {
    justify-content: space-between;
    gap: none;
  }
`

const ItemHeading = styled.div`
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.color.textAlt};
`

const ItemText = styled.div`
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.text};
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${devices.tablet} {
    align-items: flex-start;
  }
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  padding-top: 0.625rem;
  line-height: 2rem;
  margin: 10.125rem 0;
  border-top: 1px solid ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.gray};
  font-feature-settings: 'salt' on, 'ss01' on, 'cv01' on;
`

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <OuterContainer>
        <LeftContainer>
          <LeftTop>
            <Logo width={'9.61rem'} />
            <TextContainer>
              Feel free to reach out if you want to collaborate
              <br /> with us, or simply to have a chat.
            </TextContainer>
          </LeftTop>
          <LeftBottom>
            <H3>hello@flairgolabs.com</H3>
          </LeftBottom>
        </LeftContainer>
        <RightContainer>
          <RightTop>
            <ButtonContainer>
              <Image layout="fixed" src={upArrow} alt="Up Arrow"></Image>
              <BtnTextContainer>
                <H5>Back to top</H5>
              </BtnTextContainer>
            </ButtonContainer>
          </RightTop>

          <RightBottom>
            <Item>
              <ItemHeading>
                <H5>Contact</H5>
              </ItemHeading>
              <ItemText>+74513645222</ItemText>
            </Item>

            <Item>
              <ItemHeading>
                <H5>Socials</H5>
              </ItemHeading>
              <ItemText>
                <a href="">LinkedIn</a>
              </ItemText>
              <ItemText>
                <a href="">Twitter</a>
              </ItemText>
            </Item>

            <Item>
              <ItemHeading>
                <H5>Location</H5>
              </ItemHeading>
              <ItemText>14 Sir Baron</ItemText>
              <ItemText>Jayatilaka Mawatha</ItemText>
              <ItemText>Colombo</ItemText>
            </Item>
          </RightBottom>
        </RightContainer>
      </OuterContainer>
      <BottomContainer>
        <div>©2021 Flairgo Labs, All right reserved</div>
        <div>Desinged by CHEFUX LABS | Build by FLAIRGOLABS</div>
      </BottomContainer>
    </FooterContainer>
  )
}
