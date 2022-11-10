<template>
<!-- component -->


    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <div class="font-semibold text-gray-800">TICKET DE COMPRA</div>
            </header>

            <div class="overflow-x-auto p-3">
                <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th class="p-2">
                                <div class="font-semibold text-left">Nombre producto</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-left">Cantidad</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-left">Precio</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="text-sm divide-y divide-gray-100">
                        <!-- record 1 -->
                        <tr>
                            <td class="p-2">
                                <div class="text-left text-gray-800">
                                    Jugo limón
                                </div>
                            </td>
                            <td class="p-2">
                                <div class="text-left">3</div>
                            </td>
                            <td class="p-2">
                                <div class="text-left font-medium text-green-500">
                                    MXN $100
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2">
                                <div class="text-left text-gray-800">
                                    Jugo naranja
                                </div>
                            </td>
                            <td class="p-2">
                                <div class="text-left">3</div>
                            </td>
                            <td class="p-2">
                                <div class="text-left font-medium text-green-500">
                                    MXN $100
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2">
                                <div class="text-left text-gray-800">
                                    Kilo de Naranja
                                </div>
                            </td>
                            <td class="p-2">
                                <div class="text-left">3</div>
                            </td>
                            <td class="p-2">
                                <div class="text-left font-medium text-green-500">
                                    MXN $100
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- total amount -->
            <div class="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                <div>Total</div>
                <div class="text-green-600">300 <span x-text="total.toFixed(2)">MXN</span></div>
            </div>

            <div class="flex justify-end">
                <!-- send this data to backend (note: use class 'hidden' to hide this input) -->
                <input type="hidden" class="border border-black bg-gray-50" x-model="selected" />
            </div>
        </div>
    </div>



</template>

<script>
    export default {
        name: "Ticket",
    };
</script>