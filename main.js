import Vue from 'vue'//引入vue
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'//引入页面

Vue.use(ElementUI); 
new Vue({
    el: '#app',
    render: h => h(App)//页面最开始展示的页面
})