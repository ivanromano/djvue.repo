import { createRouter, createWebHistory } from 'vue-router'
import home from "./pages/home.vue";
import tecnologias from './pages/tecnologias.vue'
import detalles from './pages/Detalles.vue'
import { useDjangoStore } from './stores/dJstore';
import useNotification from './composables/useNotificacion';

// import Home from "./views/Home.vue";

// en la api de node funciona, pero intento que ande en django
const requireAuth = async(to, from, next) => {
	const DjangoStore = useDjangoStore()
	// si el usuario existe, que pase lo que tenga que pasar, sino, que vaya al login
	if (DjangoStore.token) {
		next()
	} else {
        useNotification('¡Espera!', 'warning', 'Necesitas iniciar sesion primero')
		next("/")
	}
}


const routes = [
    {path: '/', component: home},
    {path: '/tecnologias', component: tecnologias, beforeEnter: requireAuth, children: [{path: '/detalles/:id', component: detalles}]},

    
    // {path: '/superiorhome', component: SuperiorHome, children: [{
    //     path: '/detalles/:id', component: Detalles
    // }]},
    // {path: '/detalles/:id', beforeEnter: requireAuth},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router
