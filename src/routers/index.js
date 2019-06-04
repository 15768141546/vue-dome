import Vue from 'vue'//引入vue
import VRouter from 'vue-router'

import Dashboard from '../components/Dashboard.vue'
import Layouts from '../components/Layouts.vue'

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/layouts', component: Layouts }
]
export default routes;