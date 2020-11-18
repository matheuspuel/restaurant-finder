import React, {useState} from 'react';
import logo from 'assets/logo.svg'
import restaurant from 'assets/fake-restaurant.png'
import {SideBar, Logo, Search, Container, Map, CarouselTitle, Card, Carousel, CardTitle} from "./styles";
import TextField, {Input} from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon";

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
            />
          </TextField>
          <CarouselTitle>Near you</CarouselTitle>
          <Carousel {...carouselSettings}>
            <Card image={restaurant}>
              <CardTitle>Restaurant's name</CardTitle>
            </Card>
            <Card image={restaurant}>
              <CardTitle>Restaurant's name</CardTitle>
            </Card>
            <Card image={restaurant}>
              <CardTitle>Restaurant's name</CardTitle>
            </Card>
            <Card image={restaurant}>
              <CardTitle>Restaurant's name</CardTitle>
            </Card>
            <Card image={restaurant}>
              <CardTitle>Restaurant's name</CardTitle>
            </Card>
            <Card image={restaurant}>
              <CardTitle>Restaurant's name</CardTitle>
            </Card>
          </Carousel>
        </Search>
      </SideBar>
      <Map/>
    </Container>
  );
}

export default Home;