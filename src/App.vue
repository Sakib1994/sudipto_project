<template>
  <v-app>
    <v-app-bar app color="grey darken-4" dark dense>
      <div class="d-flex align-center">
        <v-img
          alt="logo"
          contain
          :src="require('./assets/logo.png')"
          transition="scale-transition"
          width="70"
        />
        <router-link to="/">
          <v-img
            alt="logo"
            contain
            :src="require('./assets/rgadstext.png')"
            transition="scale-transition"
            width="90"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-menu top :close-on-content-click="closeOnContentClick">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
              User
            <v-icon>mdi-arrow-down-drop-circle-outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <template v-if="!token">
                <v-btn text to="/login">
                  <span class="mr-2">Login</span>
                  <v-icon>mdi-login-variant</v-icon>
                </v-btn>
              </template>
              <template v-else>
                <v-btn text @click="handleLogout">
                  <span class="mr-2">Log Out</span>
                  <v-icon>mdi-logout-variant</v-icon>
                </v-btn>
              </template>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer app padless>
      <v-row dense no-gutters class="grey lighten-5 text-justify">
        <v-col class="grey lighten-5 text-justify" cols="12" md="10">
          <div class="ml-7 mt-1" style="color: #032a7f; font-size: 10px; ">
            Copyright
            {{ new Date().getFullYear() }} — Rgads. | All rights reserved.
          </div>
        </v-col>

        <v-col class="grey lighten-5 mb-1 pl-7" cols="12" md="2" align="left">
          <div class="mr-1">
            <router-link
              style="textDecoration: none; color: #032a7f;font-size: 11px; font-weight: bold"
              to="/"
              @click.stop
              >Privacy Agreement</router-link
            >
            {{ " | " }}
            <router-link
              style="textDecoration: none; color: #032a7f;font-size: 11px; font-weight: bold"
              to="/"
              @click.stop
              >How it works</router-link
            >
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    token: "",
    closeOnContentClick: true
  }),
  created() {
    this.token = localStorage.getItem("token");
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("token");
      this.token = "";
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
