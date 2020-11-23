import React, {useState} from 'react';
import logo from 'assets/logo.svg'
import restaurant from 'assets/fake-restaurant.png'
import {
  SideBar,
  Logo,
  Search,
  Container,
  CarouselTitle,
  Carousel,
} from "./styles";
import TextField, {Input} from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon";
import {Map, RestaurantCard, RestaurantCarouselImage} from "components";

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
}

function Home(props) {
  const [searchString, setSearchString] = useState('')
  const [query, setQuery] = useState(null)

  function handleKeyPress({key}) {
    if (key === 'Enter') {
      setQuery(searchString)
    }
  }

  return (
    <Container>
      <SideBar>
        <Search>
          <Logo src={logo} alt="Restaurant's Logo"/>
          <TextField
            label="Search Restaurants"
            outlined
            trailingIcon={<MaterialIcon role='button' icon='search'/>}
          >
            <Input
              value={searchString}
              onChange={e => setSearchString(e.currentTarget.value)}
              onKeyPress={handleKeyPress}
            />
          </TextField>
          <CarouselTitle>Near you</CarouselTitle>
          <Carousel {...carouselSettings}>
            <RestaurantCarouselImage
              name="Restaurant's name"
              image={restaurant}
            />
            <RestaurantCarouselImage
              name="Restaurant's name"
              image={restaurant}
            />
            <RestaurantCarouselImage
              name="Restaurant's name"
              image={restaurant}
            />
            <RestaurantCarouselImage
              name="Restaurant's name"
              image={restaurant}
            />
            <RestaurantCarouselImage
              name="Restaurant's name"
              image={restaurant}
            />
            <RestaurantCarouselImage
              name="Restaurant's name"
              image={restaurant}
            />
          </Carousel>
          <RestaurantCard
            name="Restaurant's name"
            stars={4}
            address="Restaurants address"
            image={restaurant}
          />
        </Search>
      </SideBar>
      <Map query={query}/>
    </Container>
  );
}

export default Home;