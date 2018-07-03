<template>
  <div class="todo-list mt-4">
    <list-header />
    <list-item
      v-for="(todo, index) in filteredTodos"
      :todo="todo"
      :key="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

export default {
  computed: {
    ...mapState({
      filter: state => state.filter,
      todos: state => state.todos
    }),
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      } else if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.completed);
      } else if (this.filter === 'active') {
        return this.todos.filter(todo => !todo.completed);
      }
    }
  },
  components: {
    ListHeader,
    ListItem
  }
}
</script>
