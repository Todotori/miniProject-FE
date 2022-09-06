import axios from "axios";

const token = sessionStorage.getItem("access_token");
const api = axios.create({baseURL: "http://3.34.90.63", headers: {authorization: token}});

export default api;
