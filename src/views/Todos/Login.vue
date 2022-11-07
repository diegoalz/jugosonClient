<template>
    <div class="h-screen w-full flex justify-center items-center bg-gradient-to-tr from-green-900 to-green-500">
        <div class="bg-image w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-blue-600">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-opacity-25 bg-blue-600 backdrop">
            <h1 class="text-3xl md:text-4xl font-extrabold text-white my-2 md:my-0">
            Jugonson
            </h1>
            <p class="mb-2 text-white hidden md:block font-mono">
            El nectar mas fresco de la region
            </p>
        </div>
        <div class="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
            <h3 class="mb-4 font-bold text-3xl flex items-center text-blue-500">
            LOGIN
            </h3>
            <form action class="px-3 flex flex-col justify-center items-center w-full gap-3" @submit.prevent="login"> <!--El submit prevent sirve para que una pagina no recergue ante la accion de un boton-->
            <input 
                id="email" type="email" placeholder="email.." v-model="email" required
                class="text-black px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
            >
            <input 
                id="password" type="password" placeholder="password.." v-model="password" required
                class="text-black px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
            >
            <select id="tipoCuenta" name="tipoCuenta" v-model="tipo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="cliente">Cliente</option>
                <option value="usuario">Usuario</option>
            </select>
            <button onclick="return this.login" class="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring rounded px-3 py-1">
                <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                </svg>
                <p class="ml-1 text-lg">
                Login
                </p>
            </button>
                <p v-if="this.error" class="error bg-red-500 text-red-100">Has introducido mal el email o la contraseña.</p>
            </form>
            <p class="text-gray-700 text-sm mt-2">
            Ya tienes cuenta?
            <!-- <a href="#" class="text-green-500 hover:text-green-600 mt-3 focus:outline-none font-bold underline">
                register
            </a> -->
            <router-link class="text-green-500 hover:text-green-600 mt-3 focus:outline-none font-bold underline" to="/register">Register</router-link>
            </p>
        </div>
        </div>
    </div>
</template>

<script>
    import auth from "../../logic/auth";
    export default {
        name: "Login",
        data: () => ({
            email: "",
            password: "",
            tipo: "cliente",
            error: false
        }),
        methods: {
            login() {
                try {
                    if (this.tipo === 'cliente') {
                        auth.login_client(this.email, this.password).then(response => {        
                            if(response.data.status === 200) { // El status original siempre regresara 200 por eso usamos data
                                auth.setUserLogged(response);
                                // console.log(response);
                                this.$router.push(`/${response.data.rol}`);
                            }else{
                                this.error = true;
                            }
                        });
                    } else if(this.tipo === 'usuario'){
                        auth.login_user(this.email, this.password).then(response => {
                            if (response.data.status === 200) { // El status original siempre regresara 200 por eso usamos data
                                auth.setUserLogged(response);
                                // console.log(response.data.rol);
                                this.$router.push(`/${response.data.rol}`);
                            }else{
                                this.error = true;
                            }
                        });
                    }
                } catch (error) {
                    this.error = true
                }
            }
        }
    };
</script>
<style scoped>
    .bg-image {
        background-image: url(https://www.gob.mx/cms/uploads/article/main_image/115793/NARANJAS_Mesa_de_trabajo_1.jpg);
    }
    .backdrop {
        backdrop-filter: blur(2px);
    }
</style>