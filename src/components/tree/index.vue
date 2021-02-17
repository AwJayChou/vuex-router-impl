<template>
  <div id="app">
    <ul>
      <item class="item" :model="treeData"></item>
    </ul>
  </div>
</template>
<script>
import Item from "@/components/tree/Item";
export default {
  name: "app",
  data() {
    return {
      treeData: {
        title: "架构师",
        children: [
          {
            title: "Java架构师"
          },
          {
            title: "JS高级",
            children: [
              {
                title: "ES6"
              },
              {
                title: "动效"
              }
            ]
          },
          {
            title: "全栈",
            children: [
              {
                title: "训练营",
                expand: true,
                children: [
                  {
                    title: "组件化"
                  },
                  {
                    title: "源码"
                  },
                  {
                    title: "docker部署"
                  }
                ]
              },
              {
                title: "React",
                children: [
                  {
                    title: "JSX"
                  },
                  {
                    title: "虚拟DOM"
                  }
                ]
              },
              {
                title: "Node"
              }
            ]
          }
        ]
      }
    };
  },
  components: { Item }
};
</script>