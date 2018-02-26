<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>


<!-- <template>
    <div class="sidebar">
        <el-radio-group v-model="isCollapse" style="margin-bottom:20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" :collapse="isCollapse" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{item.title}}</span>
                        </template>
                        <el-menu-item v-for="subItem in item.subs" :index="subItem.index">
                            <span>{{subItem.title}}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template> -->

    // export default {
    //     data() {
    //         return {
    //             items: [
    //                 {
    //                     icon: 'el-icon-setting',
    //                     index: 'readme',
    //                     title: '自述'
    //                 },
    //                 {
    //                     icon: 'el-icon-menu',
    //                     index: 'table',
    //                     title: '表格',
    //                     subs: [
    //                         {
    //                             index: 'basetable',
    //                             title: '基础表格'
    //                         },
    //                         {
    //                             index: 'vuetable',
    //                             title: 'Vue表格组件'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     icon: 'el-icon-date',
    //                     index: 'form',
    //                     title: '表单',
    //                     subs: [
    //                         {
    //                             index: 'baseform',
    //                             title: '基本表单'
    //                         },
    //                         {
    //                             index: 'vueeditor',
    //                             title: '编辑器'
    //                         },
    //                         {
    //                             index: 'markdown',
    //                             title: 'markdown'
    //                         },
    //                         {
    //                             index: 'upload',
    //                             title: '文件上传'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     icon: 'el-icon-star-on',
    //                     index: 'basecharts',
    //                     title: '图表'
    //                 },
    //                 {
    //                     icon: 'el-icon-upload2',
    //                     index: 'drag',
    //                     title: '拖拽'
    //                 }
    //             ],
    //             isCollapse:true
    //         }
    //     },
    //     computed:{
    //         onRoutes(){
    //             return this.$route.path.replace('/','');
    //         }
    //     }
    // }



<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-menu',
                        index: 'hygl',
                        title: '行业概览'
                    },
                    {
                        icon: 'el-icon-printer',
                        index: 'gqcs',
                        title: '股权测算'
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'xsb',
                        title: '新三板'
                    },
                    {
                        icon: 'el-icon-star-off',
                        index: 'wgp',
                        title: '未挂牌'
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'hyfl',
                        title: '行业分类'
                    },
                    {
                        icon: 'el-icon-news',
                        index: 'gzsj',
                        title: '估值数据'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'cssz',
                        title: '参数设置'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'sjdr',
                        title: '数据导入'
                    }
                ],
                isCollapse:true
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
