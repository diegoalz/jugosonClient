import axios from "axios";

const ENDPOINT_PATH = "https://jugosonbackend-production.up.railway.app/api/";

export default {
    // Endopoints para el admin
    getAllProducts(){
        return axios.get(ENDPOINT_PATH + "all_producto");
    }
};