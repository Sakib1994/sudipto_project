import Vue from "vue";
import VueRouter from "vue-router";
//  import Store  from '@/store'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Form",
        meta: { title: "Customer Profile - RGads", requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "Form" */ "../views/Form.vue"),
    },
    {
        path: "/result",
        name: "Result",
        meta: { title: "Result - RGads", requiresAuth: true },
        component: () =>
            import(/* webpackChunkName: "Result" */ "../views/Result.vue"),
    },
    {
        path: "/login",
        name: "Login",
        meta: { title: "Login - RGads" },
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    },
    {
        path: "/about",
        name: "About",
        meta: { title: "About - RGads" },
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/About.vue"),
    },
    {
        path: "/(.*?)",
        redirect: "/",
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
