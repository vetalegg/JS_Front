<template>
  <div class="grid">
    <CreateToDo @todo-created="onTodoCreated"/>

    <div class="delete-all">
      <button @click='onDeleteAllTodoClicked'>Удалить все</button>
    </div>
      <TodoItem
        v-for="todoItem in todoList"
        @todo-done="onTodoDone"
        @todo-deleted="onTodoDeleted"
        :key="todoItem.id"
        :todoItem="todoItem"
        :class="{ done: todoItem.isDone }"
      />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import CreateToDo from '@/components/CreateToDo'
import { fetchTodoList, deleteAllTodo } from '@/netClient/todoService'
export default {
  name: 'HomePage',
  components: {
    TodoItem,
    CreateToDo
  },
  data: () => ({
    todoList: []
  }),
  created () {
    this.fetchTodoList()
  },
  methods: {
    onTodoCreated () {
      // this.todoList.unshift(newTodo) //unshift - добавление в начало
      this.fetchTodoList()
    },
    onTodoDone () {
      this.fetchTodoList()
    },
    onTodoDeleted () {
      this.fetchTodoList()
    },
    async onDeleteAllTodoClicked () {
      try {
        await deleteAllTodo()
        this.fetchTodoList()
      } catch (error) {
        console.error({ error })
      }
    },
    async fetchTodoList () {
      try {
        this.todoList = await fetchTodoList()
      } catch (error) {
        console.error({ error })
      }
    }
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
button {
  color: white;
  background: #ff1ead;
  border: 1px #5b5b5b;
  height: 40px;
  width: 100%;
  border-radius: 6px;
}
</style>
