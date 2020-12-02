<template>
    <div class="about">
        <v-form v-model="valid">
            <v-container>
                <v-row justify="center">
                    <v-col cols="10" sm="7" md="8">
                        <v-card class="pa-4 ma-8">
                            <v-row justify="center">
                                <v-col cols="12" md="6">
                                    <v-tooltip top>
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-text-field
                                                v-bind="attrs"
                                                v-on="on"
                                                v-model="answers.client_name"
                                                :rules="[
                                                    requiredRules(
                                                        'Client Name'
                                                    ),
                                                ]"
                                                outlined
                                                dense
                                            >
                                                <template v-slot:label>
                                                    {{
                                                        questionsState[0].qName
                                                    }}
                                                    <span class="red--text">
                                                        <strong>*</strong>
                                                    </span>
                                                </template>
                                            </v-text-field>
                                        </template>
                                        <span>enter your full name</span>
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-tooltip top>
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-select
                                                v-bind="attrs"
                                                v-on="on"
                                                v-model="answers.industry"
                                                :items="
                                                    questionsState[1].options
                                                "
                                                :label="questionsState[1].qName"
                                                :rules="[
                                                    requiredRules('Industry'),
                                                ]"
                                                dense
                                                outlined
                                            >
                                                <template v-slot:label>
                                                    {{
                                                        questionsState[1].qName
                                                    }}
                                                    <span class="red--text">
                                                        <strong>*</strong>
                                                    </span>
                                                </template>
                                            </v-select>
                                        </template>
                                        <span>Choose the industry</span>
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-tooltip top>
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-select
                                                v-bind="attrs"
                                                v-on="on"
                                                v-model="answers.client_size"
                                                :items="
                                                    questionsState[2].options
                                                "
                                                :rules="[
                                                    requiredRules(
                                                        'Client Size'
                                                    ),
                                                ]"
                                                dense
                                                outlined
                                            >
                                                <template v-slot:label>
                                                    {{
                                                        questionsState[2].qName
                                                    }}
                                                    <span class="red--text">
                                                        <strong>*</strong>
                                                    </span>
                                                </template>
                                            </v-select>
                                        </template>
                                        <span
                                            >Choose the size of the client</span
                                        >
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-tooltip top>
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-text-field
                                                v-bind="attrs"
                                                v-on="on"
                                                type="number"
                                                v-model.number="
                                                    answers.annual_revenue
                                                "
                                                :rules="[
                                                    requiredRules(
                                                        'Annual Revenue'
                                                    ),
                                                ]"
                                                outlined
                                                dense
                                            >
                                                <template v-slot:label>
                                                    {{
                                                        questionsState[3].qName
                                                    }}
                                                    <span class="red--text">
                                                        <strong>*</strong>
                                                    </span>
                                                </template>
                                            </v-text-field>
                                        </template>
                                        <span>enter the annual revenue</span>
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-tooltip top>
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-text-field
                                                v-bind="attrs"
                                                v-on="on"
                                                type="number"
                                                v-model.number="
                                                    answers.years_in_operation
                                                "
                                                :rules="[
                                                    requiredRules(
                                                        'Years In Operation'
                                                    ),
                                                ]"
                                                outlined
                                                dense
                                            >
                                                <template v-slot:label>
                                                    {{
                                                        questionsState[4].qName
                                                    }}
                                                    <span class="red--text">
                                                        <strong>*</strong>
                                                    </span>
                                                </template>
                                            </v-text-field>
                                        </template>
                                        <span>how many years in operation</span>
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-tooltip top>
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-select
                                                v-bind="attrs"
                                                v-on="on"
                                                v-model="
                                                    answers.product_service
                                                "
                                                :items="
                                                    questionsState[5].options
                                                "
                                                :label="questionsState[5].qName"
                                                :rules="[
                                                    requiredRules(
                                                        'Product Or Service'
                                                    ),
                                                ]"
                                                dense
                                                outlined
                                            >
                                                <template v-slot:label>
                                                    {{
                                                        questionsState[5].qName
                                                    }}
                                                    <span class="red--text">
                                                        <strong>*</strong>
                                                    </span>
                                                </template>
                                            </v-select>
                                        </template>
                                        <span
                                            >Choose your products or
                                            services</span
                                        >
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-tooltip top>
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-text-field
                                                v-bind="attrs"
                                                v-on="on"
                                                type="number"
                                                v-model.number="answers.budget"
                                                :label="questionsState[6].qName"
                                                :rules="[
                                                    requiredRules('Budget'),
                                                ]"
                                                outlined
                                                dense
                                                ><template v-slot:label>
                                                    {{
                                                        questionsState[6].qName
                                                    }}
                                                    <span class="red--text">
                                                        <strong>*</strong>
                                                    </span>
                                                </template>
                                            </v-text-field>
                                        </template>
                                        <span>enter your budget</span>
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-tooltip top>
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-text-field
                                                v-bind="attrs"
                                                v-on="on"
                                                type="number"
                                                v-model.number="
                                                    answers.campaign_period
                                                "
                                                :label="questionsState[7].qName"
                                                :rules="[
                                                    requiredRules(
                                                        'Period Of Campaign'
                                                    ),
                                                ]"
                                                outlined
                                                dense
                                            >
                                                <template v-slot:label>
                                                    {{
                                                        questionsState[7].qName
                                                    }}
                                                    <span class="red--text">
                                                        <strong>*</strong>
                                                    </span>
                                                </template>
                                            </v-text-field>
                                        </template>
                                        <span
                                            >enter period of campaign in
                                            days</span
                                        >
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="12">
                                    <v-tooltip top>
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-select
                                                v-bind="attrs"
                                                v-on="on"
                                                v-model="answers.consumer_type"
                                                :items="
                                                    questionsState[8].options
                                                "
                                                :label="questionsState[8].qName"
                                                :rules="[
                                                    requiredRules(
                                                        'Consumer Type'
                                                    ),
                                                ]"
                                                dense
                                                outlined
                                            >
                                                <template v-slot:label>
                                                    {{
                                                        questionsState[8].qName
                                                    }}
                                                    <span class="red--text">
                                                        <strong>*</strong>
                                                    </span>
                                                </template></v-select
                                            >
                                        </template>
                                        <span>choose a comsumer type</span>
                                    </v-tooltip>
                                </v-col>
                                <template
                                    v-if="answers.consumer_type === 'Business'"
                                >
                                    <v-col cols="12" md="6">
                                        <v-tooltip top>
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-select
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    v-model="
                                                        answers.target_industry
                                                    "
                                                    :items="
                                                        questionsState[9]
                                                            .options
                                                    "
                                                    :label="
                                                        questionsState[9].qName
                                                    "
                                                    :rules="[
                                                        businessRules(
                                                            'Consumer Type'
                                                        ),
                                                    ]"
                                                    dense
                                                    outlined
                                                >
                                                    <template v-slot:label>
                                                        {{
                                                            questionsState[9]
                                                                .qName
                                                        }}
                                                        <span class="red--text">
                                                            <strong>*</strong>
                                                        </span>
                                                    </template>
                                                </v-select>
                                            </template>
                                            <span
                                                >choose the target
                                                industry</span
                                            >
                                        </v-tooltip>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-tooltip top>
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-select
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    v-model="
                                                        answers.business_size
                                                    "
                                                    :items="
                                                        questionsState[10]
                                                            .options
                                                    "
                                                    :label="
                                                        questionsState[10].qName
                                                    "
                                                    :rules="[
                                                        businessRules(
                                                            'Consumer Type'
                                                        ),
                                                    ]"
                                                    dense
                                                    outlined
                                                >
                                                    <template v-slot:label>
                                                        {{
                                                            questionsState[10]
                                                                .qName
                                                        }}
                                                        <span class="red--text">
                                                            <strong>*</strong>
                                                        </span>
                                                    </template>
                                                </v-select>
                                            </template>
                                            <span
                                                >choose the business size</span
                                            >
                                        </v-tooltip>
                                    </v-col>
                                </template>
                                <template
                                    v-else-if="
                                        answers.consumer_type === 'Personal'
                                    "
                                >
                                    <v-col cols="12" md="6">
                                        <v-tooltip top>
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-select
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    v-model="
                                                        answers.gender_preference
                                                    "
                                                    :items="
                                                        questionsState[11]
                                                            .options
                                                    "
                                                    :label="
                                                        questionsState[11].qName
                                                    "
                                                    :rules="[
                                                        personalRules(
                                                            'Consumer Type'
                                                        ),
                                                    ]"
                                                    dense
                                                    outlined
                                                >
                                                    <template v-slot:label>
                                                        {{
                                                            questionsState[11]
                                                                .qName
                                                        }}
                                                        <span class="red--text">
                                                            <strong>*</strong>
                                                        </span>
                                                    </template>
                                                </v-select>
                                            </template>
                                            <span
                                                >select your gender
                                                preference</span
                                            >
                                        </v-tooltip>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-tooltip top>
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-select
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    v-model="
                                                        answers.geographic_preferecne
                                                    "
                                                    :items="
                                                        questionsState[12]
                                                            .options
                                                    "
                                                    :label="
                                                        questionsState[12].qName
                                                    "
                                                    :rules="[
                                                        personalRules(
                                                            'Consumer Type'
                                                        ),
                                                    ]"
                                                    dense
                                                    outlined
                                                >
                                                    <template v-slot:label>
                                                        {{
                                                            questionsState[12]
                                                                .qName
                                                        }}
                                                        <span class="red--text">
                                                            <strong>*</strong>
                                                        </span>
                                                    </template>
                                                </v-select>
                                            </template>
                                            <span
                                                >select your geographic
                                                preference</span
                                            >
                                        </v-tooltip>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-tooltip top>
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-select
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    v-model="
                                                        answers.life_stage_preference
                                                    "
                                                    :items="
                                                        questionsState[13]
                                                            .options
                                                    "
                                                    :label="
                                                        questionsState[13].qName
                                                    "
                                                    :rules="[
                                                        personalRules(
                                                            'Consumer Type'
                                                        ),
                                                    ]"
                                                    dense
                                                    outlined
                                                >
                                                    <template v-slot:label>
                                                        {{
                                                            questionsState[13]
                                                                .qName
                                                        }}
                                                        <span class="red--text">
                                                            <strong>*</strong>
                                                        </span>
                                                    </template>
                                                </v-select>
                                            </template>
                                            <span
                                                >select life stage
                                                preference</span
                                            >
                                        </v-tooltip>
                                    </v-col>
                                </template>
                                <v-col cols="12">
                                    <v-btn
                                        block
                                        @click="submitData"
                                        :disabled="!valid"
                                        :loading="loading"
                                        color="success"
                                    >
                                        Submit
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from "vuex";
// import axios from "axios";
import questions from "@/data.js";

export default {
    data: () => {
        return {
            questionsState: questions,
            valid: true,
            requiredRules(field) {
                return (v) => !!v || v === 0 || `${field} is required`;
            },
            businessRules(field) {
                return (v) =>
                    (this.answers.consumer_type == "Business" && !!v) ||
                    v === 0 ||
                    `${field} is required`;
            },
            personalRules(field) {
                return (v) =>
                    (this.answers.consumer_type == "Personal" && !!v) ||
                    v === 0 ||
                    `${field} is required`;
            },
        };
    },
    computed: {
        ...mapState(["answers", "loading"]),
    },
    methods: {
        submitData() {
            this.$store.dispatch("setAnswers", this.answers);
            // console.log(this.answers);
        },
    },
};
</script>
