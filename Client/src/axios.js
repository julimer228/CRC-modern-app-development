import axios from "axios";
import * as endpoints from "./endpoints"

export const makeRequest = axios.create({
  baseURL: endpoints.API,
  withCredentials: true,
});