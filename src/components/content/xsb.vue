<template>
	<div class="hygl">
		<div class="box">
			<div class="box-title">
				<p>审核任务</p>
			</div>
			<div class="box-content">
				<el-table :data="tableData" style="width: 100%">
				    <el-table-column prop="id" label=""></el-table-column>
				    <el-table-column prop="name" label=""></el-table-column>
				    <el-table-column prop="money" label=""></el-table-column>
				    <el-table-column prop="type" label=""></el-table-column>
				    <el-table-column prop="date" label=""></el-table-column>
				    <el-table-column prop="do" label=""></el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second',
        tableData: [{
        	id:'fs14we54fss544',
        	name: '王小虎',
        	money:'￥2,333,650',
        	type:'出具批复书',
            date: '2016-05-02 18:25',
            do: '<button>审核</button>'
          }, {
            id:'fs14we54fss544',
        	name: '王小虎',
        	money:'￥2,333,650',
        	type:'出具批复书',
            date: '2016-05-02 18:25',
            do: '<button>审核</button>'
          }, {
            id:'fs14we54fss544',
        	name: '王小虎',
        	money:'￥2,333,650',
        	type:'出具批复书',
            date: '2016-05-02 18:25',
            do: '<button>审核</button>'
          }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="scss">
	.box{
		border:1px solid #e7eaec;
		box-shadow: 0px 5px 15px #ddd;
		margin-bottom:25px;
		.box-title{
			padding-left: 15px;
    		height: 48px;
    		line-height:48px;
    		font-weight:bold;
		}
		.box-content{
		    padding: 15px 20px 20px 20px;
		    border-top: 1px solid #e7eaec;
		}
	}
</style>