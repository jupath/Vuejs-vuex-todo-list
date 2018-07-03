<template>
  <div class="list-item py-3">
    <div v-if="todo.editing">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          v-model="todoText"
          v-focus
          @keyup.enter="handleEditTodo"
          @keyup.esc="handleEsc"
        />
      </div>
    </div>
    <div v-else>
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="completeTodo(todo)"
      />
      <span
        class="todo-text"
        :class="{ completed : todo.completed }"
        @dblclick="{ !todo.completed ? handleEditingStatusChange() : null }"
      >
        {{todo.text}}
      </span>
    </div>
    <div>
      <span @click="removeTodo(todo.id)" class="remove-todo close">&times;</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    todo: Object
  },
  data() {
    return {
      todoText: this.todo.text,
      cachedText: ''
    }
  },
  methods: {
    ...mapActions([
      'removeTodo',
      'completeTodo',
      'editingStatus',
      'editTodo'
    ]),
    handleEditingStatusChange() {
      this.cachedText = this.todoText;
      this.editingStatus(this.todo);
    },
    handleEditTodo() {
      if (this.todoText.trim().length === 0) return;

      const editedTodo = {
        id: this.todo.id,
        text: this.todoText
      }
      this.editTodo(editedTodo);
      this.cachedText = '';
    },
    handleEsc() {
      this.cachedText = '';
      this.editingStatus(this.todo);
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss">
@import '../stytes/_variables.scss';
.list-item {
  align-items: center;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-between;

  div:first-child {
    width: 96%;
  }

  .remove-todo {
    &:hover {
      cursor: pointer;
    }
  }

  .todo-text {
    &:hover {
      cursor: pointer;
    }
  }

  .completed {
    opacity: .6;
    text-decoration: line-through;
    &.todo-text {
      &:hover {
        cursor: inherit;
      }
    }
  }

  .close {
    color: white;
    &:hover,
    &:focus {
      color: white;
    }
  }

  .form-group {
    margin-bottom: 0;
    .form-control {
      border-radius: 0;
    }
  }
}
</style>