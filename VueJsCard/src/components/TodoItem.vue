<template>
  <div v-bind:class="{ 'done': todoItem.isDone  }"  style="margin-top: 15px;" class="card card-thumb">
    <div class="card-info card-info-thumb">
      <input
        type="checkbox"
        class="checkbox"
        :checked='todoItem.isDone'
        @input="onCheckBoxInput(todoItem.id, todoItem.isDone)"
      />
      <span class="name">
        {{todoItem.title}} <span @click='onDeleteTodoClicked(todoItem.id)' style="float: right; cursor: pointer">×</span>
      </span>
      <div class="skills">
        <span class="value">{{todoItem.description}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { patchTodo, deleteTodo } from '@/netClient/todoService'
export default ({
  props: {
    todoItem: {
      type: Object,
      required: true
    }
  },
  name: 'TodoItem',
  methods: {
    async onCheckBoxInput (id, isDone) {
      try {
        // const todo = this.todoList.find((item)=> item.id ===id)
        await patchTodo({ id, isDone: !isDone })
        // this.fetchTodoList() //fix this
        // todo.isDone = !todo.isDone
        this.$emit('todo-done')
      } catch (error) {
        console.error({ error })
      }
    },
    async onDeleteTodoClicked (id) {
      try {
        await deleteTodo({ id })
        this.$emit('todo-deleted')
      } catch (error) {
        console.error({ error })
      }
    }
  }
})
</script>
<style scoped>
.done {
  background: #4e793f !important;
}

.name {
  font-size: 1.25rem;
}

.group {
  font-weight: 600;
  color: #ff1ead;
}

.skills {
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
}

.skills .value {
  margin-top: 0.15rem;
  font-size: 0.8rem;
  line-height: 1.25rem;
}

.card {
  display: block;
  position: relative;
  text-decoration: none;
  color: white;
  border-radius: 0.75rem;
  box-shadow: 0 5px 5px 4px rgba(0, 0, 0, 0.56);
  background: black;
}

.card.card-thumb {
  display: flex;
}

.card-info {
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 20px;
}

.card-info.card-info-thumb {
  display: block;
  flex: 1 0 55%;
}

.feedback-form input, textarea {
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
  font-family: Arial;
}

button {
  color: white;
  background: #53ac61;
  border: 1px #5b5b5b;
  height: 40px;
  width: 100%;
  border-radius: 6px;
}
</style>
