<template>
  <div class="about">
    <v-form v-model="valid">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="4">
            <v-card class="pa-2 ma-2">
              <v-row justify="center">
                <v-col cols="12">
                  <v-text-field
                    v-model="answers.client_name"
                    :label="questionsState[0].qName"
                    :rules="[requiredRules('Client Name')]"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="answers.industry"
                    :items="questionsState[1].options"
                    :label="questionsState[1].qName"
                    :rules="[requiredRules('Industry')]"
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="answers.client_size"
                    :items="questionsState[2].options"
                    :label="questionsState[2].qName"
                    :rules="[requiredRules('Client Size')]"
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model.number="answers.annual_revenue"
                    :label="questionsState[3].qName"
                    :rules="[requiredRules('Annual Revenue')]"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model.number="answers.years_in_operation"
                    :label="questionsState[4].qName"
                    :rules="[requiredRules('Years In Operation')]"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="answers.product_service"
                    :items="questionsState[5].options"
                    :label="questionsState[5].qName"
                    :rules="[requiredRules('Product Or Service')]"
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model.number="answers.budget"
                    :label="questionsState[6].qName"
                    :rules="[requiredRules('Budget')]"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model.number="answers.campaign_period"
                    :label="questionsState[7].qName"
                    :rules="[requiredRules('Period Of Campaign')]"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="answers.consumer_type"
                    :items="questionsState[8].options"
                    :label="questionsState[8].qName"
                    :rules="[requiredRules('Consumer Type')]"
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <template v-if="answers.consumer_type === 'Business'">
                  <v-col cols="12">
                    <v-select
                      v-model="answers.target_industry"
                      :items="questionsState[9].options"
                      :label="questionsState[9].qName"
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="answers.business_size"
                      :items="questionsState[10].options"
                      :label="questionsState[10].qName"
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                </template>
                <template v-else-if="answers.consumer_type === 'Personal'">
                  <v-col cols="12">
                    <v-select
                      v-model="answers.gender_preference"
                      :items="questionsState[11].options"
                      :label="questionsState[11].qName"
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="answers.geographic_preferecne"
                      :items="questionsState[12].options"
                      :label="questionsState[12].qName"
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="answers.life_stage_preference"
                      :items="questionsState[13].options"
                      :label="questionsState[13].qName"
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                </template>
                <v-btn
                  @click="submitData"
                  :disabled="!valid"
                  :loading="loading"
                  class="ma-2"
                  outlined
                  color="success"
                >
                  Submit
                </v-btn>
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
