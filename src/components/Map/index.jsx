import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";
import {setRestaurants, setSelectedRestaurant} from "redux/modules/restaurants";

function MapContainer({google, query, placeId}) {
  const dispatch = useDispatch()
  const {restaurants} = useSelector(state => state.restaurants)
  const [map, setMap] = useState(null)

  useEffect(() => {
    if (query) {
      searchByQuery(query)
    }
  }, [query])

  useEffect(() => {
    if (placeId) {
      getRestaurantById(placeId)
    }
  }, [placeId])

  function searchNearby(map) {
    dispatch(setRestaurants([]))
    const service = new google.maps.places.PlacesService(map)
    const request = {
      location: map.center,
      radius: '1000',
      type: ['restaurant'],
    }

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results))
      }
    })
  }

  function searchByQuery(query) {
    dispatch(setRestaurants([]))
    const service = new google.maps.places.PlacesService(map)
    const request = {
      location: map.center,
      radius: '1000',
      type: ['restaurant'],
      query,
    }

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results))
      }
    })
  }

  function getRestaurantById(placeId) {
    dispatch(setSelectedRestaurant(null))
    const service = new google.maps.places.PlacesService(map)
    const request = {
      placeId,
      fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
    }

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setSelectedRestaurant(place))
      }
    })
  }

  function onMapReady(_, map) {
    setMap(map)
    searchNearby(map)
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
    >
      {restaurants.map(({place_id, name, geometry}) => (
        <Marker
          key={place_id}
          name={name}
          position={{
            lat: geometry.location.lat(),
            lng: geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);