import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: white;
  border-left: 5px solid transparent;
  :hover{
    border-left-color: ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.background};
  }
`

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const RestaurantTitle = styled.span`
  font-family: ${({theme})=>theme.fonts.regular};
  color: ${({theme})=>theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`
export const RestaurantAddress = styled.span`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme})=>theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const RestaurantImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`