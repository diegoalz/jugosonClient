import axios from "axios";

const ENDPOINT_PATH = "https://jugosonbackend-production.up.railway.app/api/";

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.access_token}`;
export default {
    // Endopoints para el admin
    getAllProducts(){
        return axios.get(ENDPOINT_PATH + "all_producto");
    },
    //control de los usuarios
    all_users() {
        return axios.get(ENDPOINT_PATH + "all_users");
    },
    estatus_users(estatus_actual, id) {
        const admin = { estatus_actual, id };
        return axios.post(ENDPOINT_PATH + "estatus_users", admin);
    },
    editar_users(id, nombre, email, telefono, rol, password, password_confirmation, estatus) {
        const admin = { id, nombre, email, telefono, rol, password, password_confirmation, estatus };
        return axios.post(ENDPOINT_PATH + "editar_users", admin);
    },
    register(nombre, email, telefono, rol, password, password_confirmation) {
        const admin = {nombre, email, telefono, rol, password, password_confirmation};
        return axios.post(ENDPOINT_PATH + "register", admin);
    },
    
    //control de clientes
    
    all_clientes() {
        return axios.get(ENDPOINT_PATH + "all_clientes");
    },
    
    
    // control completo del catalogo de producción
    
    guardar_producto(nombre_producto, descripcion, precio_actual) {
        const admin = { nombre_producto, descripcion, precio_actual };
        return axios.post(ENDPOINT_PATH + "guardar_producto", admin);
    },
    editar_producto(id, nombre_producto, descripcion, precio_actual) {
        const admin = { id, nombre_producto, descripcion, precio_actual };
        return axios.post(ENDPOINT_PATH + "editar_producto", admin);
    },
    producto_baja(id, estatus_actual) {
        const admin = { id, estatus_actual };
        return axios.post(ENDPOINT_PATH + "producto_baja", admin);
    },
    all_productos() {
        return axios.get(ENDPOINT_PATH + "all_productos");
    },
    
    // control completo de pedido_productos
    
    all_pedidos() {
        return axios.get(ENDPOINT_PATH + "all_pedidos");
    },
    // end admin

};