import axios, { AxiosResponse } from 'axios';
import React from 'react'

interface IParams {
    placesId?: string;
}
export async function getPlaceImagesById(params: IParams) {
    return await axios.get('http://127.0.0.1:8000/lookup/api/images/' + params.placesId + "/").then(response => response.data);
}