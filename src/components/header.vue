<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="user-info">
            <el-dropdown  @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="static/img/people.jpg">
                    {{username}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="message">个人信息
                            <!-- <span @click="dialogVisible=true">个人信息</span>
                            <el-dialog title="个人信息" :visible.sync="dialogVisible" width="30%">
                                <span>姓名：{{username}}</span>
                            </el-dialog> -->
                    </el-dropdown-item>
                    <el-dropdown-item command="exit">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // name: 'linxin'
                dialogVisible:false
            }
        },
        // 计算属性，与methods区别：
        // 1 书写方式：计算属性不加() {{username}} methods 加() {{username()}}
        // 2 缓存：计算属性将username与ms_username绑定，只有ms_username变化时才会触发username  而methods方法每次进入页面都要执行该方法
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            // 点击菜单项触发的事件回调
            handleCommand(command) {
                if(command == 'exit'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/');
                }
                // if(command == 'message'){
                //     alert('aa');
                // }
            }
        }
    }
</script>
<style  lang="scss">
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background-color: #000;
        .logo{
            float: left;
            width:250px;
            text-align: center;
        }
        .user-info {
            float: right;
            padding-right: 50px;
            font-size: 16px;
            color: #fff;
            .el-dropdown-link{
                position: relative;
                display: inline-block;
                padding-left: 50px;
                color: #fff;
                cursor: pointer;
                vertical-align: middle;
                .user-logo{
                    position: absolute;
                    left:0;
                    top:15px;
                    width:40px;
                    height:40px;
                    border-radius: 50%;
                }
            }
            .el-dropdown-menu__item{
                text-align: center;
            }
        }
    }
</style>
