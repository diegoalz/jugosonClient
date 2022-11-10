<template>
            <button @click="modal.modalCrear = true" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 px-3 my-4 py-2 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded margin ">
                <p class="text-sm font-medium leading-none text-white">Agregar usuario</p>
            </button>
            <!-- Modal crear -->
        <div class="py-12 bg-gray-700/50 z-10 absolute top-0 right-0 bottom-0 left-0" id="modal" v-show="modal.modalCrear">
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div class="w-full flex justify-start text-gray-600 mb-3">
                        <svg class="h-16 w-16 text-blue-500"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                    </div>
                    <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Agregar un producto</h1>
                    <form action @submit.prevent="registrarUsuario" class="h-80 overflow-auto">
                        <label for="nombre" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Nombre del usuario</label>
                        <input v-model="objeto.nombre" id="nombre_producto" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Nombre completo" />
                        <label for="email" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Email</label>
                        <input type="email" v-model="objeto.email" name="descripcion" id="descripcion" cols="50" rows="6" placeholder="ejemplo@gmail.com" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                        <label for="telefono" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Telefono</label>
                        <input v-model="objeto.telefono" id="telefono" type="text" minlength="10" maxlength="10" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="00000000" />
                        <label for="rol" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Rol</label>
                        <select id="rol" name="rol" v-model="objeto.rol" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="repartidor">Repartidor</option>
                            <option value="administrador">Administrador</option>
                        </select>
                        <label for="password" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Contraseña</label>
                        <input v-model="objeto.password" id="password" type="password" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="password" />
                        <label for="password_confirmation" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Confirme contraseña</label>
                        <input v-model="objeto.password_confirmation" id="password_confirmation" type="password" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="password confirmation" />
                        <div class="flex items-center justify-center w-full">
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Guardar</button>
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="modal.modalCrear=false" type="button">Cancelar</button>
                        </div>
                        <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 rounded focus:ring-2 focus:outline-none focus:ring-gray-600" @click="modal.modalCrear=false" type="button" aria-label="close modal" role="button">
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
        <!-- component -->
        <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                        <h2 class="font-semibold text-gray-800">Usuario</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">nombre</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Email</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Telefono</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Rol</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Estatus</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Acciones</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-if="result" v-for="usuario in result">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{usuario.nombre}}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{usuario.email}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{usuario.telefono}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{usuario.rol}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-800">{{usuario.estatus}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                        <div class="flex flex-row justify-center">
                                            <div>
                                                <button>
                                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </a>
                                                </button>
                                            </div>
                                            <div>
                                                <button>
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
                            <p v-else="result">Cargando...</p>
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
        name: "CrudUsuarios",
        data() {
            return {
                result: null,
                objeto : {
                    id : null,
                    nombre : "",
                    email : "",
                    telefono : null,
                    rol : "",
                    password : "",
                    password_confirmation : "",
                    estatus : null
                },
                modal : {
                    modalCrear : false,
                    modalEditar : false,
                    modalBorrar : false
                }
            }
            
        },
        mounted() {
            this.cargarDatos();
        },
        methods : {
            // Funciones para crud de usuarios
            cargarDatos(){
                adminControl.all_users().then(response => {
                    this.result = response.data.result;
                }).catch(error => {
                    console.log(error);
                });
            },
            registrarUsuario(){
                if(this.objeto.password === this.objeto.password){
                    adminControl.register(this.objeto.nombre, this.objeto.email, this.objeto.telefono, this.objeto.rol, this.objeto.password, this.objeto.password_confirmation)
                    .then(response => {
                        this.limpiarDatos('crear');
                        this.cargarDatos();
                    }).catch(error => {
                        console.log(error);
                    });
                }else{
                    alert("su contraseña no coincide");
                }
            },
            limpiarDatos(modal){
                this.objeto.id = null;
                this.objeto.nombre = "";
                this.objeto.email = "";
                this.objeto.telefono = "";
                this.objeto.rol = "";
                this.objeto.password = "";
                this.objeto.password_confirmation = "";
                this.objeto.estatus = null;
                if(modal == "crear") {
                    this.modal.modalCrear = false;
                }else if(modal == "editar") {
                    this.modal.modalEditar = false;
                }else if(modal == "eliminar"){
                    this.modal.modalBorrar = false;
                }
            }
        }
    };
</script>