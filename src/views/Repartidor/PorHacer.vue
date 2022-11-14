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
                                    <div class="font-semibold text-left">Fecha</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left text-center">Acciones</div>
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
                                    <div class="text-left font-medium text-gray-800">{{pedido.updated_at}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="justify-text my-8 select-none flex">
                                        <button @click="avisoSeleccionar(pedido)" type="button" class="tracking-wider text-white bg-orange-500 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold" title="">
                                        <i class="fas fa-star" aria-hidden="true"></i> Seleccionar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <p v-else="result">Cargando...</p>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- modal borrar -->

<div class="py-12 bg-gray-700/50 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  v-show="modal.modalSeleccionar">
    <!-- <div class="absolute bg-black opacity-80 inset-0 z-0"></div> -->
    <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
    <!--content-->
    <div class="">
        <!--body-->
        <div class="text-center p-5 flex-auto justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto fill-orange-500" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"/></svg>
                <h2 class="text-xl font-bold py-4 ">¿Estas seguro?</h2>
                <p class="text-sm text-gray-500 px-8">¿Realmente quieres atender este pedido?</p>    
        </div>
        <!--footer-->
        <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"  @click="limpiarDatos('seleccionar')">
                Cancelar
            </button>
            <button @click="seleccionarPedido()" type="button" class="text-white bg-green-500 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Confirmar</button>
        </div>
    </div>

    <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 rounded focus:ring-2 focus:outline-none focus:ring-gray-600" @click="limpiarDatos('seleccionar')" type="button" aria-label="close modal" role="button">
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
    import repartidorControl from '../../logic/repartidor';
    export default {
        name: "PorHacer",
        data(){
            return {
                result : null,
                objeto : {
                    id : null,
                },
                modal : {
                    modalSeleccionar : false,
                }
            }
        },
        mounted(){
            this.cargarDatos();
        },
        methods : {
            cargarDatos(){
                repartidorControl.porHacer().then(response => {
                    this.result = response.data.result;
                }).catch(error => {
                    console.log(error);
                });
            },
            seleccionarPedido(){
                repartidorControl.asignar_pedido(this.objeto.id).then(response => {
                    repartidorControl.proceso_pedido(this.objeto.id, "en camino").then(response => {
                        this.cargarDatos();
                        this.limpiarDatos("seleccionar");
                    }).catch(error => {
                        console.log(error);
                    });
                }).catch(error => {
                    console.log(error);
                });
            },
            // Abrir modal seleccionar
            avisoSeleccionar(seleccionado){
                this.modal.modalSeleccionar = true;
                this.objeto.id = seleccionado.id;
            },
            // Funcion que se debe usar cada que se cierre un modal
            limpiarDatos(modal){
                this.objeto.id = null;
                if(modal == "crear") {
                    this.modal.modalCrear = false;
                }else if(modal == "editar") {
                    this.modal.modalEditar = false;
                }else if(modal == "eliminar"){
                    this.modal.modalBorrar = false;
                }else if(modal == "seleccionar"){
                    this.modal.modalSeleccionar = false;
                }
            },
        }
    };
</script>