<template>
  <div class="grid">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  name: 'LoginPage',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 20px auto;
  max-width: 800px;
}
</style>
