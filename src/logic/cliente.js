import axios from "axios";

const ENDPOINT_PATH = "https://jugosonbackend-production.up.railway.app/api/";

export default {
    estatus_cliente(nuevo_estatus, aviso, clientes) {
        const cliente = { nuevo_estatus, aviso, clientes };
        return axios.post(ENDPOINT_PATH + "estatus_cliente", cliente);
    },
    editar_cliente(nombre, email, telefono, razon_social, RFC, direccion, password) {
        const cliente = { nombre, email, telefono, razon_social, RFC, direccion, password };
        return axios.post(ENDPOINT_PATH + "editar_cliente", cliente);
    },
    // visualización del producto
    catalogo() {
        return axios.get(ENDPOINT_PATH + "catalogo");
    },
    // realizar pedido 
    crear_pedido(orden_compra, id_cliente, direccion) {
        const cliente = { orden_compra, id_cliente, direccion };
        return axios.post(ENDPOINT_PATH + "crear_pedido", cliente);
    },
    editar_pedido( id, orden_compra, direccion ) {
        const cliente = {  id, orden_compra, direccion  };
        return axios.post(ENDPOINT_PATH + "editar_pedido", cliente);
    },
    cliente_pedidos() {
        return axios.get(ENDPOINT_PATH + "cliente_pedidos");
    },
    // control de los productos pedidos
    agregar_pedido_producto( id_pedido, id_producto, precio_unitario, cantidad ) {
        const cliente = {  id_pedido, id_producto, precio_unitario, cantidad  };
        return axios.post(ENDPOINT_PATH + "agregar_pedido_producto", cliente);
    },
    eliminar_pedido_producto( id ) {
        const cliente = { id };
        return axios.post(ENDPOINT_PATH + "eliminar_pedido_producto", cliente);
    },
};
