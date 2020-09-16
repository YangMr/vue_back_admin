<template>
  <div class="login">
    <div class="login-container">
      <h5 class="login-title">UNI-ADMIN</h5>
      <div class="login-form">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
       this.$store.dispatch("Login",this.form)
      });
    }
  },
  components: {}
};
</script>


<style scoped>
.login-container {
  width: 400px;
  margin: 150px auto 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login-title {
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.login-form {
  padding: 20px;
}
.login-form .el-button {
  width: 100%;
  background: teal;
}
</style>