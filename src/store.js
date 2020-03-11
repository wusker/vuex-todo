import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Vuex Todos',
    newTodo: '',
    todos: []
  },
  mutations: {
    setNewTodo(state, value) {
      state.newTodo = value;
    },
    addTodo(state) {
      if (state.newTodo.length > 0) {
        state.todos.push({
          title: state.newTodo,
          done: false
        });
      }
    },
    setTodoDone(state, index) {
      state.todos[index].done = true;
    },
    setTodoNotDone(state, index) {
      state.todos[index].done = false;
    },
    allDone(state) {
      state.todos.forEach(todo => todo.done = true);
    }
  },
  actions: {
    addTodo({ commit }) {
      commit('addTodo');
      commit('setNewTodo', '');
    },
    toggleTodoDone(context, index) {
      const todo = context.state.todos[index];
      if (todo.done) {
        context.commit('setTodoNotDone', index);
      } else {
        context.commit('setTodoDone', index);
      }
      context.commit('setNewTodo', '');
    }
  }
});