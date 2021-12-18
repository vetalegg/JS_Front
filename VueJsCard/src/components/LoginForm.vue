<template>
  <div class="card">
    <div class="card-info">
      <div class="title" style="text-align: center;">Авторизация</div>
      <form @submit.prevent="onFormSubmit" class="login-form">
        <input v-model="login" type="text" autocomplete="off" placeholder="Ваше логин" required>
        <input v-model="password" type="password" autocomplete="off" placeholder="Ваш пароль" required>
        <button type="submit">Отправить</button>
      </form>
      <hr>
      <center>Нет аккаунта? <router-link to="/register">Зарегистрироватся</router-link></center>
    </div>
  </div>
</template>

<script>
import { doLogin } from '@/netClient/authService'
export default {
  name: 'LoginForm',
  data: () => ({
    login: '',
    password: ''
  }),
  methods: {
    async onFormSubmit () {
      try {
        const token = await doLogin(
          this.login.trim(),
          this.password.trim()
        )
        console.warn({ token })
        if (token) {
          // this.$router.push('/')
          location.href = '/'
        }
      } catch (error) {
        if (error.response.status === 400) {
          alert(error.response.data.message)
        }
        console.error(error)
      }
    },
    redirect () {
      this.$router.push('/registration')
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: 600;
  color: #ff1ead;
}
a {
  color: #FFF;
}
a:hover {
  color: #ff1ead;
}
.card {
  position: relative;
  text-decoration: none;
  color: white;
  display: flex;
  border-radius: 0.75rem;
  box-shadow: 0 5px 5px 4px rgba(0, 0, 0, 0.56);
  background: black;
}

.card-info {
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  display: block;
  flex: 1 0 55%;
}

.login-form {
  margin-top: 15px;
}

.login-form input, textarea {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  resize: vertical;
  border-radius: 5px;
  font-family: "Arial"
  }

.login-form button {
  color: white;
  background: #ff1ead;
  border: 1px #5b5b5b;
  height: 40px;
  width: 100%;
  border-radius: 6px;
}
</style>
