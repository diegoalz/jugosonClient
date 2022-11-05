<template>
    <h1>Pagina de control de productos</h1>
    <table class="table-fixed">
    <thead class="bg-green-900">
        <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Year</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
        <td>1961</td>
        </tr>
        <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972</td>
        </tr>
        <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975</td>
        </tr>
    </tbody>
    </table>
</template>

<script>
import axios from 'axios'
    export default {
        name: "CrudProductos",
        data: () => ({
            result: null,
        }),
        mounted() {
            this.getValues();
        },
        methods: {
            getValues(){
                axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
                    return this.result = result.data;
                    // console.log(result.data);
                })
            }
        }
    };
</script>

<style>
#ajust-size{
    padding: 0 5% 0 5%;
}
th {
    width: 20%;
}
td {
    width: 20%;
}
</style>