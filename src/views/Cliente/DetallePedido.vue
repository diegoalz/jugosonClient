<template>
    <!-- Formulario para agregar -->
<button v-show="this.modal.modalBloquear"  @click="modal.modalCrear = true" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 px-3 my-4 py-2 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded margin ">
            <p class="text-sm font-medium leading-none text-white">Agregar productos a pedido</p>
        </button>
        <!-- Modal crear -->
        <div class="py-24 bg-gray-700/50 z-10 absolute top-0 right-0 bottom-0 left-0" id="modal" v-show="modal.modalCrear">
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div class="w-full flex justify-start text-gray-600 mb-3">

                    <svg class="h-16 w-16 text-blue-500"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>

                </div>
                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Agregar un pedido</h1>
                <h2 v-show="this.modal.modalLista">
                    {{this.producto.descripcion}}
                </h2>
                
                <div class="h-32 overflow-auto">
                    <button class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" v-show="catalogo" @click="this.infoLista()">{{this.producto.actual}}</button>
                    <div v-show="this.modal.modalLista" v-if="catalogo" v-for="producto in catalogo" :key="producto.id">
                        <button value="{{producto.descripcion}}" @click="infoProducto(producto)">{{producto.nombre_producto}}</button>
                    </div>
                </div>
                <form action @submit.prevent="crearPedidoProducto">
                    <label for="cantidad" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Cantidad</label>
                    <input v-model="this.objeto.cantidad" type="number" min="1" max="100" id="cantidad" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Cantidad requerida" />
                    <div class="flex items-center justify-center w-full">
                        <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Guardar</button>
                        <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="limpiarDatos('crear')" type="button">Cancelar</button>
                    </div>
                    <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 rounded focus:ring-2 focus:outline-none focus:ring-gray-600" @click="limpiarDatos('crear')" type="button" aria-label="close modal" role="button">
                        <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>


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
                                <!-- <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">ID</div>
                                </th> -->
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Precio unitario</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Cantidad</div>
                                </th>
                                <th class="p-2 whitespace-nowrap" v-show="this.modal.modalBloquear">
                                    <div class="font-semibold text-center">Acciones</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-if="result" v-for="pedido_producto in result">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{pedido_producto.nombre_producto}}</div>
                                </td>
                                <!-- <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{pedido_producto.id}}</div>
                                    </div>
                                </td> -->
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{pedido_producto.precio_unitario}}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{pedido_producto.cantidad}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap" v-show="this.modal.modalBloquear">
                                        <div class="flex flex-row justify-center">
                                            <div>
                                                <button @click="this.abrirModalEditar(pedido_producto)" type="button">
                                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </a>
                                                </button>
                                            </div>
                                            <div>
                                                <button @click="this.avisoBorrar(pedido_producto)" type="button">
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600 hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </a>
                                                </button>
                                            </div>
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
    <!-- modasl edit -->

    <div class="py-12 bg-gray-700/50 z-10 absolute top-0 right-0 bottom-0 left-0" id="modal" v-show="modal.modalEditar">
                <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div class="w-full flex justify-start text-gray-600 mb-3">

                            <svg class="h-16 w-16 text-blue-500"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>


                        </div>
                        
                        <!-- <div class="h-32 overflow-auto">
                            <button class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" v-show="catalogo" @click="this.infoLista()">{{this.producto.actual}}</button>
                            <div v-show="this.modal.modalLista" v-if="catalogo" v-for="producto in catalogo" :key="producto.id">
                                <button value="{{producto.descripcion}}" @click="infoProducto(producto)">{{producto.nombre_producto}}</button>
                            </div>
                        </div> -->
                        <form action @submit.prevent="editarPedidoProducto">
                            <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Modifica los productos del pedido</h1>
                            <input type="text" v-model="this.producto.nombre_producto" readonly="readonly" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                            <label for="cantidad" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Cantidad</label>
                            <input v-model="this.objeto.cantidad" type="number" min="1" max="100" id="cantidad" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Cantidad requerida" />
    
                            <div class="flex items-center justify-center w-full">
                                <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                                <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="limpiarDatos('editar')" type="button">Cancel</button>
                            </div>
                            <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 rounded focus:ring-2 focus:outline-none focus:ring-gray-600" @click="limpiarDatos('editar')" type="button" aria-label="close modal" role="button">
                                <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </form>
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
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                            <h2 class="text-xl font-bold py-4 ">¿Estas seguro?</h2>
                            <p class="text-sm text-gray-500 px-8">¿Realmente quieres borrar este elemento?</p>    
                        </div>
                    <!--footer-->
                    <div class="p-3  mt-2 text-center space-x-4 md:block">
                        <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"  @click="limpiarDatos('eliminar')">
                            Cancelar
                        </button>
                        <button @click="this.borrarPedidoProducto()" class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Borrar</button>
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
import clienteControl from '../../logic/cliente';
import genericoControl from '../../logic/repartidor';
    export default {
        name : "DetallePedido",
        data() {
            return {
                result : null,
                catalogo : null,
                proceso : this.$route.params.proceso,
                modal : {
                    modalInfo : false,
                    modalLista : false,
                    modalCrear : false,
                    modalEditar : false,
                    modalBorrar : false,
                    modalBloquear : true
                },
                objeto : {
                    id : null,
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
        },
        methods : {
            // Datos para el crud del pedido producto
            cargarDatos(){
                this.bloquearFunciones();
                genericoControl.lista_pedido_producto(this.objeto.id_pedido).then(response => {
                    if(response.data.status == 200){
                        this.result = response.data.result;
                        if (this.proceso == "Iniciado") { // Cambiar a minusculas
                            genericoControl.proceso_pedido(this.objeto.id_pedido, "en espera").then(response => {
                                alert("Su pedido sera atendido");
                            });
                        }
                    }else{
                        if (this.proceso == "en espera") {
                            genericoControl.proceso_pedido(this.objeto.id_pedido, "Iniciado").then(response => {
                                alert("Su pedido esta vacio");
                            });
                        }
                        alert("Agregue productos");
                        this.result = true;
                    }
                }).catch(error => {
                    console.log(error);
                });
            },
            crearPedidoProducto(){
                let existe = false;
                if(this.result != true){
                    for(let producto of this.result){
                        if (producto.id_producto == this.objeto.id_producto) {
                            existe = true;
                        }
                    }
                    if (existe == false) {
                        clienteControl.agregar_pedido_producto(this.objeto.id_pedido, this.objeto.id_producto, this.objeto.precio_unitario, this.objeto.cantidad).then(response => {
                            this.cargarDatos();
                            this.limpiarDatos('crear');
                        }).catch(error => {
                            console.log(error);
                        });
                    }else{
                        alert("Ya existe modifique su pedido");
                    }
                }else{
                    clienteControl.agregar_pedido_producto(this.objeto.id_pedido, this.objeto.id_producto, this.objeto.precio_unitario, this.objeto.cantidad).then(response => {
                        this.cargarDatos();
                        this.limpiarDatos('crear');
                    }).catch(error => {
                        console.log(error);
                    });
                }

            },
            borrarPedidoProducto(){
                clienteControl.eliminar_pedido_producto(this.objeto.id).then(response=>{
                    this.cargarDatos();
                    this.limpiarDatos('eliminar');
                }).catch(error => {
                    console.log(error);
                });
            },
            editarPedidoProducto(){
                clienteControl.editar_pedido_producto(this.objeto.id, this.objeto.cantidad).then(response => {
                    this.cargarDatos();
                    this.limpiarDatos('editar');
                }).catch(error => {
                    console.log(error);
                });
            },
            // Cargar productos
            cargarProductos(){
                clienteControl.catalogo().then(response => {
                    this.catalogo = response.data.result;
                    this.cargarDatos();
                }).catch(error => {
                    console.log(error);
                });
            },
            // Nos brinda la informacion del producto y su descripcion
            infoProducto(producto){
                this.modal.modalInfo = true;
                this.producto.actual = producto.nombre_producto;
                this.producto.descripcion = producto.descripcion;
                this.objeto.id_producto = producto.id;
                this.objeto.precio_unitario = Number(producto.precio_actual);
            },
            // Cambia el estatus para hacer la lista de productos
            infoLista(){
                this.modal.modalLista = (this.modal.modalLista == false) ? true : false;
            },
            // Funcion que se debe usar cada que se cierre un modal
            limpiarDatos(modal){
                this.objeto.id = null;
                this.objeto.id_producto = null;
                this.objeto.precio_unitario = null;
                this.objeto.cantidad = 1;
                this.producto.nombre = "";
                if(modal == "crear") {
                    this.modal.modalCrear = false;
                }else if(modal == "editar") {
                    this.modal.modalEditar = false;
                }else if(modal == "eliminar"){
                    this.modal.modalBorrar = false;
                }
            },
            bloquearFunciones(){
                if (this.proceso == "en camino" || this.proceso == "entregado" || this.proceso == "terminado") {
                    this.modal.modalBloquear = false;
                }
            },
            // Funcion para abrir los modales
            abrirModalEditar(seleccionado){
                this.modal.modalEditar = true;
                this.objeto.id = seleccionado.id;
                this.objeto.id_producto = seleccionado.id_producto;
                this.objeto.cantidad = Number(seleccionado.cantidad);
                this.producto.nombre_producto = seleccionado.nombre_producto;
            },
            avisoBorrar(seleccionado){
                this.modal.modalBorrar = true;
                this.objeto.id = seleccionado.id;
            },
        }
    }
</script>
<style scoped>

</style>