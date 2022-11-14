<template>
            <button @click="modal.modalCrear = true" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 px-3 my-4 py-2 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded margin ">
                <p class="text-sm font-medium leading-none text-white">Agregar usuario</p>
            </button>
            <!-- Modal crear -->
        <div class="py-12 bg-gray-700/50 z-10 fixed top-0 right-0 bottom-0 left-0" id="modal" v-show="modal.modalCrear">
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
                        <input v-model="objeto.telefono" id="telefono" pattern="^[0-9]{10}$" type="text" minlength="10" maxlength="10" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="00000000" />
                        <label for="rol" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Rol</label>
                        <select id="rol" name="rol" v-model="objeto.rol" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="repartidor">Repartidor</option>
                            <option value="admin">Administrador</option>
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
                                    <div class="text-left font-medium text-gray-800">{{(usuario.estatus == true)?"Activo":"Inactivo"}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                        <div class="flex flex-row justify-center">
                                            <div>
                                                <button @click="abrirModalEditar(usuario)" type="button">
                                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </a>
                                                </button>
                                            </div>
                                            <div>
                                                <button @click="avisoBorrar(usuario)" type="button">
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
                            <p v-else="result">Cargando...</p>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
<!-- modasl edit -->

<div class="py-12 bg-gray-700/50 z-10 fixed top-0 right-0 bottom-0 left-0" id="modal" v-show="modal.modalEditar">
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div class="w-full flex justify-start text-gray-600 mb-3">

                    <svg class="h-16 w-16 text-blue-500"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>

                </div>
                <form action @submit.prevent="editarUsuario" class="h-80 overflow-auto">
                    <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Modifica el pedido</h1>
                    <label for="nombre_edit" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Nombre del usuario</label>
                    <input v-model="objeto.nombre" id="nombre_edit" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Nombre completo" />
                    <label for="email_edit" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Email</label>
                    <input type="email" v-model="objeto.email" name="email_edit" id="email_edit" placeholder="ejemplo@gmail.com" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                    <label for="telefono_edit" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Telefono</label>
                    <input v-model="objeto.telefono" id="telefono_edit" type="text" pattern="^[0-9]{10}$" minlength="10" maxlength="10" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="00000000" />
                    <label for="rol_edit" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Rol</label>
                    <select id="rol_edit" name="rol_edit" v-model="objeto.rol" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="repartidor">Repartidor</option>
                        <option value="admin">Administrador</option>
                    </select>
                    <label for="password_edit" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Contraseña</label>
                    <input v-model="objeto.password" id="password_edit" type="password" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="password" />
                    <label for="password_confirmation_edit" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Confirme contraseña</label>
                        <input v-model="objeto.password_confirmation" id="password_confirmation_edit" type="password" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="password confirmation" />
    
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

<!-- modal edit fin -->


<!-- modal borrar -->

<div class="py-12 bg-gray-700/50 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  v-show="modal.modalBorrar">
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
            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"  @click="limpiarDatos('eliminar')">
                Cancelar
            </button>
            <button @click="bajaUsuario()" class="mb-2 md:mb-0 bg-green-600 border border-green-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-orange-600">Cambiar</button>
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
                if(this.objeto.password === this.objeto.password_confirmation){
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
            editarUsuario(){
                adminControl.editar_users(this.objeto.id, this.objeto.nombre, this.objeto.email, this.objeto.telefono, this.objeto.rol, this.objeto.password, this.objeto.password_confirmation, this.objeto.estatus)
                .then(response => {
                    this.limpiarDatos("editar");
                    this.cargarDatos();
                }).catch(error => {
                    console.log(error)
                });
            },
            bajaUsuario(){
                adminControl.estatus_users(this.objeto.estatus, this.objeto.id).then(response => {
                    this.limpiarDatos("eliminar");
                    this.cargarDatos();
                }).catch(error => {
                    console.log(error);
                });
            },
            // Funciones para abrir los modales
            abrirModalEditar(seleccionado){
                this.modal.modalEditar = true;
                this.objeto.id = seleccionado.id;
                this.objeto.email = seleccionado.email;
                this.objeto.nombre = seleccionado.nombre;
                this.objeto.telefono = seleccionado.telefono;
                this.objeto.rol = seleccionado.rol;
                this.objeto.direccion = seleccionado.direccion;
                this.objeto.password = seleccionado.password;
            },
            avisoBorrar(seleccionado){
                this.modal.modalBorrar = true;
                this.objeto.id = seleccionado.id;
                this.objeto.estatus = seleccionado.estatus
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
            },
        }
    };
</script>