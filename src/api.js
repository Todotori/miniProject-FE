import axios from "axios";

const token = sessionStorage.getItem("access_token");
const api = axios.create({baseURL: "http://3.34.90.63", headers: {Authorization: token}});

export default api;
