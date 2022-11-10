<template>
<h1>Soy un detalle pedido</h1>
<!-- Zona para listar pedidos -->
<div v-if="result" v-for="pedido_producto in result" :key="pedido_producto.id">
    <p>{{pedido_producto.id_pedido}}</p>
    <p>{{pedido_producto.id_pedido}}</p>
    <p>{{pedido_producto.precio_unitario}}</p>
    <p>{{pedido_producto.cantidad}}</p>
</div>
<div v-else="result">
    <p>cargando</p>
</div>
<!-- Zona del formulario -->
<h2>Formulario para hacer un pedido</h2>
<button v-show="catalogo" @click="this.infoLista()">{{this.producto.actual}}</button>
<div v-show="this.modal.modalLista" v-if="catalogo" v-for="producto in catalogo" :key="producto.id">
    <button value="{{producto.descripcion}}" @click="infoProducto(producto)">{{producto.nombre_producto}}</button>
</div>
<h2 v-show="this.modal.modalLista">
    {{this.producto.descripcion}}
</h2>
<form action @submit.prevent="this.crearPedidoProducto">
    <input v-model="this.objeto.cantidad" type="number" min="1" max="100">
    <button>Agregar al carrito</button>
</form>

<form action @submit.prevent="crearPedidoProducto">
    <label for="">Cantidad</label>
    <input v-model="this.objeto.cantidad" type="number" min="1" max="100">
    <label for="">Precio unitario</label>
    <input v-model="this.objeto.precio_unitario" type="number">
    <button>Mandar peticion</button>
</form>

</template>
<script>
import clienteControl from '../../logic/cliente';
import genericoControl from '../../logic/repartidor'
    export default {
        name : "DetallePedido",
        data() {
            return {
                result : null,
                catalogo : null,
                modal : {
                    modalInfo : false,
                    modalLista : false,
                },
                objeto : {
                    id_pedido : Number(this.$route.params.id_pedido),
                    id_producto : null,
                    precio_unitario : null,
                    cantidad : 1,
                },
                producto : {
                    id_producto : null,
                    nombre_producto : "",
                    descripcion : "",
                    precio_actual : null,
                    actual : "Escoge un producto"
                }
            }
        },
        mounted(){
            this.cargarProductos();
            this.cargarDatos();
        },
        methods : {
            // Datos para el crud del pedido producto
            cargarDatos(){
                genericoControl.lista_pedido_producto(this.objeto.id_pedido).then(response => {
                    if(response.data.status == 200){
                        this.result = response.data.result;
                    }else{
                        this.result = [{
                            id_pedido : null,
                            id_producto : null,
                            precio_unitario : "no existe ningun valor",
                            cantidad : null
                        }];
                    }
                }).catch(error => {
                    console.log(error);
                });
            },
            cargarProductos(){
                clienteControl.catalogo().then(response => {
                    this.catalogo = response.data.result;
                }).catch(error => {
                    console.log(error);
                });
            },
            crearPedidoProducto(){
                clienteControl.agregar_pedido_producto(this.objeto.id_pedido, this.objeto.id_producto, this.objeto.precio_unitario, this.objeto.cantidad).then(response => {
                    this.cargarDatos();
                }).catch(error => {
                    console.log(error);
                });
            },
            // Info del producto
            infoProducto(producto){
                this.producto.actual = producto.nombre_producto;
                this.producto.descripcion = producto.descripcion;
                this.objeto.id_producto = producto.id;
                this.objeto.precio_unitario = Number(producto.precio_actual);
                console.log(this.objeto);
                this.modal.modalInfo = true;
            },
            infoLista(){
                this.modal.modalLista = (this.modal.modalLista == false) ? true : false;
            }
        }
    }
</script>
<style scoped>

</style>