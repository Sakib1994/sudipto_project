<template>
    <v-simple-table dense>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                        Product
                    </th>
                    <th class="text-left">
                        Investment
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.cost.toLocaleString() }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: null,
        },
    },

    data: () => ({}),
};
</script>

<style></style>
