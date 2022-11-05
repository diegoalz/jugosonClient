<template>
    <h1>Pagina principal del cliente</h1>
    <nav>
        <router-link to="/cliente/">Mi principal</router-link>&nbsp;
        <router-link to="/cliente/catalogo">Catalogo</router-link> &nbsp;
        <router-link to="/cliente/pedidos">Pedidos</router-link> &nbsp;
        <router-link to="/cliente/ticket">Ticket</router-link> &nbsp;
    </nav>
</template>

<script>
    export default {
        name: "ClienteHome",
    };
</script>