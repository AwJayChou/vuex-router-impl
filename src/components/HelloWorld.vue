<template>
  <div class="hello">
    <h1 @click="$emit('foo', 'abc')">{{ msg }}</h1>
    <button @click="sendMsg">给兄弟打招呼</button>
    <p>{{foo.$options.name}}</p>
    <!-- 匿名插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <p><slot name="content"></slot></p>
    <!-- 作用域插槽 -->
    <p><slot name="footer" foo="foo" :bar="bar"></slot></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      bar: 'bar'
    }
  },
  props: {
    msg: String
  },
  inject: ['foo'],
  mounted () {
    this.$parent.$on('foo', () => {
      console.log('兄弟传来一些信息');
      
    });
  },
  methods: {
    sendMsg() {
      this.$parent.$emit('foo')
      // $root
      // $bus
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
