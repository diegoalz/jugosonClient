<template>
    <h1>Pagina para ver todos los pedidos</h1>
        
        <!-- component -->
        <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Pedidos</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Orden compra</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Nombre cliente</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Nombre repartidor</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Direccion</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Fecha de inicio</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Proceso</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Fecha de proceso</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Estatus</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-if="result" v-for="pedido in result">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800"><router-link :to="{name:'detalleAdmin', params:{id_pedido : pedido.id}}">{{pedido.orden_compra}}</router-link></div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{pedido.nombre_cliente}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido.nombre_users}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido.direccion}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido.created_at}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido.proceso}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido.updated_at}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido.estatus}}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import adminControl from '../../logic/admin';
    export default {
        name: "TablaPedidos",
        data(){
            return {
                result : null,
            }
        },
        mounted(){
            this.cargarDatos();
        },
        methods : {
            cargarDatos(){
                adminControl.all_pedidos().then(response => {
                    this.result = response.data.result;
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    };
</script>