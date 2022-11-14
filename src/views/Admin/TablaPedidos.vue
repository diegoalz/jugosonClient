<template>
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
                                    <div class="font-semibold text-left">Bitacora</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Estatus</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Acciones</div>
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
                                    <div class="text-left font-medium text-gray-800">{{(pedido.estatus == true)?"Activo":"Inactivo"}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div>
                                        <div>
                                            <button @click="avisoBorrar(pedido)">
                                                <a href="#">
                                                    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600 hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg> -->
                                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        class="w-6 h-6 fill-orange-600" viewBox="0 0 369.949 369.949" style="enable-background:new 0 0 369.949 369.949;"
                                                        xml:space="preserve">
                                                        <g>
                                                        <g>
                                                        <path d="M184.972,0.003C82.821,0.003,0,82.821,0,184.975s82.821,184.972,184.972,184.972c102.16,0,184.978-82.818,184.978-184.972
                                                            S287.132,0.003,184.972,0.003z M184.972,353.512c-92.927,0-168.536-75.606-168.536-168.537
                                                            c0-92.93,75.609-168.536,168.536-168.536c92.931,0,168.537,75.606,168.537,168.536
                                                            C353.509,277.905,277.908,353.512,184.972,353.512z"/>
                                                            <path d="M239.573,51.936v139.669l10.575-10.572c5.212-5.215,13.643-5.215,18.849,0c5.206,5.209,5.206,13.646,0,18.846
                                                            l-33.32,33.32l-0.013,0.019l-9.421,9.415l-9.41-9.415l-0.023-0.019l-31.099-31.099c-5.209-5.212-5.209-13.646,0-18.849
                                                            c5.206-5.206,13.643-5.206,18.849,0l8.353,8.347V46.588c0-0.918,0.103-1.801,0.271-2.675c-9.128-1.822-18.555-2.81-28.211-2.81
                                                            c-79.326,0-143.866,64.54-143.866,143.866c0,57.016,33.438,106.255,81.656,129.518V178.475l-10.568,10.571
                                                            c-2.6,2.606-6.014,3.909-9.428,3.909c-3.411,0-6.818-1.303-9.424-3.909c-5.209-5.209-5.209-13.646,0-18.846l33.32-33.324
                                                            c0.006-0.006,0.006-0.006,0.006-0.006l9.427-9.424l9.419,9.412c0,0,0.006,0.012,0.018,0.018l31.102,31.102
                                                            c5.209,5.209,5.209,13.646,0,18.846c-5.209,5.212-13.646,5.212-18.852,0l-8.35-8.344v145.013c0,0.24-0.057,0.469-0.069,0.709
                                                            c11.412,2.924,23.305,4.636,35.614,4.636c79.33,0,143.881-64.54,143.881-143.863C328.847,124.975,291.894,73.49,239.573,51.936z"/>
                                                        </g>
                                                    </g>
                                                    </svg>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- modal borrar -->

    <div v-show="modal.modalBorrar" class="py-12 bg-gray-700/50 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
    <!-- <div class="absolute bg-black opacity-80 inset-0 z-0"></div> -->
    <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <!--content-->
        <div class="">
        <!--body-->
            <div class="text-center p-5 flex-auto justify-center">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg> -->
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                class="w-16 h-16 flex items-center text-red-500 mx-auto fill-orange-600" viewBox="0 0 369.949 369.949" style="enable-background:new 0 0 369.949 369.949;"
                    xml:space="preserve">
                    <g>
                    <g>
                    <path d="M184.972,0.003C82.821,0.003,0,82.821,0,184.975s82.821,184.972,184.972,184.972c102.16,0,184.978-82.818,184.978-184.972
                        S287.132,0.003,184.972,0.003z M184.972,353.512c-92.927,0-168.536-75.606-168.536-168.537
                        c0-92.93,75.609-168.536,168.536-168.536c92.931,0,168.537,75.606,168.537,168.536
                        C353.509,277.905,277.908,353.512,184.972,353.512z"/>
                        <path d="M239.573,51.936v139.669l10.575-10.572c5.212-5.215,13.643-5.215,18.849,0c5.206,5.209,5.206,13.646,0,18.846
                        l-33.32,33.32l-0.013,0.019l-9.421,9.415l-9.41-9.415l-0.023-0.019l-31.099-31.099c-5.209-5.212-5.209-13.646,0-18.849
                        c5.206-5.206,13.643-5.206,18.849,0l8.353,8.347V46.588c0-0.918,0.103-1.801,0.271-2.675c-9.128-1.822-18.555-2.81-28.211-2.81
                        c-79.326,0-143.866,64.54-143.866,143.866c0,57.016,33.438,106.255,81.656,129.518V178.475l-10.568,10.571
                        c-2.6,2.606-6.014,3.909-9.428,3.909c-3.411,0-6.818-1.303-9.424-3.909c-5.209-5.209-5.209-13.646,0-18.846l33.32-33.324
                        c0.006-0.006,0.006-0.006,0.006-0.006l9.427-9.424l9.419,9.412c0,0,0.006,0.012,0.018,0.018l31.102,31.102
                        c5.209,5.209,5.209,13.646,0,18.846c-5.209,5.212-13.646,5.212-18.852,0l-8.35-8.344v145.013c0,0.24-0.057,0.469-0.069,0.709
                        c11.412,2.924,23.305,4.636,35.614,4.636c79.33,0,143.881-64.54,143.881-143.863C328.847,124.975,291.894,73.49,239.573,51.936z"/>
                    </g>
                    </g>
                </svg>
                <h2 class="text-xl font-bold py-4 ">¿Estas seguro?</h2>
                <p class="text-sm text-gray-500 px-8">¿Realmente quieres cambiar su estatus?</p>    
            </div>
        <!--footer-->
        <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" @click="limpiarDatos('eliminar')">
                Cancelar
            </button>
            <button @click="cambiarEstatus()" class="mb-2 md:mb-0 bg-green-600 border border-green-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-orange-600">Cambiar</button>
        </div>
    </div>

    <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 rounded focus:ring-2 focus:outline-none focus:ring-gray-600" @click="limpiarDatos('eliminar')" type="button" aria-label="close modal" role="button">
        <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    </button>
</div>
</div>

</template>

<script>
import adminControl from '../../logic/admin';
import genericoControl from '../../logic/cliente';
    export default {
        name: "TablaPedidos",
        data(){
            return {
                result : null,
                objeto : {
                    id : null,
                    estatus_actual : null,
                },
                modal : {
                    modalBorrar : false,
                }
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
            },
            cambiarEstatus(){
                genericoControl.borrar_pedido(this.objeto.id, this.objeto.estatus_actual).then(response => {
                    this.cargarDatos();
                    this.limpiarDatos("eliminar");
                }).catch(error => {
                    console.log(error);
                });
            }
            ,
            avisoBorrar(seleccionado){
                this.modal.modalBorrar = true;
                this.objeto.id = seleccionado.id;
                this.objeto.estatus_actual = seleccionado.estatus;
            },
            // Funcion que se debe usar cada que se cierre un modal
            limpiarDatos(modal){
                this.objeto.id = null
                this.objeto.nombre_producto = "";
                this.objeto.descripcion = "";
                this.objeto.precio_actual = null;
                this.objeto.estatus = null;
                if(modal == "crear") {
                    this.modal.modalCrear = false;
                }else if(modal == "editar") {
                    this.modal.modalEditar = false;
                }else if(modal == "eliminar"){
                    this.modal.modalBorrar = false;
                }
            },
        }
    };
</script>