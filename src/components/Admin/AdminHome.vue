<template>
    <h1>Pagina principal del admin</h1>
        <nav>
        <router-link to="/admin/">Mi principal</router-link>&nbsp;
        <router-link to="/admin/productos">Productos</router-link> &nbsp;
        <router-link to="/admin/usuarios">Usuarios</router-link> &nbsp;
        <router-link to="/admin/clientes">Clientes</router-link> &nbsp;
        <router-link to="/admin/pedidos">Pedidos</router-link> &nbsp;
    </nav>
    <router-view />
</template>

<script>
    export default {
        name: "AdminHome",
    };
</script>