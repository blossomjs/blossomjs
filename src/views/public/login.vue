<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">欢迎登录</div>
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-login" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const form = ref({
      username: "huyijin999",
      password: "huyijin999",
    })
    const formRef = ref(null)
    const rules = ref({
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    })
    const login = () => {
      formRef.value.validate((valid) => {
        if (!valid) {
          return false
        }
        store
          .dispatch("user/login", {
            username: form.value.username,
            password: form.value.password,
          })
          .then(() => {
            store.dispatch("user/getUserInfo").then(() => {
              router.push("/")
            })
          })
      })
    }
    return {
      form,
      login,
      rules,
      formRef,
    }
  },
}
</script>
<style scoped lang="scss">
.wrapper {
  width: 400px;
  margin: 60px auto;
  background: #fff;
  padding: 30px;
  .title {
    text-align: center;
    margin-bottom: 30px;
  }
  .btn-login {
    display: block;
    width: 100%;
  }
}
</style>
