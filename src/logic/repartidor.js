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
        
    // admin
        //control de los usuarios
        all_users() {
        return axios.get(ENDPOINT_PATH + "all_users");
    },
    estatus_users(nuevo_estatus, aviso, user) {
        const admin = { nuevo_estatus, aviso, user };
        return axios.post(ENDPOINT_PATH + "estatus_users", admin);
    },
    editar_users(nombre, email, telefono, rol, password, estatus) {
        const admin = { nombre, email, telefono, rol, password, estatus };
        return axios.post(ENDPOINT_PATH + "editar_users", admin);
    },
    register(nombre, email, telefono, rol, password) {
        const admin = { nombre, email, telefono, rol, password};
        return axios.post(ENDPOINT_PATH + "register", admin);
    },
    
    //control de clientes
    
    all_clientes() {
        return axios.get(ENDPOINT_PATH + "all_clientes");
    },
    
    
    // control completo del catalogo de producción
    
    guardar_producto(nombre_producto, descripción, precio_actual) {
        const admin = { nombre_producto, descripción, precio_actual };
        return axios.post(ENDPOINT_PATH + "guardar_producto", admin);
    },
    editar_producto(id, nombre_producto, descripcion, precio_actual) {
        const admin = { nombre_producto, descripción, precio_actual };
        return axios.post(ENDPOINT_PATH + "editar_producto", admin);
    },
    
    // end admin
    
        
    };
