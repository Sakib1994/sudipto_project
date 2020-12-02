<template>
    <v-form>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="6">
                <v-card color="deep-purple lighten-5">
                    <v-row justify="center" align="center">
                        <v-col cols="6" sm="5">
                            <img
                                src="@/assets/logo.png"
                                width="100%"
                                alt="Company Logo"
                            />
                        </v-col>
                        <v-col cols="12" sm="7">
                            <v-card class="ma-2 pa-2">
                                <v-row justify="center">
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model.trim="username"
                                            label="Username"
                                            :append-icon="'mdi-account-plus'"
                                            :rules="[rules.required]"
                                            outlined
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model.trim="password"
                                            :type="
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            :append-icon="
                                                showPassword
                                                    ? 'mdi-eye'
                                                    : 'mdi-eye-off'
                                            "
                                            @click:append="
                                                showPassword = !showPassword
                                            "
                                            label="Password"
                                            :rules="[rules.required, rules.min]"
                                            outlined
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-btn
                                            @click="login"
                                            :loading="loading"
                                            block
                                            color="success"
                                        >
                                            Login
                                            <v-icon>mdi-login-variant</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
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
            await this.$store.dispatch("setAccessToken", {
                username: this.username,
                password: this.password,
            });
        },
    },
};
</script>
