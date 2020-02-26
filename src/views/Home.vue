<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-for="item in items" :key="item.id">
      <router-link :to="`/detail/${item.id}`">{{ item.name }}</router-link>
    </div>
    <!-- <router-view></router-view> -->
    <!-- <div>冲啊，手榴弹扔了{{$store.state.a.count}}</div> -->
    <div>冲啊，手榴弹扔了{{$store.state.count}}</div>
    <!-- <div>还剩{{$store.getters['a/left']}}个</div> -->
    <button @click="add">扔一个</button>
    <button @click="asyncAdd">蓄力扔一个</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      items: [{ id: 1, name: "web全栈" }, { id: 2, name: "数据分析工程师" }]
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
