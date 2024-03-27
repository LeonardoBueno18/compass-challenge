import axios, { AxiosInstance } from "axios";

const clienteHttp: AxiosInstance = axios.create({
    //This is applicable if you wish to utilize a local service that is currently active.
    baseURL: "http://localhost:8000/",
    //This is applicable if you're considering the use of an external service.
    //baseURL: "https://dev-challenge.micheltlutz.me/",

})

export default clienteHttp