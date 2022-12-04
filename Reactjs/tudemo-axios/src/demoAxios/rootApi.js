import axios from "axios";
export const rootApi = axios.create({
  baseURL: "https://js-post-api.herokuapp.com/api/",

  headers: { "Content-Type": "application/json" },
});
