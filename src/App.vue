<template>
  <div>
    <h1>{{title}}</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" name="todo" type="text" />
      <button type="submit">Add</button>
    </form>
    <button @click="allDone">Mark All Done</button>
    <ul>
      <li @click="toggleTodoDone(index)" v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" :checked="todo.done" />
        <span :class="{ done: todo.done }">{{todo.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["title", "todos"]),
    newTodo: {
      get() {
        return this.$store.state.newTodo;
      },
      set(value) {
        this.$store.commit("setNewTodo", value);
      }
    }
  },
  methods: {
    ...mapMutations(["allDone"]),
    ...mapActions(["addTodo", "toggleTodoDone"])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  padding: 5vw;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.5rem;
}
ul {
  margin-top: 1rem;
  list-style: none;
}
li {
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 0;
  max-width: 400px;
}
li:hover {
  background: rgba(0, 0, 0, 0.05);
}
form {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0.5rem 0.5rem 0;
}
input {
  border: none;
  box-shadow: 0px 0px 0px 1px black;
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-right: 1rem;
}
input[type="checkbox"] {
  margin-right: 1rem;
  height: 20px;
  width: 20px;
}
button {
  margin: 0.5rem 0.5rem 0.5rem 0;
  cursor: pointer;
  background: rgb(255, 190, 141);
  border: none;
  font-size: 1.15rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.05rem;
  transition: 110ms;
}
button:nth-child(2) {
  background: cornflowerblue;
}
button:hover {
  filter: brightness(0.9);
}
.done {
  text-decoration: line-through;
}
</style>