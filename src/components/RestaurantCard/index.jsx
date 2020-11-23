import React from 'react';
import {
  Restaurant,
  RestaurantAddress,
  RestaurantImage,
  RestaurantInfo,
  RestaurantTitle
} from "./styles";
import ReactStars from "react-rating-stars-component";

function RestaurantCard({restaurant, onClick}) {
  const {name, rating, vicinity, address, photos} = restaurant

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <RestaurantTitle>{name}</RestaurantTitle>
        <ReactStars count={5} value={rating} isHalf edit={false} activeColor='#e7711c'/>
        <RestaurantAddress>{vicinity || address}</RestaurantAddress>
      </RestaurantInfo>
      <RestaurantImage src={photos && photos[0].getUrl()} alt={"Restaurant's photo"}/>
    </Restaurant>
  );
}

export default RestaurantCard;