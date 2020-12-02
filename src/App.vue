<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <router-link to="/">
          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
      >
        <span class="mr-2">Hi User</span>
      </v-btn>
      <template v-if="!token">
        <v-btn text to="/login">
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      </template>
      <template v-else>
        <v-btn text @click="handleLogout">
        <span class="mr-2">Log Out</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      </template>
      
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({
    token: ''
  }),
  created(){
    this.token = localStorage.getItem('token');
  },
  methods:{
    handleLogout(){
      localStorage.removeItem('token');
      this.token = '';
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>
