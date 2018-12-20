import Vue from 'vue'
import Router from 'vue-router'
import RentalHousing from "./components/RentalHousing";
import Landing from "./components/Landing";
import Admin from "./components/Admin"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Landing
        },
        {
            path: '/form',
            name: 'form',
            component: RentalHousing
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        },

    ]
})

