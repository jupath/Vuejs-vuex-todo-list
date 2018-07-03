<template>
  <div class="todo-list mt-4">
    <list-header />
    <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutRight">
      <list-item
        v-for="(todo, index) in filteredTodos"
        :todo="todo"
        :key="index"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import '../../node_modules/animate.css/animate.min.css';

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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>