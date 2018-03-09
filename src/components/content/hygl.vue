<template>
	<div class="hygl">

		<div class="portlet light">
			<div class="portlet-title">
				<h3>柱状图 折线图</h3>
			</div>
			<div class="portlet-body" height="350px;">
				<el-row>
			  		<el-col :span="12">
			  			<div id="myChart1" :style="{height: '300px'}"></div>
			  		</el-col>
				  	<el-col :span="12">
				  		<div id="myChart2" :style="{ height: '300px'}"></div>
				  	</el-col>
				</el-row>
			</div>
		</div>

	</div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
      };
    },
    mounted(){
	    this.drawLine();
	},
    methods: {
	    drawLine(){
	        // 基于准备好的dom，初始化echarts实例
	        let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
	        // 绘制图表
	        myChart1.setOption({
	            title: { text: '在Vue中使用echarts bar' },
	            tooltip: {},
	            xAxis: {
	                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
	            },
	            yAxis: {},
	            series: [{
	                name: '销量',
	                type: 'bar',
	                data: [5, 20, 36, 10, 10, 20]
	            }]
	        });
	        let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
	        myChart2.setOption({
	            title:{
		            text:'企业数量（个）',
		            textStyle:{
		                fontWeight:'100',
		                color:'#333',
		                fontSize:12,
		            }
		        },
		        dataZoom:[
		            {
		                type:'slider',
		                bottom:'5%',
		                height:20,
		                startValue:0,
		                endValue:60,
		            }
		        ],
		        grid:{
		            show:'true',
		            borderWidth:0,
		            left:'5%',
		            right:'15%',
		            containLabel:'true',
		            borderColor:'#f00',
		        },
		        xAxis: [
		            {
		                name:'营业收入增长率',
		                nameTextStyle:{
		                    color:'#333',
		                },
		                nameGap:8,
		                //网格设置
		                splitLine:{
		            　　　　show:true,
		                    lineStyle:{
		                        color:'#eee',
		                    }
		            　　 },

		                //坐标轴两边留白策略
		                boundaryGap:false,
		                //坐标轴刻度
		                axisTick: {
		                    show: false,
		                    // alignWidthLabel:true,
		                },
		                //坐标轴刻度标签设置
		                axisLabel:{
		                    show:true,
		                    color:'#000',
		                    lineStyle:{
		                        color:'#eee',
		                    },
		                    rotate:30,
		                    formatter: '{value}% '
		                },
		                //坐标轴轴线设置
		                axisLine: {
		                    show: true,
		                    lineStyle:{
		                        color:'#eee',
		                    }
		                },
		            }
		        ],
		        yAxis: [
		            {
		                type: 'value',
		                nameTextStyle:{
		                    color:'#000',
		                    fontSize:12,
		                },
		                axisLabel: {
		                    formatter: '{value} '
		                },
		                //网格设置
		                splitLine:{
		            　　　　show:true,
		                    lineStyle:{
		                        color:'#eee',
		                    }
		            　　 },
		                //坐标轴刻度
		                axisTick: {
		                    show: false,
		                },
		                //坐标轴刻度标签设置
		                axisLabel:{
		                    show:true,
		                    color:'#000',
		                    lineStyle:{
		                        color:'#000',
		                    }
		                },
		                //坐标轴轴线设置
		                axisLine: {
		                    show: true,
		                    lineStyle:{
		                        color:'#eee',
		                    }
		                },
		            },

		        ],
		        series: [
		            {
		                yAxisIndex:0,
		                type: 'line',
		                smooth:true,
		                symbol:'none',
		                showSymbol: false,
		                data: [
					        [-42,11,],[-37,12],[-32,16],[-29,28],
					        [-24,11,],[-18,12],[-10,16],[-5,28],
					        [5,11,],[9,12],[10,16],[15,28],[18,29],[22,33],[25,39],[28,41],
					        [35,44],[40,51],[44,52],[50,54],[55,57],[60,67],[66,76],
					        [70.5,65],[74.3,59],[81.11,48],[90.21,44],[95,32],[102,21],
					        [106,18],[111,11],[113,8]
					    ],
		                itemStyle:{
		                    normal:{
		                        color:'#4b8df8',
		                        width:3,

		                    },
		                    emphasis:{
		                         color:'#66dbf8',
		                    }
		                },
		                lineStyle:{
		                    normal:{
		                       width:4,
		                    },
		                    emphasis:{
		                         color:'#66dbf8',
		                          width:4,
		                    }
		                },
		                //四条等级线
		                markLine:{
		                    data:[
		                        {
		                            0:{
		                                value:-23+'%'+'\nE|D',
		                                coord:[-23,0],
		                                symbolSize:'0',
		                                lineStyle:{
		                                    normal:{
		                                        color:'rgba(0,0,0,0.4)',
		                                        width:2,
		                                        type:'dotted',
		                                    }
		                                },
		                            },
		                            1:{
		                                coord:[-23,76],
		                                symbolSize:'0',
		                            }
		                        },
		                        {
		                            0:{
		                                value:32.5+'%'+'\nD|C',
		                                coord:[32.5,0],
		                                symbolSize:'0',
		                                lineStyle:{
		                                normal:{
		                                    color:'rgba(0,0,0,0.4)',
		                                    width:2,
		                                    type:'dotted',
		                                }
		                            },
		                            },
		                            1:{
		                                coord:[32.5,76],
		                                symbolSize:'0',
		                            }
		                        },
		                        {
		                            0:{
		                                value:66.87+'%'+'\nC|B',
		                                coord:[66.87,0],
		                                symbolSize:'0',
		                                lineStyle:{
		                                normal:{
		                                    color:'rgba(0,0,0,0.4)',
		                                    width:2,
		                                    type:'dotted',
		                                }
		                            },
		                            },
		                            1:{
		                                coord:[66.87,76],
		                                symbolSize:'0',
		                            }
		                        },
		                        {
		                            0:{
		                                value:84.35+'%'+'\nB|A',
		                                coord:[84.35,0],
		                                symbolSize:'0',
		                                lineStyle:{
		                                normal:{
		                                    color:'rgba(0,0,0,0.4)',
		                                    width:2,
		                                    type:'dotted',
		                                }
		                            },
		                            },
		                            1:{
		                                coord:[84.35,76],
		                                symbolSize:'0',
		                            }
		                        },
		                    ],
		                },
		                markPoint:{
		                    symbolSize:20,
		                    data:[{
		                        coord:[22,33],
		                    }],
		                    label:{
		                        normal:{
		                            formatter:function(){
		                                // var b='龙腾企业';
		                                return name;
		                            },
		                            offset:[0,-20],
		                            color:'rgb(231,80,90)',
		                        },
		                        emphasis:{
		                            formatter:function(){
		                                // var a='23%,排名23位,等级B级';
		                                return '23%,排名23位,等级B级';
		                            },
		                            offset:[0,-20],
		                        },
		                    },
		                    itemStyle:{
		                        normal:{
		                            color: 'rgb(231,80,90)',
		                        }
		                    }
		                }
		            }
		        ]
		    });
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

	.el-row{
		margin-top:15px;
	}
	.text-left{
		text-align:left;
	}
	.portlet {
	    margin-top: 0px;
	    margin-bottom: 25px;
	    padding: 0px;
	    &.light{
	    	padding: 12px 20px 15px 20px;
	    	background-color: #fff;
	    	.portlet-title {
			    padding: 0;
			    min-height: 48px;
			}
			.portlet-body {
			    padding-top: 8px;
			}
	    }
	    .portlet-title {
		    border-bottom: 1px solid #eee;
		    padding: 0;
		    margin-bottom: 10px;
		    min-height: 48px;
		    line-height:48px;
		    -webkit-border-radius: 4px 4px 0 0;
		    -moz-border-radius: 4px 4px 0 0;
		    -ms-border-radius: 4px 4px 0 0;
		    -o-border-radius: 4px 4px 0 0;
		    border-radius: 4px 4px 0 0;
		}
		.portlet-body {
		    clear: both;
		    -webkit-border-radius: 0 0 4px 4px;
		    -moz-border-radius: 0 0 4px 4px;
		    -ms-border-radius: 0 0 4px 4px;
		    -o-border-radius: 0 0 4px 4px;
		    border-radius: 0 0 4px 4px;
		}
	}

</style>