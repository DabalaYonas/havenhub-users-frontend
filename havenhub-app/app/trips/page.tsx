import { AxiosResponse } from "axios";
import { getPlaces } from "../actions/getPlaces";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";
import { getPlaceImages } from "../actions/getPlaceImages";

const TripsPage = async () => {

  const places = await getPlaces().then((response: AxiosResponse) => response.data).then((data: AxiosResponse) => data);
  const images = await getPlaceImages().then((data: AxiosResponse) => data);

  return <Container>
    <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 gap-8">
    {places.filter((p => p.id == 1)).map(place => 
      {const image = images.find(item => item.property === place.id);
        return (
          <ListingCard
            key={place.id}
            data={place}
            image={image.image}
            actionLabel="Cancle booking"
          />)
      }
    )}
    </div>

  </Container>
};

export default TripsPage;
