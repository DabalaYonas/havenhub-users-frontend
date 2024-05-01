import getPropertyById from "@/app/actions/getPropertyById";
import ListingClient from "./ListingClient";
import { getPlaceImagesById } from "@/app/actions/getPlaceImagesByID";
import { getPlaceImages } from "@/app/actions/getPlaceImages";

interface IParams {
  placesId: string;
}
const ListingPage = async ({ params }: { params: IParams}) => {
  const selectedPlace = await getPropertyById(params);
  const placeImages = await getPlaceImages();

  return <ListingClient
      place={selectedPlace}
      images={placeImages}></ListingClient>
}

export default ListingPage
