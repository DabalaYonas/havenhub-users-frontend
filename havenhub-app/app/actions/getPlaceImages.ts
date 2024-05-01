import axios, { AxiosResponse } from 'axios';
import React from 'react'

export async function getPlaceImages() {
    return await axios.get('http://127.0.0.1:8000/lookup/api/images/').then(response => response.data);
}