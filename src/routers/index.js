import Vue from 'vue'//引入vue
import VRouter from 'vue-router'

import Dashboard from '../pages/Dashboard.vue'
import Layouts from '../pages/Layouts.vue'

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/layouts', component: Layouts }
]
export default routes;