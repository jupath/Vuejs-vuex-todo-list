<template>
  <div class="todo-header py-3 px-2">
    <div class="row">
      <div class="col-sm-3" v-if="todosLeft === 1">
        {{todosLeft}} item left
      </div>
      <div class="col-sm-3" v-else>
        {{todosLeft}} items left
      </div>
      <div class="col-sm-6">
        <button
          @click="setFilter('all')"
          :disabled="getFilter === 'all'"
          class="btn btn-info mr-1"
        >
          All
        </button>
        <button
          @click="setFilter('completed')"
          :disabled="getFilter === 'completed'"
          class="btn btn-info mr-1"
        >
          Completed
        </button>
        <button
          @click="setFilter('active')"
          :disabled="getFilter === 'active'"
          class="btn btn-info"
        >
          Active
        </button>
      </div>
      <div class="col-sm-3 text-right">
        <button
          @click="clearAll"
          :disabled="numOfTodos === 0"
          class="btn btn-danger"
        >
          Clear all
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods: mapActions([
    'clearAll',
    'setFilter'
  ]),
  computed: {
    ...mapState({
      filter: state => state.filter,
      todos: state => state.todos
    }),
    todosLeft() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    numOfTodos() {
      return this.todos.length;
    },
    getFilter() {
      return this.filter;
    }
  }
}
</script>

<style lang="scss">
@import '../stytes/_variables.scss';
.todo-header {
  border-bottom: 1px solid $border-color;
  border-top: 1px solid $border-color;
  background-color: $header-bg-color;
  & > .row {
    align-items: center;
    justify-content: space-between;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    & > div {
      padding-left: 0;
      padding-right: 0;
    }
    & > .col-sm-6 {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
