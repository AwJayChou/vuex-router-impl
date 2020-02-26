<template>
    <div>
        <!-- 双绑：:value @input -->
        <!-- v-bind会展开$attrs对象 -->
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        // 1.双绑
        // 2.通知校验
        inheritAttrs: false,
        props: {
            type: {
                type: String,
                default: 'text'
            },
            value: {
                type: String,
                default: ''
            }
        },
        mounted () {
            console.log(this.$attrs);
            
        },
        methods: {
            onInput(e) {
                // 仅派发事件
                this.$emit('input', e.target.value)

                // 通知校验
                this.$parent.$emit('validate')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>