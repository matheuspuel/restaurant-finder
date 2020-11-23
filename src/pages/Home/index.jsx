import React, {useState} from 'react';
import {useSelector} from "react-redux";
import logo from 'assets/logo.svg'
import {
  SideBar,
  Logo,
  Search,
  Container,
  CarouselTitle,
  Carousel,
} from "./styles";
import {Map, RestaurantCard, RestaurantCarouselImage} from "components";
import SearchField from "../../components/SearchField";

const carouselSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
}

function Home(props) {
  const [query, setQuery] = useState(null)
  const {restaurants} = useSelector(store => store.restaurants)

  return (
    <Container>
      <SideBar>
        <Search>
          <Logo src={logo} alt="Restaurant's Logo"/>
          <SearchField setQuery={setQuery}/>
          <CarouselTitle>Near you</CarouselTitle>
          <Carousel {...carouselSettings}>
            {restaurants.map(({place_id, name, photos}) => (
              <RestaurantCarouselImage
                key={place_id}
                name={name}
                image={photos && photos[0].getUrl()}
              />
            ))}
          </Carousel>
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.place_id} restaurant={restaurant}/>
          ))}
        </Search>
      </SideBar>
      <Map query={query}/>
    </Container>
  );
}

export default Home;