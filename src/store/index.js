import router from '@/router'
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    accessToken: "",
    username: "",
    response_id: "",
    error: "",
    cash_distribution: {},
    spend_distribution: {},
    print_spend_distribution: {},
    radio_spend_distribution: {},
    tv_spend_distribution: {},
    answers: {
      client_name: "",
      industry: "",
      client_size: "",
      annual_revenue: "",
      years_in_operation: "",
      product_service: "",
      budget: "",
      campaign_period: "",
      consumer_type: "",
      target_industry: "",
      business_size: "",
      gender_preference: "",
      geographic_preferecne: "",
      life_stage_preference: "",
    }
  },
  mutations: {
    setAnswers: (state, payload) => (state.answers = payload),
    setAccessToken: (state, payload) => (state.accessToken = payload),
    setLoadingToogle: (state, payload) => (state.loading = payload),
    setResponse_id: (state, payload) => (state.response_id = payload),
    setUsername: (state, payload) => (state.username = payload),
    setCashDistribution: (state, payload) => (state.cash_distribution = payload),
    setSpendDistribution: (state, payload) => (state.spend_distribution = payload),
    setPrintSpendDistribution: (state, payload) => (state.print_spend_distribution = payload),
    setRadioSpendDistribution: (state, payload) => (state.radio_spend_distribution = payload),
    setTvSpendDistribution: (state, payload) => (state.tv_spend_distribution = payload),
    setError: (state, payload) => (state.error = payload),
  },
  actions: {
    setAnswers: ({ commit }, payload) => {
      commit("setLoadingToogle", true);
      let payloadJson = {
        client_name: payload.client_name,
        industry: payload.industry,
        client_size: payload.client_size,
        annual_revenue: parseInt(payload.annual_revenue),
        years_in_operation: parseInt(payload.years_in_operation),
        product_service: payload.product_service,
        budget: parseInt(payload.budget),
        campaign_period: parseInt(payload.campaign_period),
        consumer_type: payload.consumer_type,
        target_industry: payload.target_industry,
        business_size: payload.business_size,
        gender_preference: payload.gender_preference,
        geographic_preferecne: payload.geographic_preferecne,
        life_stage_preference: payload.life_stage_preference,
      };
      if (payload.consumer_type === 'Business') {
        payloadJson.gender_preference = ""
        payloadJson.geographic_preferecne = ""
        payloadJson.life_stage_preference = ""
      } else {
        payloadJson.target_industry = ""
        payloadJson.business_size = ""
      }
      // console.log(payloadJson);
      axios.post("submit", payloadJson,
        {
          headers: {
            'x-access-token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        }
      ).then(response => {
        console.log(response);
        const { response_id, username, cash_distribution,
          spend_distribution,
          print_spend_distribution,
          radio_spend_distribution,
          tv_spend_distribution } = response.data;
        commit("setResponse_id", response_id);
        commit("setUsername", username);
        commit("setCashDistribution", cash_distribution);
        commit("setSpendDistribution", spend_distribution);
        commit("setPrintSpendDistribution", print_spend_distribution);
        commit("setRadioSpendDistribution", radio_spend_distribution);
        commit("setTvSpendDistribution", tv_spend_distribution);
        commit("setLoadingToogle", false);
        router.push({ name: 'Result' });
      })
        .catch(error => {
          console.log("Errod sb ", error);
          commit("setLoadingToogle", false);
        });
      commit("setAnswers", payload);
    },
    setAccessToken: ({ commit }, payload) => {
      commit("setLoadingToogle", true);
      axios
        .get("login", {
          auth: {
            username: payload.username,
            password: payload.password,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            const {token, username}  = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            commit("setAccessToken", token);
            commit("setUsername", username);
            commit("setLoadingToogle", false);
            router.push({ name: 'Form' });
          }
        })
        .catch(error => {
          console.log(error);
          commit("setError", "please try with diffent Username password combination");
          setTimeout(()=>{
            commit("setLoadingToogle", false);
          },1000);
        });
    }
  },
  modules: {
  }
})
