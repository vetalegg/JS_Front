<template>
  <div class="card">
    <div class="card-info">
      <form @submit.prevent="onFormSubmit" class="login-form">
        <input v-model="name" type="text" autocomplete="off" placeholder="Название" required>
        <input v-model="desc" type="text" autocomplete="off" placeholder="Описание" required>
        <button @click.prevent='onCreateTodoClicked'>Создать</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createTodo } from '@/netClient/todoService'
export default {
  name: 'CreateTodo',
  data: () => ({
    name: '',
    desc: ''
  }),
  methods: {
    async onCreateTodoClicked () {
      if(this.name && this.desc)
      {
        try {
          const newTodo = await createTodo({title: this.name, description: this.desc})
          if (newTodo) {
            //  this.todoList.push(newTodo);
            this.name = ''
            this.desc = ''
          }
          this.$emit('todo-created', newTodo)
        } catch (error) {
          console.error({error})
        }
      }
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
