import styled from "styled-components";


export const Card = styled.div`
  width: 90px;
  height: 90px;
  padding: 4px;
  border-radius: 6px;
  background-image: url(${({image}) => image});
  background-size: cover;
`

export const Title = styled.span`
  font-family: ${({theme}) => theme.fonts.regular};
  color: white;
  font-size: 12px;
  margin-top: 10px;
`