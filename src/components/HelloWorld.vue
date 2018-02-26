<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <ul>
      <li><a href="#">aaa</a></li>
      <li><a href="#">bbb</a></li>
      <li><a href="#">ccc</a></li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:'hello',
    data(){
      return {
        msg: 'Welcome to your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 10px;
      a {
        color: #f00;
      }
    }
  }


</style>
