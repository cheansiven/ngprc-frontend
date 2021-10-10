import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

// Axios Mock Adapter
import '@/@fake-db/db'

// Comment code below if you want to use local fake db
import Axios from 'axios'
import VueCookies from 'vue-cookies'

import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'
// ----------------------------------------------------

// Global Components
import './global-components'

// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

// comment code below if you import '@/@fake-db/db'
Vue.prototype.$http = Axios
Vue.prototype.$cookies = VueCookies
Axios.defaults.baseURL = process.env.VUE_APP_API_URL
Axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
Axios.defaults.headers.get['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, OPTIONS, post, get'
Axios.defaults.headers.get['Access-Control-Max-Age'] = '3600'
Axios.defaults.headers.get['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token'
Axios.defaults.headers.get['Access-Control-Allow-Credentials'] = 'true'
// ------------------------------------------------

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require('@core/assets/fonts/feather/iconfont.css') // For form-wizard

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
