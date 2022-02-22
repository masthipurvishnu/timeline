<template>
  <div class="home">
    <Welcome msg="Welcome to Your Vue.js App"/>
    <img alt="Vue logo" src="../assets/logo.png">aasasasasas
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '../components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
}
}
</script>
