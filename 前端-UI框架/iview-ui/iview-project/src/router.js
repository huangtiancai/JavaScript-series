const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }, {
        path: 'grid',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/Grid.vue'], resolve)
    }
];
export default routers;