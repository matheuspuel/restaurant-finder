import React from 'react';
import {Card, Title} from "./styles";

function RestaurantCarouselImage({name, image}) {
  return (
    <Card image={image}>
      <Title>{name}</Title>
    </Card>
  );
}

export default RestaurantCarouselImage;