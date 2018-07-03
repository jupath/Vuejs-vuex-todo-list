import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import { INITIAL_STORE } from './store/mutation-types';

Vue.filter('uppercase', function(value) {
  if (!value) return '';
  return value.toUpperCase();
});

store.subscribe((mutation, state) => {
  localStorage.setItem('vuestore', JSON.stringify(state.todos));
});

new Vue({
  el: '#app',
  store,
  beforeCreate() {
    this.$store.commit(INITIAL_STORE);
  },
  render: h => h(App)
});
