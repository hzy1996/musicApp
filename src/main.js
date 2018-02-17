// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//全局资源 filter mixin router store 指令
import global from './global'
Vue.use(global)

//通用组件
import components from './components'
Vue.use(components)

//插件
import lib from './lib'
Vue.use(lib)

//自定义样式
import '@/assets/css/app.css'

//移动端300毫秒延迟处理
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:global.router,
  components: { App },
  template: '<App/>'
})
