<template>
  <div id="app">
    <div class="container px-xl-7">
      <img src="../assets/logo.png" class="logo">
      <h1 class="text-center pb-3">{{ title | uppercase }}</h1>
      <todo-form />
      <list />
    </div>
  </div>
</template>

<script>
import TodoForm from './TodoForm';
import List from './List';

export default {
  data() {
    return {
      title: 'Vue + Vuex Todo List'
    }
  },
  components: {
    TodoForm,
    List
  }
}
</script>

<style lang="scss">
@import '../stytes/styles.scss';

.logo {
  display: block;
  height: 80px;
  margin: 20px auto;
  width: auto;
}
</style>