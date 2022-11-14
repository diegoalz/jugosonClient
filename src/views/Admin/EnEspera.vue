<template>
        <!-- component -->
        <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Por hacer</h2>              
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
                                    <div class="font-semibold text-left">Dirección</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Proceso</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Estatus</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Fecha</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Hora</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-if="result" v-for="pedido in result">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{pedido.orden_compra}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{pedido.direccion}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido.proceso}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{(pedido.estatus == true)?"Activo":"Inactivo"}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido.updated_at.substr(0, 10)}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido.updated_at.substr(11, 8)}}</div>
                                </td>
                            </tr>
                            <p v-else="result">Cargando...</p>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import genericoControlador from '../../logic/repartidor';
    export default {
        name: "EnEspera",
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
                genericoControlador.porHacer().then(response => {
                    this.result = response.data.result;
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    };
</script>