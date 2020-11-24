import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #4f577f7f;
  backdrop-filter: blur(5px);
`

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px);
  width: 500px;
  padding: 24px;
  background-color: white;
  box-shadow: 0 0 32px #4f577f2f;
`
