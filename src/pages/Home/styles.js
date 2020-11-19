import styled from 'styled-components';
import Slider from 'react-slick'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const SideBar = styled.aside`
  background-color: ${({theme}) => theme.colors.background};
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

export const CarouselTitle = styled.h1`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
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

