import axios from "axios";

const ENDPOINT_PATH = "https://jugosonbackend-production.up.railway.app/api/";

export default {
    // Guardar tokens de autenticacion
    setUserLogged(userLogged) {
        sessionStorage.access_token = userLogged.data.access_token;
        sessionStorage.rol = userLogged.rol;
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.access_token}`;
    },
    getUserLogged() {
        return sessionStorage.token;
    },
    getUserLoggout() {
        if (sessionStorage.rol == 'cliente') {
            return axios.get(ENDPOINT_PATH + "client_logout");
        }else{
            return axios.get(ENDPOINT_PATH + "logout");
        }
    },
    // Para los administradores y repartidores
    register_user(email, password) {
        const user = { email, password };
        return axios.post(ENDPOINT_PATH + "regiser", user);
    },
    login_user(email, password) {
        const user = { email, password };
        return axios.post(ENDPOINT_PATH + "login", user);
    },
    // Para los clientes
    register_client(nombre, email, RFC, password, password_confirmation, direccion, telefono, razon_social) {
        const client = { nombre, email, razon_social, RFC, password, password_confirmation, direccion, telefono };
        return axios.post(ENDPOINT_PATH + "client_register", client);
    },
    login_client(email, password) {
        const client = { email, password };
        return axios.post(ENDPOINT_PATH + "client_login", client);
    },
};