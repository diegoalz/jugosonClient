<template>
    <h1>Pagina principal del repartidor</h1>
    <nav>
        <router-link to="/repartidor/">Mi principal</router-link>&nbsp;
        <router-link to="/repartidor/misPedidos">Mis pedidos</router-link> &nbsp;
        <router-link to="/repartidor/porHacer">Por hacer</router-link> &nbsp;
        <router-link to="/repartidor/entrega">Entrega</router-link> &nbsp;
    </nav>
    <router-view />
</template>

<script>
    export default {
        name: "RepartidorHome",
    };
</script>