<template>
  <div class="home">
    <h1>Home page</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div v-for="item in items" :key="item.id">
      <router-link :to="`/detail/${item.id}`">{{ item.name }}</router-link>
    </div> -->
    <div><span style="color: red">count</span> {{$store.state.count}}</div>
    <button @click="add">add</button>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    add() {
      // mutation
      // this.$store.commit('increment')
      // action
      this.$store.dispatch("increment").then(result => {
        if (!result) {
          alert("投掷失败，没货啦！");
        }
      });
    },
    asyncAdd() {
      this.$store.dispatch("a/asyncIncrement").then(result => {
        if (!result) {
          alert("投掷失败，没货啦！");
        }
      });
    }
  }
};
</script>
