// 1.插件
let Vue; // 通过插件传递进来

// 2.VueRouter类
export default class VueRouter {
  constructor(options) {
    this.$options = options;
    // 声明map, 把path和component映射
    this.routeMap = {};

    // current保存当前hash
    // vue使其是响应式的
    this.app = new Vue({
      data: {
        current: "/",
      },
    });
  }

  init() {
    // 1.事件监听
    this.bindEvents();
    // 2.创建路由映射
    this.createRouteMap();
    // 3.声明两个全局组件
    this.initComponent();
  }

  bindEvents() {
    window.addEventListener("hashchange", this.onHashChange.bind(this));
    window.addEventListener("load", this.onHashChange.bind(this));
  }
  onHashChange() {
    // #/about
    this.app.current = window.location.hash.slice(1) || "/";
  }

  // 解析routes选项
  createRouteMap() {
    this.$options.routes.forEach(item => {
      this.routeMap[item.path] = item.component;
    });
  }

  // 声明两个组件
  initComponent() {
    // Vue.component()
    Vue.component("router-link", {
      props: { to: { type: String, required: true } },
      //   template: '<a to="/">xxx</a>'
      render(h) {
        // 1. render生成虚拟dom
        // 2. 描述渲染dom结构
        // 3. h(tag, data, children)
        // return <a href={this.to}>{this.$slots.default}</a>
        const vdom = h('a', {attrs: {href: this.to}}, [this.$slots.default]);
        console.log(vdom);        
        return vdom;
      },
    });

    Vue.component('router-view', {
        render: h => {
            // this指向VueRouter实例
            const component = this.routeMap[this.app.current];
            return h(component);
        }
    })
  }
}

// 插件要求实现install方法
VueRouter.install = function(_Vue) {
  Vue = _Vue;

  // 混入：挂载$router
  Vue.mixin({
    beforeCreate() {
      // 希望接下来代码在每个组件创建时都执行
      // this指当前组件实例
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
        // 初始化router
        this.$options.router.init();
      }
    },
  });
};
