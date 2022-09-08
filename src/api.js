import axios from "axios";

const token = sessionStorage.getItem("access_token");
let api;

if (token) {
  const bearerToken = "Bearer " + token;
  api = axios.create({
    baseURL: "http://3.34.90.63/api",
    headers: {authorization: bearerToken},
  });
} else {
  api = axios.create({baseURL: "http://3.34.90.63/api"});
}

export default api;
