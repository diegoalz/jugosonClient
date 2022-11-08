import axios from "axios";

const ENDPOINT_PATH = "https://jugosonbackend-production.up.railway.app/api/";

export default {
    // repartidores
    proceso_pedido(proceso) {
        const repartidor = { proceso };
        return axios.post(ENDPOINT_PATH + "proceso_pedido", repartidor);
    },
    lista_pedido_producto(productos_pedido) {
        const repartidor = { productos_pedido };
        return axios.post(ENDPOINT_PATH + "productos_pedido", repartidor);
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
