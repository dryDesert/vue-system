<template>
  <div>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#409eff;">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div>
    </div>
    <div class="screenbg">
      <img src="static/img/bg.jpg">
    </div>
  </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        // 本地存储
                        console.log(self.$refs[formName].validate);
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        self.$router.push('/home');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
    .login-wrap{
        position:absolute;
        top:50%;
        left: 50%;
        margin-top:-240px;
        margin-left:-250px;
        width:500px;
        height:400px;
        .ms-title{
          text-align: center;
          font-size:40px;
          color:#fff;
        }
        .ms-login{
          width:300px;
          height:160px;
          padding:40px;
          margin:30px auto;
          border-radius: 5px;
          background-color: rgba(255,255,255,0.3);
          .login-btn{
            text-align: center;
            button{
              width:100%;
              height:36px;
            }
          }
      }
    }
    .screenbg  {
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        margin: 0;
        padding: 0;
    }
    .screenbg  img {
        vertical-align: middle;
        display: inline;
        border: none;
        display: block;
        list-style: none;
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1000;
        float: right;
    }
</style>