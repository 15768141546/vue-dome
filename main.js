import Vue from 'vue'//引入vue
import VRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './src/App.vue'//引入页面
import routes from './src/routers/index.js'


Vue.use(VRouter); 
Vue.use(ElementUI); 


const router = new VRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
    el: '#app',
    router,      
    render: h => h(App)//页面最开始展示的页面
})