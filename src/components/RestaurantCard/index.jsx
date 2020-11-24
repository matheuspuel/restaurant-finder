import React, {useState} from 'react';
import {
  Restaurant,
  RestaurantAddress,
  RestaurantImage,
  RestaurantInfo,
  RestaurantTitle
} from "./styles";
import ReactStars from "react-rating-stars-component";
import Skeleton from "../Skeleton";

function RestaurantCard({restaurant, onClick}) {
  const {name, rating, vicinity, address, photos} = restaurant
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <RestaurantTitle>{name}</RestaurantTitle>
        <ReactStars count={5} value={rating} isHalf edit={false} activeColor='#e7711c'/>
        <RestaurantAddress>{vicinity || address}</RestaurantAddress>
      </RestaurantInfo>
      <RestaurantImage
        imageLoaded={imageLoaded}
        src={photos && photos[0].getUrl()}
        alt={"Restaurant's photo"}
        onLoad={() => setImageLoaded(true)}
      />
      {imageLoaded || <Skeleton width='100px' height='100px'/>}
    </Restaurant>
  );
}

export default RestaurantCard;