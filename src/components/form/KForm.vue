<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: { type: Object }
  },
  methods: {
    validate(cb) {
      // 全局校验
      // 1.不是所有项都需要校验
      //   tasks是promise数组
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      //   所有必须全通过
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>