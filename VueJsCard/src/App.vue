<template>
 <NavBar/>
 <router-view />
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
body {
  background: #efefef;
  font-family: "Source Code Pro", monospace;
  user-select: auto;
}
</style>
