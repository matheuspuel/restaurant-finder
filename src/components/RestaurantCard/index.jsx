import React from 'react';
import {
  Restaurant,
  RestaurantAddress,
  RestaurantImage,
  RestaurantInfo,
  RestaurantTitle
} from "./styles";
import ReactStars from "react-rating-stars-component";

function RestaurantCard({name, stars, address, image}) {
  return (
    <Restaurant>
      <RestaurantInfo>
        <RestaurantTitle>{name}</RestaurantTitle>
        <ReactStars count={5} value={stars} isHalf edit={false} activeColor='#e7711c'/>
        <RestaurantAddress>{address}</RestaurantAddress>
      </RestaurantInfo>
      <RestaurantImage src={image} alt={"Restaurant's photo"}/>
    </Restaurant>
  );
}

export default RestaurantCard;