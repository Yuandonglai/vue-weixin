import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
//weui样式
import 'weui'

import axios from 'axios'

Vue.prototype.axios= axios;


//发布的时候，代码错误不提醒
Vue.config.productionTip = false; 

new Vue({ 
  router,
  render: h => h(App),
}).$mount('#app')
