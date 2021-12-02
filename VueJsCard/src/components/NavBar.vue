<template>
  <nav>
    <div class="nav-wrapper">
      <div class="nav-links">
        <router-link exact to="/">Главная</router-link>
        <router-link to="/info">Информация</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  background-color: #000;
  overflow: hidden;
  padding: 1em;
  z-index: 99999999;
  border-bottom: 1px solid #ff1ead;
}
nav a {
  color: #FFF;
}
nav a:hover {
  color: #ff1ead;
}
nav .nav-wrapper .nav-links {
  text-align: center;
}
.router-link-active{
   color: #A29696;
}
nav .nav-wrapper .nav-links a {
  text-decoration: none;
  display: inline-block;
  padding: 0 8px;
}
</style>
