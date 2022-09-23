<template>
  <form @submit.prevent="addTodo">
    <div class="todo-area">
      <label
        :for="randomString + 'todo'"
        class="sr-only"
      >todo list</label>
      <input
        :id="randomString + 'todo'"
        v-model="newTodo"
        type="text"
        class="todo"
      >
      <button
        type="button"
        @click="addTodo"
      >
        추가
      </button>
    </div>
    <div class="todo-list">
      <ul>
        <li
          v-for="(todo, index) in completeTodo"
          :key="index"
        >
          <label :for="randomString + 'complete' + index">
            <input
              :id="randomString + 'complete' + index"
              v-model="todo.done"
              type="checkbox"
            >
          </label>
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
          <button
            type="button"
            @click="removeTodo(todo)"
          >
            지우기
          </button>
        </li>
      </ul>
    </div>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { getRandomId } from '@/utils/common.function'

export default defineComponent({
  setup () {
    const randomString = getRandomId()

    const newTodo = ref('')
    const completed = ref(false)
    const todos = ref([
      { text: '할 일1', done: true },
      { text: '할 일2', done: false }
    ])
    const completeTodo = computed(() => {
      return completed.value
        ? todos.value.filter((t) => !t.done)
        : todos.value
    })

    function addTodo () {
      todos.value.push({ text: newTodo.value, done: false })
      newTodo.value = ''
    }

    function removeTodo (todo: { text: string }) {
      todos.value = todos.value.filter((t) => t !== todo)
    }

    return {
      randomString,
      newTodo,
      completed,
      todos,
      completeTodo,
      addTodo,
      removeTodo
    }
  }
})
</script>
<style lang="scss" scoped>
.todo-list {
  label {
    display: block;
    border: 1px solid blue;
    width: 2rem;
    height: 2rem;
  }
  .done {
    text-decoration: line-through;
  }
}
</style>
