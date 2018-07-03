import * as types from './mutation-types';

export const mutations = {
  [types.INITIAL_STORE] (state) {
    if (localStorage.getItem('vuestore')) {
      state.todos = JSON.parse(localStorage.getItem('vuestore'));
    }
  },

  [types.ADD_TODO] (state, payload) {
    state.todos.push(payload);
  },

  [types.EDITING_STATUS] (state, todo) {
    todo.editing = !todo.editing;
  },

  [types.COMPLETE_TODO] (state, todo) {
    todo.completed = !todo.completed;
  },

  [types.EDIT_TODO] (state, editedTodo) {
    state.todos = state.todos.map(todo => {
      if (todo.id === editedTodo.id) {
        todo.text = editedTodo.text;
        todo.editing = false;
      }
      return todo;
    });
  },

  [types.CLEAR_ALL] (state) {
    state.todos = [];
  },

  [types.REMOVE_TODO] (state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },

  [types.SET_FILTER] (state, filter) {
    state.filter = filter;
  }
};
