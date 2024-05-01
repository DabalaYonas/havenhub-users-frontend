import axios, { AxiosResponse } from 'axios';
import React from 'react'

export async function getPlaces() {
    return await axios.get('http://127.0.0.1:8000/property/api/');
}