<template>
    <v-app id="main-container">
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
            <v-btn to="/" text v-if="this.$router.currentRoute.path ==='/result'">
                submit again
            </v-btn>
            <v-menu top :close-on-content-click="closeOnContentClick">
                <template v-slot:activator="{ on, attrs }">
                    <v-col cols="1" sm="1">
                        <v-btn right icon dark v-bind="attrs" v-on="on">
                            <v-icon>mdi-account-cog</v-icon>
                        </v-btn>
                    </v-col>
                </template>

                <v-list>
                    <v-list-item v-if="!token">
                        <v-list-item-title>
                            <template >
                                <span >
                                    Please log in
                                </span>
                            </template>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="token">
                        <v-list-item-title>
                            <template>
                                <span class="ma-2" v-if="username">{{
                                    username
                                }}</span>
                            </template>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="token">
                        <v-list-item-title>
                            <template>
                                <v-btn
                                    color="red"
                                    padless
                                    small
                                    text
                                    @click="handleLogout"
                                >
                                    <v-icon small left
                                        >mdi-logout-variant</v-icon
                                    >
                                    <span>log out</span>
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
                    <div
                        class="ml-7 mt-1"
                        style="color: #032a7f; font-size: 10px; "
                    >
                        Copyright
                        {{ new Date().getFullYear() }} — Rgads. | All rights
                        reserved.
                    </div>
                </v-col>

                <v-col
                    class="grey lighten-5 mb-1 pl-7"
                    cols="12"
                    md="2"
                    align="left"
                >
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
                            to="/about"
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
// import { mapState } from "vuex";
export default {
    name: "App",
    data: () => ({
        token: "",
        closeOnContentClick: true,
        username: ""
    }),
    created() {
        this.token = localStorage.getItem("token");
        this.username = localStorage.getItem("username");
    },
    beforeUpdate() {
        if (!localStorage.getItem("token")) {
            this.token = "";
        } else if (localStorage.getItem("token")) {
            this.token = localStorage.getItem("token");
        }
        if (localStorage.getItem("username")) {
            this.username = localStorage.getItem("username");
        }
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
<style>
#main-container {
    background-image: linear-gradient(to right top, #4545f5 30%, violet);
}
</style>
