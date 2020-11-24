import React from 'react';
import styled, {keyframes} from 'styled-components'

const KeyFrameLoading = keyframes`
  0%{
    opacity: 0.5;
  }
  100%{
  opacity: 1;
  }
`

const LoadingSkeleton = styled.div`
  background-color: lightgray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${({width}) => width};
  height: ${({height}) => height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`

function Skeleton({width, height}) {
  return (
    <LoadingSkeleton width={width} height={height}/>
  );
}

export default Skeleton;