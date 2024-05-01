import axios, { AxiosResponse } from "axios";
import { jwtDecode } from "jwt-decode";

export async function getUser() {
    return await axios.get('http://localhost:8000/user/api/', {headers: {'Content-Type': 'application/json'}, withCredentials: true});
}

const checkTokenExpirationMiddleware = (token) =>{
    // console.log(token);
    if(token != null) {
    if (jwtDecode(token).exp < Date.now() / 1000) {
      localStorage.clear();
    }
}
  };

export default function getCurrentUser() {
    const token =  localStorage.getItem("token");
    
    checkTokenExpirationMiddleware(token);
    if(token != null) {
        const user = jwtDecode(token);
        getUser().then((response: AxiosResponse) => {
            // console.log(response.data);
            return response.data;
        });
        return user
    }

    return null;
}