import axios from "axios";

const token = sessionStorage.getItem("access_token");
let api;

if (token) {
    const bearerToken = "Bearer " + token;
    api = axios.create({
        baseURL: process.env.API_URL,
        headers: {authorization: bearerToken},
    });
} else {
    api = axios.create({baseURL: process.env.API_URL});
}

export default api;
