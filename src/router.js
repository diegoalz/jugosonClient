import { createRouter, createWebHistory } from "vue-router";
import Login from './views/Todos/Login.vue';
import Register from './views/Todos/Register.vue';
import AdminHome from './views/Admin/AdminHome.vue';
import AdminProductos from './views/Admin/CrudProductos.vue';
import AdminUsuarios from './views/Admin/CrudUsuarios.vue';
import AdminClientes from './views/Admin/TablaClientes.vue';
import AdminPedidos from './views/Admin/TablaPedidos.vue';
import ClienteHome from './views/Cliente/ClienteHome.vue';
import ClienteCatalogo from './views/Cliente/Catalogo.vue';
import ClientePedidos from './views/Cliente/CrudPedidos.vue';
import ClienteDetallePedido from './views/Cliente/DetallePedido.vue';
import ClienteTicket from './views/Cliente/Ticket.vue';
import RepartidorHome from './views/Repartidor/RepartidorHome.vue';
import RepartidorMisPedidos from './views/Repartidor/MisPedidos.vue';
import RepartidorPorHacer from './views/Repartidor/PorHacer.vue';
import RepartidorEntrega from './views/Repartidor/Entrega.vue';

const routes = [
    // Pantalla generales
    { path: "/", component: Login },
    { path: "/register", component: Register },
    // Pantallas solo para administradores
    {
        path: "/admin", component: AdminHome,
        children: [
            { path: "productos", component: AdminProductos},
            { path: "usuarios", component: AdminUsuarios},
            { path: "clientes", component: AdminClientes},
            { path: "pedidos", component: AdminPedidos},
        ]
    },
    // Pantallas para los clientes
    {
        path: "/cliente", component: ClienteHome,
        children: [
            { path: "catalogo", component: ClienteCatalogo},
            { path: "pedidos", component: ClientePedidos},
            { path: "ticket", component: ClienteTicket},
            { path: "detallePedido/:id_pedido", component: ClienteDetallePedido, name:'detalle'},
        ]
    },
    // Pantallas para los repartidores
    {
        path: "/repartidor", component: RepartidorHome,
        children: [
            { path: "misPedidos", component: RepartidorMisPedidos},
            { path: "porHacer", component: RepartidorPorHacer},
            { path: "entrega", component: RepartidorEntrega},
        ]
    },
    // { path: "/", component: Home },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;