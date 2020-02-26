<template>
  <div>
    <h3>表单</h3>
    <hr />
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput type="password" v-model="model.password" placeholder="请输入密码"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">登录</button>
      </KFormItem>
    </KForm>
    {{model}}
  </div>
</template>

<script>
import KInput from "@/components/form/KInput.vue";
import KFormItem from "@/components/form/KFormItem.vue";
import KForm from "@/components/form/KForm.vue";
import Notice from "@/components/Notice.vue";
import create from "@/utils/create";

export default {
  components: {
    KInput,
    KFormItem,
    KForm
  },
  data() {
    return {
      model: { username: "tom", password: "" },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    onLogin() {
      //   全局校验

      this.$refs["loginForm"].validate(isValid => {
        const notice = create(Notice, {
          title: "杨哥喊你来搬砖",
          message: isValid ? "登录去！" : "有错改去！"
        });
        notice.show();
        setTimeout(() => {
          notice.hide();
        }, 2000);
        
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>