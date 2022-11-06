<template>
    <!-- Container -->
		<div class="bg-gray-200">
			<div class="flex justify-center px-6 container mx-auto">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex rounded-lg border-4 border-indigo-500/100">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style="background-image:url('https://www.gastrolabweb.com/u/fotografias/m/2021/5/4/f638x638-12673_70840_5050.jpg')"></div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center text-gray-700">Registrate como cliente!</h3>
						<form action class="px-8 pt-6 pb-8 mb-4 bg-white rounded" @submit.prevent="register">
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										Nombre completo
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="nombre" required
										type="text" v-model="nombre"
										placeholder="Persona o empresa"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Razon social
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="razon_social" required
										type="text" v-model="razon_social"
										placeholder="Omitir si es persona fisica"
									/>
								</div>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email" required
									type="email" v-model="email"
									placeholder="Email"
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									RFC
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="rfc" required
									type="text" v-model="rfc"
									placeholder="13 para persona fisica o 12 para persona moral"
									minlength="12"
									maxlength="13"
								/>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
										Password
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password" required v-model="password"
										type="password"
										placeholder="******************"
									/>
									<!-- <p class="text-xs italic text-red-500">Please choose a password.</p> -->
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
										Confirm Password
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password" required v-model="c_password"
										type="password"
										placeholder="******************"
									/>
								</div>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										Telefono
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="telefono" required v-model="telefono"
										type="number"
										placeholder="Solo nuevo leon"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Direccion
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="direccion" required v-model="direccion"
										type="text"
										placeholder="Seleccione su direccion"
									/>
								</div>
							</div>
							<p v-if="this.error" class="error bg-red-500 text-red-100">Has introducido mal el email o la contraseña.</p>
							<div class="mb-6 text-center">
								<button
									onclick="return this.register"
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								>
									Registrarme
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Olvidaste tu contraseña?
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									Ya tienes cuenta? Dirigete al login!
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	import auth from "../../logic/auth";
    export default {
        name: "Register",
		data: () => ({
			nombre: "",
            email: "",
			telefono: "",
			rfc: "",
			razon_social: "",
			direccion: "",
            password: "",
			c_password: "",
            error: false
        }),
        methods: {
            register() {
				try {
					auth.register(this.email, this.password).then(response => {
						this.$router.push("/cliente")
					});
				} catch (error) {
					this.error = true
				}
            }
        }
    };
</script>