import axios from "axios";

const ENDPOINT_PATH = "https://jugosonbackend-production.up.railway.app/api/";

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.access_token}`;

export default {
    // repartidores
    proceso_pedido(id, proceso) {
        const repartidor = { id, proceso };
        return axios.post(ENDPOINT_PATH + "proceso_pedido", repartidor);
    },
    lista_pedido_producto(id_pedido) {
        const repartidor = { id_pedido };
        return axios.post(ENDPOINT_PATH + "lista_pedido_producto", repartidor);
    },
    repartidor_pedidos() {
        return axios.get(ENDPOINT_PATH + "repartidor_pedidos");
    },
    porHacer() {
        return axios.get(ENDPOINT_PATH + "porHacer");
    },
    asignar_pedido(pedido) {
        const repartidor = { pedido };
        return axios.post(ENDPOINT_PATH + "asignar_pedido", repartidor);
    },
        // end repartidores
        
};