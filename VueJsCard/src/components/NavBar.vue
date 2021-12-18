<template>
  <nav>
    <div class="nav-wrapper">
      <div class="nav-links">
        <router-link  v-show="logged()" to="/" style="float: left;">Главная</router-link>
        <router-link v-show="logged()" to="/info" style="float: left;">О разработчике</router-link>
        <a v-show="logged()" @click.prevent="logout" style="cursor: pointer;float: right;">Выйти</a>
        <router-link v-show="!logged()" style="float: right;" to="/login">Войти</router-link>
        <router-link v-show="!logged()" style="float: right;" to="/register">Зарегистрироватся</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { doLogout } from '@/netClient/authService'
export default {
  name: 'NavBar',
  methods: {
    async logout () {
      await doLogout()
      this.$router.push('/login')
    },
    logged () {
      console.log(localStorage.accessToken)
      return !!localStorage.accessToken
    }
  }
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
