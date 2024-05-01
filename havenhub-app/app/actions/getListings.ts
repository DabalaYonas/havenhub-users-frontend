'use client';
import axios from "axios";
import { useEffect } from "react";

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export async function getBookings() {
    return axios.get('http://127.0.0.1:8000/booking/api/').then(response => response.data);
}

export default async function getListings(params: IListingsParams) {
  useEffect(() => {
    let mounted = true;
    getBookings().then(data => {
      if(mounted) {
        console.log("Booking");
        console.log(data);
        // setCarsList(carsPageList);
      }
    });
    mounted = false;
  }, []);
}
