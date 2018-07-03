<template>
  <div class="todo-form">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your todo..."
        v-model="newTodo"
        @keyup.enter="handleAddTodo"
      />
    </div>
    <p v-if="error" class="text-danger font-weight-bold">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      error: false
    }
  },
  methods: {
    handleAddTodo() {
      if (this.newTodo.trim().length === 0) {
        this.error = 'Please, fill out the input field!';
      } else {
        this.$store.dispatch('addTodo', this.newTodo);
        this.newTodo = '';
        this.error = false;
      }
    }
  }
}
</script>

<style lang="scss">
@import '../stytes/_variables.scss';
.todo-form {
  .form-control {
    background-color: $header-bg-color;
    border-color: $border-color;
    border-radius: 0;
    font-size: $base-font-size;
    height: 60px;
    &:focus {
      background-color: $header-bg-color;
      border-color: $border-color;
      color: white;
    }
  }
}
</style>
