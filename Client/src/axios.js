import axios from "axios";
import * as endpoints from "./endpoints"

let config = {headers: {
  'Access-Control-Allow-Origin': 'https://crc-front.vercel.app',
  'Access-Control-Allow-Credentials': true
}}

export const makeRequest = axios.create({
  baseURL: endpoints.API,
  withCredentials: true,
  config
});