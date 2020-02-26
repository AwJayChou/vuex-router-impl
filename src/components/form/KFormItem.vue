<template>
    <div>
        <!-- label -->
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <!-- 校验信息 -->
        <p v-if="errorMessage">{{errorMessage}}</p>
    </div>
</template>

<script>
    import Schema from 'async-validator'
    export default {
        inject: ['form'],
        data() {
            return {
                errorMessage: ''
            }
        },
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: { // 用于获取指定字段值和校验规则
                type: String,
                default: ''
            }
        },
        mounted () {
            this.$on('validate', () => {
                this.validate()
            })
        },
        methods: {
            validate() {
                // 1.获取值和校验规则
                const rules = this.form.rules[this.prop];
                const value = this.form.model[this.prop];
                // 2.创建Schema实例 {username: rules}
                const schema = new Schema({[this.prop]: rules})
                // 3.执行校验，校验对象,回调函数
                // validate返回校验结果Promise
                return schema.validate({[this.prop]: value}, (errors) => {
                    if (errors) {
                        // 显示错误
                        this.errorMessage = errors[0].message;
                    } else {
                        this.errorMessage = '' 
                    }
                })
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>