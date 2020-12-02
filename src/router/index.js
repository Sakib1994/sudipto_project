import Vue from "vue";
import VueRouter from "vue-router";
//  import Store  from '@/store'
// import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
        path: "/",
        name: "Form",
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "Form" */ "../views/Form.vue"),
    },
    {
        path: "/result",
        name: "Result",
        meta: { requiresAuth: true },
        component: () =>
            import(/* webpackChunkName: "Result" */ "../views/Result.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    },
    {
        path: "/(.*?)",
        redirect: '/'
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (!localStorage.getItem("token")) {
            next({ name: "Login" });
        } else next();
    } else next();
});
export default router;
