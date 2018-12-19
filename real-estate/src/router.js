import Vue from 'vue'
import Router from 'vue-router'
import RentalHousing from "./components/RentalHousing";
import Landing from "./components/Landing";


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
            path: '/view',
            name: 'view',
            component: ViewComponent
        },

    ]
})

