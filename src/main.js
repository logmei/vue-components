import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import EditTable from './components/EditTable'
import Input from './tests/Input'

Vue.use(Router)
Vue.use(ElementUI)

Vue.config.productionTip = false


const router = new Router({
  routes : [
            {path:'/editTable',name:'editTable',component:EditTable},
            {path:'/inputClean',name:'inputClean',component:Input}
          ]
    })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
