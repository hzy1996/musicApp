<template>
  <div id="app">
    <my-header/>
    <router-view/> 
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
