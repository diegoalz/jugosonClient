import axios from "axios";

const ENDPOINT_PATH = "https://jugosonbackend-production.up.railway.app/api/";

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.access_token}`;
export default {
    // Endopoints para el admin
    getAllProducts(){
        return axios.get(ENDPOINT_PATH + "all_producto");
    }
};