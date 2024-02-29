const routes=[
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: () => import('@/views/home-page.vue'),
    },
    {
        path: "/about",
        name: "about",
        component: () => import('@/views/about-site.vue'),
    },
];

export default routes