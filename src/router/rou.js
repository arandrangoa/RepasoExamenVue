import { createRouter, createWebHashHistory } from "vue-router";

import IngresarProducto from '../pages/IngresarProducto.vue'
import RealizarVenta from '../pages/RealizarVenta.vue'

const routes=[
    {
        path:'/producto/ingresar',
        component: IngresarProducto
    },
    {
        path:'/venta/realizar',
        component: RealizarVenta
    },
];

const router= createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;