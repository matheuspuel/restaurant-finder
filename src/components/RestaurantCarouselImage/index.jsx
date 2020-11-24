import React, {useEffect, useState} from 'react';
import {Card, Title} from "./styles";
import Skeleton from "../Skeleton";

function RestaurantCarouselImage({name, image}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image()
    imageLoader.src = image
    imageLoader.onload = () => setImageLoaded(true)
  }, [image]);


  return !imageLoaded ? <Skeleton width='90px' height='90px'/> : (
    <Card image={image}>
      <Title>{name}</Title>
    </Card>
  );
}

export default RestaurantCarouselImage;