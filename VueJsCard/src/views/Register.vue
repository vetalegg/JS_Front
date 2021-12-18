<template>
  <div class="grid">
    <RegisterForm/>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm'
export default {
  name: 'Register',
  components: {
    RegisterForm
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
