<template>
	<div class="gqcs">
		<el-row :gutter="20">
		  	<el-col :span="12">
		  		<div class="portlet light">
					<div class="portlet-title">
						<h3>股票代码</h3>
					</div>
					<div class="portlet-body" style="height:289px;">
						<el-row>
					  		<el-col :span="5" class="text-right">
					  			<label >输入股票代码：</label>
					  		</el-col>
						  	<el-col :span="9">
						  		<input type="text" value="836870">
						  	</el-col>
						  	<el-col :span="5">
						  		<button>评估</button>
						  	</el-col>
						</el-row>
						<el-row>
					  		<el-col :span="5"  class="text-right">
					  			<label >评估方式：</label>
					  		</el-col>
						  	<el-col :span="7">
						  		<select>
						  			<option value="温和估值">温和估值</option>
						  			<option value="严厉估值">严厉估值</option>
						  		</select>
						  	</el-col>
						  	<el-col :span="5"  class="text-right">
						  		<label >评估方式：</label>
						  	</el-col>
						  	<el-col :span="7">
						  		<select>
						  			<option value="统计方式一">统计方式一</option>
						  			<option value="统计方式二">统计方式二</option>
						  			<option value="统计方式三">统计方式三</option>
						  		</select>
						  	</el-col>
						</el-row>
						<el-row>
					  		<el-col :span="5"  class="text-right">
					  			<label >国家高新企业：</label>
					  		</el-col>
						  	<el-col :span="7">
						  		<label><input type="radio" checked name="gaoxin">否</label>
						  		<label style="margin-left:25px;"><input type="radio" name="gaoxin">是</label>
						  	</el-col>
						  	<el-col :span="5"  class="text-right">
					  			<label >双创企业：</label>
					  		</el-col>
						  	<el-col :span="7">
						  		<label><input type="radio" checked name="shuangchuang">否</label>
						  		<label style="margin-left:25px;"><input type="radio" name="shuangchuang">是</label>
						  	</el-col>
						</el-row>
						<el-row>
					  		<el-col :span="5"  class="text-right">
					  			<label >国家扶持项目：</label>
					  		</el-col>
						  	<el-col :span="7">
						  		<label><input type="radio" checked name="fuchi">否</label>
						  		<label style="margin-left:25px;"><input type="radio" name="fuchi">是</label>
						  	</el-col>
						  	<el-col :span="5"  class="text-right">
					  			<label >引入知名风投：</label>
					  		</el-col>
						  	<el-col :span="7">
						  		<label><input type="radio" checked name="fengtou">否</label>
						  		<label style="margin-left:25px;"><input type="radio" name="fengtou">是</label>
						  	</el-col>
						</el-row>
					</div>
				</div>
		  	</el-col>
		  	<el-col :span="12">
		  		<el-col :span="24">
		  			<div class="portlet light">
						<div class="portlet-title">
							<h3>我的关注</h3>
						</div>
						<div class="portlet-body">
							<el-row>
								<el-col :span="24">
									<table style="width:100%;">
										<tr>
											<td>836859-爱立方</td>
											<td>836859-爱立方</td>
											<td>836859-爱立方</td>
										</tr>
										<tr>
											<td>836859-爱立方</td>
											<td>836859-爱立方</td>
											<td>836859-爱立方</td>
										</tr>
										<tr>
											<td>836859-爱立方</td>
											<td>836859-爱立方</td>
										</tr>
									</table>
								</el-col>
							</el-row>
							
						</div>
					</div>
		  		</el-col>
		  		<el-col :span="24">
		  			<div class="portlet light">
						<div class="portlet-title">
							<h3>最近估值</h3>
						</div>
						<div class="portlet-body">
							<el-row>
								<el-col :span="24">
									<table style="width:100%;">
										<tr>
											<td>836859-爱立方</td>
											<td>836859-爱立方</td>
											<td>836859-爱立方</td>
										</tr>
										<tr>
											<td>836859-爱立方</td>
											<td>836859-爱立方</td>
											<td>836859-爱立方</td>
										</tr>
										<tr>
											<td>836859-爱立方</td>
											<td>836859-爱立方</td>
										</tr>
									</table>
								</el-col>
							</el-row>
						</div>
					</div>
		  		</el-col>
		  	</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<div class="portlet light">
					<div class="portlet-title">
						<h3>财务数据</h3>
					</div>
					<div class="portlet-body" style="height:400px;">
						<el-tabs v-model="activeName" >
						    <el-tab-pane label="企业信息" name="first">
						    	<el-row :gutter="10">
						    		<el-col :span="4" class="text-right">
						    			<label>企业名称：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="省直规划" style="width:70%;">
						    		</el-col>
						    		<el-col :span="4" class="text-right">
						    			<label>成立日期：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="" style="width:70%;">
						    		</el-col>
						    	</el-row>
						    	<el-row :gutter="10">
						    		<el-col :span="4" class="text-right">
						    			<label>证件类型：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<select style="width:70%;">
						    				<option value="统一社会信用代码">统一社会信用代码</option>
						    				<option value="营业执照代码">营业执照代码</option>
						    				<option value="税务登记">税务登记</option>
						    			</select>
						    		</el-col>
						    		<el-col :span="4" class="text-right">
						    			<label>证件号：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="" style="width:70%;">
						    		</el-col>
						    	</el-row>
						    	<el-row :gutter="10">
						    		<el-col :span="4" class="text-right">
						    			<label>所属行业：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<select style="width:70%;">
						    				<option value="房地产">房地产</option>
						    				<option value="建筑">建筑</option>
						    			</select>
						    		</el-col>
						    		<el-col :span="4" class="text-right">
						    			<label>总股本（股）：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="47,264,721" style="width:70%;">
						    		</el-col>
						    	</el-row>
						    	<el-row>
							  		<el-col :span="4"  class="text-right">
							  			<label >国家高新企业：</label>
							  		</el-col>
								  	<el-col :span="8">
								  		<label><input type="radio" checked name="gaoxin1">否</label>
								  		<label style="margin-left:25px;"><input type="radio" name="gaoxin1">是</label>
								  	</el-col>
								  	<el-col :span="4"  class="text-right">
							  			<label >双创企业：</label>
							  		</el-col>
								  	<el-col :span="8">
								  		<label><input type="radio" checked name="shuangchuang1">否</label>
								  		<label style="margin-left:25px;"><input type="radio" name="shuangchuang1">是</label>
								  	</el-col>
								</el-row>
								<el-row>
							  		<el-col :span="4"  class="text-right">
							  			<label >国家扶持项目：</label>
							  		</el-col>
								  	<el-col :span="8">
								  		<label><input type="radio" checked name="fuchi1">否</label>
								  		<label style="margin-left:25px;"><input type="radio" name="fuchi1">是</label>
								  	</el-col>
								  	<el-col :span="4"  class="text-right">
							  			<label >引入知名风投：</label>
							  		</el-col>
								  	<el-col :span="8">
								  		<label><input type="radio" checked name="fengtou1">否</label>
								  		<label style="margin-left:25px;"><input type="radio" name="fengtou1">是</label>
								  	</el-col>
								</el-row>
						    </el-tab-pane>
						    <el-tab-pane label="基本财务数据" name="second">
						    	<el-row>
						    		<el-col :span='24'>
						    			<table style="width: 90%;" id="baseTable">
		                                    <thead>
		                                        <tr>
		                                            <th style="width: 25%;"></th>
		                                            <th style="width: 25%;" class="td_bg_gray">&nbsp;&nbsp;<label class="font_red">*</label>2016年</th>
		                                            <th style="width: 25%;" class="td_bg_gray">&nbsp;&nbsp;2015年</th>
		                                            <th style="width: 25%;" class="td_bg_gray">&nbsp;&nbsp;2014年</th>
		                                        </tr>
		                                    </thead>
		                                    <tbody>
		                                        <tr>
		                                            <td>营业总收入（元）：</td>
		                                            <td><input type="text" value="47,264,721.45"></td>
		                                            <td><input type="text"></td>
		                                            <td><input type="text"></td>
		                                        </tr>
		                                        <tr>
		                                            <td>净利润（元）：</td>
		                                            <td><input type="text" value="47,264,721.45"></td>
		                                            <td><input type="text"></td>
		                                            <td><input type="text"></td>
		                                        </tr>
		                                        <tr>
		                                            <td>所有者权益合计（元）：</td>
		                                            <td><input type="text" value="47,264,721.45"></td>
		                                            <td><input type="text"></td>
		                                            <td><input type="text"></td>
		                                        </tr>
		                                        <tr>
		                                            <td>应收账款（元）：</td>
		                                            <td><input type="text" value="47,264,721.45"></td>
		                                            <td><input type="text"></td>
		                                            <td><input type="text"></td>
		                                        </tr>
		                                    </tbody>
		                                </table>
						    		</el-col>
						    	</el-row>
						    </el-tab-pane>
						    <el-tab-pane label="更多财务数据" name="third">
						    	<el-row>
						    		<el-col :span="4" class="text-right">
						    			<label>现金流量净额（元）：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="16,546,674.68" style="width:80%;">
						    		</el-col>
						    		<el-col :span="4" class="text-right">
						    			<label>毛利（元）：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="16,546,674.68" style="width:80%;">
						    		</el-col>
						    	</el-row>
						    	<el-row>
						    		<el-col :span="4" class="text-right">
						    			<label>现金流量净额（元）：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="16,546,674.68" style="width:80%;">
						    		</el-col>
						    		<el-col :span="4" class="text-right">
						    			<label>毛利（元）：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="16,546,674.68" style="width:80%;">
						    		</el-col>
						    	</el-row>
						    	<el-row>
						    		<el-col :span="4" class="text-right">
						    			<label>现金流量净额（元）：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="16,546,674.68" style="width:80%;">
						    		</el-col>
						    		<el-col :span="4" class="text-right">
						    			<label>毛利（元）：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="16,546,674.68" style="width:80%;">
						    		</el-col>
						    	</el-row>
						    	<el-row>
						    		<el-col :span="4" class="text-right">
						    			<label>现金流量净额（元）：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="16,546,674.68" style="width:80%;">
						    		</el-col>
						    		<el-col :span="4" class="text-right">
						    			<label>毛利（元）：</label>
						    		</el-col>
						    		<el-col :span="8">
						    			<input type="text" value="16,546,674.68" style="width:80%;">
						    		</el-col>
						    	</el-row>
						    	
						    	
						    </el-tab-pane>
						  </el-tabs>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>


export default {
    data() {
        return {
        	activeName: 'second'
        };
    },
 //    mounted(){
	//     this.drawLine();
	// },
	// methods: {
	// }
}
</script>

<style lang="scss">
	.el-row{
		margin-top:20px;
	}
	.text-right{
		text-align:right;
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

	#baseTable{
		border-collapse:separate;
		border-spacing:30px 15px;
		th{
			height:35px;
			line-height:35px;
		}
		tr{
			height:35px;
			line-height:35px;
			td:first-child{
				text-align: right;
			}
			input[type='text']{
				width:99%;
			}
			td,input[type='text'],th{
				height:35px;
				line-height:35px;
			}
			.td_bg_gray{
				background-color:  rgba(238, 238, 238, 1);
			}
		}
	}
</style>