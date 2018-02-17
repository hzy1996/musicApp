import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'
export default{
    install(Vue){
        Vue.component('MyHeader',MyHeader)
        Vue.component('MyFooter',MyFooter)
    }
}