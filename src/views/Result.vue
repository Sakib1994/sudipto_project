<template>
    <div class="result">
        <h1>Result</h1>
        <v-container>
            <v-card class="mb-6">
                <v-row justify="space-around">
                    <v-card-title>Media Recommendations</v-card-title>
                    <v-card-text>
                        <v-row justify="space-around">
                            <v-col cols="12" sm="6" md="4">
                                <v-card>
                                    <h3>Cash Distribution</h3>
                                    <PieChart
                                        :chartdata="chartdata1"
                                        :options="options"
                                    />
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-card>
                                    <h3>Spend distribution</h3>
                                    <PieChart
                                        :chartdata="chartdata2"
                                        :options="options"
                                    />
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-row>
            </v-card>
            <v-card>
                <v-row justify="space-around">
                    <v-card-title>
                        Spend Recommendations
                    </v-card-title>
                </v-row>
                <v-card-text>
                    <v-row justify="space-around">
                        <v-col cols="12" sm="6">
                            <v-card>
                                <h3>Spend Distribution Table</h3>
                                <Table :data="spendTableData" />
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-card>
                                <h3>Print Spend Distribution Table</h3>
                                <Table :data="printSpendTableData" />
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-card>
                                <h3>Radio Spend Distribution Table</h3>
                                <Table :data="radioSpendTableData" />
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-card>
                                <h3>TV Spend Distribution Table</h3>
                                <Table :data="tvSpendTableData" />
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
// import axios from "axios";
import { mapState } from "vuex";
import PieChart from "@/components/PieChart";
import Table from "@/components/Table";
import objectToArray from "@/processData";

export default {
    data() {
        return {
            chartdata1: {},
            chartdata2: {},
            spendTableData: [],
            tvSpendTableData: [],
            radioSpendTableData: [],
            printSpendTableData: [],
            options: {
                responsive: true,
                plugins: {
                    labels: {
                        render: "percentage",

                        precision: 2,
                    },
                },
            },
        };
    },
    components: {
        PieChart,
        Table,
    },
    computed: {
        ...mapState([
            "username",
            "response_id",
            "cash_distribution",
            "spend_distribution",
            "print_spend_distribution",
            "radio_spend_distribution",
            "tv_spend_distribution",
        ]),
    },
    methods: {
        // getStatus() {
        //   axios.get("status").then((res) => {
        //     console.log(res.data);
        //     this.status = res.data.message;
        //   });
        // },
    },
    created() {
        let values = Object.values(this.cash_distribution).map(
            (c) => (c = c * 100)
        );
        let keys = Object.keys(this.cash_distribution);
        let colorHex = ["#415A77", "#D9DD92", "#778DA9", "#DD6031"];

        this.chartdata1 = {
            datasets: [
                {
                    data: values,
                    backgroundColor: colorHex,
                },
            ],
            labels: keys,
        };
        this.printSpendTableData = objectToArray(this.print_spend_distribution);
        this.radioSpendTableData = objectToArray(this.radio_spend_distribution);
        this.tvSpendTableData = objectToArray(this.tv_spend_distribution);
        this.spendTableData = objectToArray(this.spend_distribution);

        values = Object.values(this.spend_distribution);
        keys = Object.keys(this.spend_distribution);
        this.chartdata2 = {
            datasets: [
                {
                    data: values,
                    backgroundColor: colorHex,
                },
            ],
            labels: keys,
        };
    },
};
</script>

<style>
h3,
h1 {
    text-align: center;
}
</style>
