import axios from "axios";

const token = "Bearer " + sessionStorage.getItem("access_token");
const api = axios.create({baseURL: "http://3.34.90.63/api", headers: {authorization: token}});

export default api;
