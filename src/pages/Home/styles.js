import styled from 'styled-components';
import Slider from 'react-slick'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const SideBar = styled.aside`
  background-color: ${props => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background-color: white;
`

export const Logo = styled.img`
  margin-bottom: 15px;
`

export const Map = styled.div`
  background-color: lightgreen;
  width: 100%;
`

export const CarouselTitle = styled.h1`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`

export const Carousel = styled(Slider)`
  .slick-slide{
    margin-right: 12px;
  }
`

export const Card = styled.div`
  width: 90px;
  height: 90px;
  padding: 4px;
  border-radius: 6px;
  background-image: url(${props => props.image});
  background-size: cover;
`

export const CardTitle = styled.span`
  font-family: ${props=> props.theme.fonts.regular};
  color: white;
  font-size: 12px;
  margin-top: 10px;
`


