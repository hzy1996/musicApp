import Vue from 'vue'

import router from './router'
import store from './store'
import directives from './directives'

export default {
  install(Vue) {
    Vue.use(directives)
  },
  router,
  store
}