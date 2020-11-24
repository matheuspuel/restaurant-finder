import React, {useState} from 'react';
import {useSelector} from "react-redux";
import logo from 'assets/logo.svg'
import {
  SideBar,
  Logo,
  Search,
  Container,
  CarouselTitle,
  Carousel, ModalTitle, ModalContent,
} from "./styles";
import {Loader, Map, Modal, RestaurantCard, RestaurantCarouselImage, Skeleton} from "components";
import {SearchField} from "components";

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
  const [placeId, setPlaceId] = useState(null)
  const [modalOpen, setModalOpen] = useState(false);
  const {restaurants, selectedRestaurant} = useSelector(store => store.restaurants)

  function handlePlaceSelect(placeId) {
    setPlaceId(placeId)
    setModalOpen(true)
  }

  return (
    <Container>
      <SideBar>
        <Search>
          <Logo src={logo} alt="Restaurant's Logo"/>
          <SearchField setQuery={setQuery}/>
          {restaurants.length === 0 ? <Loader/> : (
            <>
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
            </>
          )}
        </Search>
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.place_id}
            restaurant={restaurant}
            onClick={() => handlePlaceSelect(restaurant.place_id)}/>
        ))}
      </SideBar>
      <Map query={query} placeId={placeId}/>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {!selectedRestaurant ?
          <>
            <Skeleton width='10px' height='30px'/>
            <Skeleton width='10px' height='10px'/>
            <Skeleton width='10px' height='10px'/>
            <Skeleton width='10px' height='10px'/>
          </>
          :
          <>
            <ModalTitle>{selectedRestaurant?.name}</ModalTitle>
            <ModalContent>{selectedRestaurant?.formatted_phone_number}</ModalContent>
            <ModalContent>{selectedRestaurant?.formatted_address}</ModalContent>
            <ModalContent>
              {selectedRestaurant?.opening_hours?.open_now ? 'Open now!' : 'Closed now :('}
            </ModalContent>
          </>
        }
      </Modal>
    </Container>
  );
}

export default Home;