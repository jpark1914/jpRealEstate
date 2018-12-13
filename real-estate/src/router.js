import Vue from 'vue'
import Router from 'vue-router'
import RentalHousing from "./components/RentalHousing";


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: RentalHousing
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/view',
            name: 'view',
            component: ViewComponent
        },

    ]
})

