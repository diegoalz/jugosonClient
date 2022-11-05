import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Todos/Login.vue';
import Register from './components/Todos/Register.vue';
import AdminHome from './components/Admin/AdminHome.vue';
import AdminProductos from './components/Admin/CrudProductos.vue';
import AdminUsuarios from './components/Admin/CrudUsuarios.vue';
import AdminClientes from './components/Admin/TablaClientes.vue';
import AdminPedidos from './components/Admin/TablaPedidos.vue';
import ClienteHome from './components/Cliente/ClienteHome.vue';
import ClienteCatalogo from './components/Cliente/Catalogo.vue';
import ClientePedidos from './components/Cliente/CrudPedidos.vue';
import ClienteTicket from './components/Cliente/Ticket.vue';
import RepartidorHome from './components/Repartidor/RepartidorHome.vue';
import RepartidorMisPedidos from './components/Repartidor/MisPedidos.vue';
import RepartidorPorHacer from './components/Repartidor/PorHacer.vue';
import RepartidorEntrega from './components/Repartidor/Entrega.vue';

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