<template>
  <div>
    <todo-list list-name="My TODOS" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '../components/TodoList.vue'
export default {
  name: 'Home',
  components: {
    TodoList
  }
}
</script>
