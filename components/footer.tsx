import styled from 'styled-components'
import { Logo, H5, scroll } from 'components'
import Image from 'next/image'
import upArrow from 'assets/upArrow.svg'
import { devices } from 'themes/devices'
// import sideArrow from 'assets/sideArrow.svg'

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
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
// const SideArrowContainer = styled.div`
//   cursor: pointer;
//   transition: transform 0.5s;
//   transition-timing-function: ease-out;
//   &:hover {
//     transform: translateX(10px);
//   }
// `

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
  position: relative;
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
`

const FooterH3 = styled.h3`
  font-size: 2rem;

  @media ${devices.tablet} {
    font-size: 1rem;
  }
`

const NeonLight = styled.div`
  position: absolute;
  width: 471.26px;
  height: 471.26px;
  left: -274px;
  top: -132px;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(58, 54, 255, 1),
    rgba(58, 54, 255, 0)
  );
  -webkit-filter: blur(200px);
  filter: blur(150px);
  opacity: 0.6;
  display: none;

  @media ${devices.tablet} {
    display: block;
  }
`

const NeonLight2 = styled.div`
  position: absolute;
  width: 234.27px;
  height: 234.27px;
  left: 0;
  top: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(131, 55, 255, 1),
    rgba(131, 55, 255, 0)
  );
  -webkit-filter: blur(200px);
  filter: blur(150px);
  opacity: 0.6;
  display: none;

  @media ${devices.tablet} {
    display: block;
  }
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
            <FooterH3>team@flairgolabs.com</FooterH3>
            <NeonLight />
          </LeftBottom>
        </LeftContainer>
        <RightContainer>
          <RightTop>
            <ButtonContainer>
              <Image layout="fixed" src={upArrow} alt="Up Arrow"></Image>
              <BtnTextContainer onClick={() => scroll('hero')}>
                <H5>Back to top</H5>
              </BtnTextContainer>
            </ButtonContainer>
          </RightTop>

          <RightBottom>
            <Item>
              <ItemHeading>
                <H5>Contact</H5>
              </ItemHeading>
              <NeonLight2 />
              <ItemText>+74513645222</ItemText>
            </Item>

            <Item>
              <ItemHeading>
                <H5>Socials</H5>
              </ItemHeading>
              <ItemText>
                <a
                  href="https://www.linkedin.com/company/flairgo-labs"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </ItemText>
              <ItemText>
                <a
                  href="https://twitter.com/flairgolabs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
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
        <div>Desinged by CHEFUX LABS | Built by FLAIRGO LABS</div>
      </BottomContainer>
    </FooterContainer>
  )
}
