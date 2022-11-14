<template>
    <!-- component -->
    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Clientes</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Nombre</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Razón social</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Email</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Telefono</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">RFC</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Dirección</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100" v-if="result" v-for="cliente in result">
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{cliente.nombre}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{cliente.razon_social}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{cliente.email}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{cliente.telefono}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{cliente.RFC}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{cliente.direccion}}</div>
                                </td>
                            </tr>
                        </tbody>
                        <h1 v-else="result">Cargando...</h1>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
import adminControl from '../../logic/admin';
    export default {
        name: "TablaClientes",
        data: () => ({
            result : null
        }),
        mounted() {
            this.cargarDatos();
        },
        methods: {
            cargarDatos(){
                adminControl.all_clientes().then(response => {
                    this.result = response.data.result;
                }).catch(error=>{
                    console.log(error);
                });
            },
        }
    };
</script>