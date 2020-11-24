import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'assets/restaurants-loading.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings:{
    preserveAspectRatio: 'xMidYMid slice',
  },
}

function Loader(props) {
  return (
    <Lottie options={defaultOptions} />
  );
}

export default Loader;