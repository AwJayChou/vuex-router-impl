import Vue from 'vue';

function create(Component, props) {
    // 1.创建Vue实例
    const vm = new Vue({
        // h是createElement别名，返回VNode
        // template:'', // 由于没有编译器，这里只能使用render
        // 参数2是要传递给Component参数，{props: props, on: {click:onClick}}
        // <Component title content/>
        render: h => h(Component, {props})
    }).$mount(); // 不传参会执行转换过程，但不挂载

    // 获取挂载dom元素
    document.body.appendChild(vm.$el);

    // 回收
    // 1.获取组件实例
    // 2.removeChild
    const comp = vm.$children[0];
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        comp.$destroy();
    }

    return comp;
}

export default create
