
import axios from "axios";

interface IParams {
  placesId?: string;
}

export default async function getPropertyById(params: IParams) {
  return axios.get('http://127.0.0.1:8000/property/api/' + params.placesId + "/").then(response => response.data);
}
