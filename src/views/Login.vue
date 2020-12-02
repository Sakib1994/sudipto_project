<template>
  <v-form>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model.trim="username"
            label="Username"
            :rules="[rules.required]"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model.trim="password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            label="Password"
            :rules="[rules.required, rules.min]"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn
          @click="login"
          :loading="loading"
          class="ma-2"
          outlined
          color="success"
        >
          Submit
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
// import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
      showPassword: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },
  computed: {
    ...mapState(["loading"]),
  },
  methods: {
    async login() {
       await this.$store
        .dispatch("setAccessToken", {
          username: this.username,
          password: this.password,
        });

      // this.$router.push({ name: 'Form' });
      // axios
      // .get("login", {
      //   auth: {
      //     username: this.username,
      //     password: this.password,
      //   },
      // })
      // .then((response) => {
      //   if (response.status === 200) {
      //     localStorage.setItem("token", response.data.token);
      //     console.log(response.data.token);
      //     this.$router.push({ path: 'Form' })
      //   }
      //   console.log(response);
      // });
    },
  },
};
</script>

<style></style>
