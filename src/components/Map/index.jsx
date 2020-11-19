import React from 'react';
import {Map, GoogleApiWrapper} from "google-maps-react";

function MapContainer({google}) {
  return (
    <Map google={google} centerAroundCurrentLocation />
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);