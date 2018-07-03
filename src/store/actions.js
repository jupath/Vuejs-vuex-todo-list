import * as types from './mutation-types';
import shortid from 'shortid';

export const addTodo = ({commit}, text) => {
  commit(types.ADD_TODO, {
    id: shortid.generate(),
    text,
    completed: false,
    editing: false,
  });
};

export const completeTodo = ({commit}, todo) => {
  commit(types.COMPLETE_TODO, todo);
}

export const editingStatus = ({commit}, todo) => {
  commit(types.EDITING_STATUS, todo);
}

export const editTodo = ({commit}, editedTodo) => {
  commit(types.EDIT_TODO, editedTodo);
}

export const removeTodo = ({commit}, id) => {
  commit(types.REMOVE_TODO, id);
}

export const clearAll = ({commit}) => {
  commit(types.CLEAR_ALL);
}

export const setFilter = ({commit}, filter) => {
  commit(types.SET_FILTER, filter);
}
