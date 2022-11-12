<template>
<!-- Tabla real -->
        <!-- component -->
        <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Pedidos</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Producto</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Cantidad</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Precio unitario</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-if="result" v-for="pedido_producto in result">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido_producto.nombre_producto}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{pedido_producto.cantidad}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{pedido_producto.precio_unitario}}</div>
                                    </div>
                                </td>
                            </tr>
                            <h1 v-else="result">Cargando...</h1>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import genericoControl from '../../logic/repartidor';
    export default {
        name : "DetalleGenerico",
        data(){
            return{
                result : null,
                objeto : {
                    id_pedido : Number(this.$route.params.id_pedido)
                }
            }
        },
        mounted(){
            this.cargarDatos();
        },
        methods : {
            cargarDatos(){
                genericoControl.lista_pedido_producto(this.objeto.id_pedido).then(response => {
                    if(response.data.status == 200){
                        this.result = response.data.result;
                    }else{
                        this.result = {};
                    }
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>
<style>

</style>