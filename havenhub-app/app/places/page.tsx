import React, { useEffect } from 'react'
import { IListingsParams } from '../actions/getListings';
import { getPlaces } from '../actions/getPlaces';
import { AxiosResponse } from 'axios';
import PlacesClient from './PlacesClient';
import { getPlaceImages } from '../actions/getPlaceImages';


interface HomeProps {
  searchParams: IListingsParams;
}

async function PlacesPage({ searchParams }: HomeProps) {
  
  const places = await getPlaces().then((response: AxiosResponse) => response.data).then((data: AxiosResponse) => data);
  const images = await getPlaceImages().then((data: AxiosResponse) => data);

  return <PlacesClient places={places} images={images}></PlacesClient>
}

export default PlacesPage