let Vue;

class Store {
    // {state:{count:0}}
    constructor(options) {
        this.state = new Vue({
            data: options.state
        })

        // {mutations: {add:function(state){}}}
        this.mutations = options.mutations || {};
        
        // {actions: {add:function(ctx){}}}
        this.actions = options.actions || {};

        this.handleGetters(options.getters);
    }

    commit = (type, arg) => {
        this.mutations[type](this.state, arg)
    }

    dispatch = (type, arg) => {
        // 
        this.actions[type]({
            commit: this.commit,
            state: this.state,
            getters: this.getters
        }, arg)
    }

    handleGetters(getters) {
        this.getters = {};
        Object.keys(getters).forEach(key => {
            Object.defineProperty(this.getters, key, {
                get: () => {
                    return getters[key](this.state)
                }
            })
        })
    }
}

function install(_Vue) {
    Vue = _Vue;

    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}

export default { Store, install }