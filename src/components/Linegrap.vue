<template>
	<div>
		<div class="grap-top">
			<div class="left">Earning Graph </div>
			<div class="right">
				<span class="ridus">Total Sell</span>
				<span>2019<i class="el-icon-arrow-down"></i></span>
				<span>July<i class="el-icon-arrow-down"></i></span>
				<span>18<i class="el-icon-arrow-down"></i></span>
			</div>
		</div>
		<div class="echart-box" ref="myEchart">

		</div>
		<div class="bottom">
			<div class="list" v-for="item in listData">
				<p class="p1">{{item.total}}</p>
				<p class="p2" :class="item.pName">{{item.name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		name: 'linegraps',
		data() {
			return {
				chart: null,
				listData:[{
					name:'Neglinnaya Street, RUS',total:'$32,749,448',pName:'colorP0'
				},
				{
					name:'Tucson Eiltra, USA',total:'$50,916,482',pName:'colorP1'
				},
				{
					name:'Markham Ontario, CA',total:'$25,418,804',pName:'colorP2'
				},
				{
					name:'This year total earning ',total:'$125,498,894',pName:'colorP3'
				}]
			}
		},
		mounted() {
			this.initChart();
		},
		beforeDestroy() {
			if(!this.chart) {
				return
			}
			this.chart.dispose();
			this.chart = null;
		},
		methods: {
			initChart() {
				this.chart = echarts.init(this.$refs.myEchart);
				// 把配置和数据放这里
				this.chart.setOption({
						tooltip: {
							trigger: 'axis',
							showContent:true,
							formatter:function(){
								
							}
						},
						toolbox: {
							
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '4%',
							containLabel: true
						},
						xAxis: [{
							type: 'category',
							boundaryGap: false,
							axisTick:{//去掉X轴刻度
								show:false
							},
							axisLine:{
								show:false,
								lineStyle:{
									color:'#768387'//X轴线的字颜色
								}
							},
							data: ['JAM', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC']
						}],
						yAxis:{
							axisLine:{
								show:false
							},
							axisTick:{//去掉X轴刻度
								show:false
							},
							axisLabel:{
								interval:0,
								textStyle:{
									color:"#768387",
									fontSize:14
								}
							}
							},
						series: [{
								type: 'line',
								showSymbol: false,
								zlevel:5,//每一条线设置层级可以让它们不交叉显示
								areaStyle: {
									normal:{
										color:'#109bd9'//背景色
									}
								},
								itemStyle:{
									normal:{
										color:'#109bd9'//背景色的上边框色
									}
								},
								data: [420, 332, 101, 134, 90, 230, 210,101, 132, 40, 21, 20]
							},
							{
								type: 'line',
								showSymbol: false,
								zlevel:6,
								areaStyle: {
									normal:{
										color:'#4ff295'
									},
									lineStyle:{
										width:1
									}
								},
								itemStyle:{
									normal:{
										color:'#4ff295'//背景色的上边框色
									},
									lineStyle:{
										width:1
									}
								},
								data: [220, 182, 191, 234, 290, 330, 310,121, 114, 60, 30, 80]
							},
							{
								type: 'line',
								showSymbol: false,
								zlevel:7,
								areaStyle: {
									normal:{
										color:'#613af7'
									}
								},
								itemStyle:{
									normal:{
										color:'#613af7'//背景色的上边框色
									},
									lineStyle:{
										width:1
									}
								},
								data: [150, 232, 201, 154, 190, 330, 410,161, 124, 40, 200, 10]
							}
							
						]
						})
					}
				}
			}
</script>

<style>
	.grap-top {
		padding: 0 25px;
		height: 70px;
		border-bottom: 1px solid #d8e3e7;
		display: flex;
		line-height: 70px;
		display: flex;
		justify-content: space-between;
	}
	
	.grap-top .left {
		width: 20%;
		color: #313b3d;
		font-size: 20px;
	}
	
	.grap-top .right {
		width: 70%;
		text-align: right
	}
	
	.grap-top .right .ridus {
		height: 30px;
		width: 90px;
		background: #f2f6f7;
		color: #313b3d;
		border-radius: 30px;
		line-height: 30px;
		text-align: center;
		display: inline-block;
	}
	
	.echart-box {
		padding: 35px;
		height: 330px;
		border-bottom: 1px solid #d8e3e7;
	}
	.bottom{
		height:105px;
		display: flex;
		padding:0 35px;
	}
	.list{
		width:23.5%;
		height:105px;
		text-align: left;
	}
	.p1{
		font-size:16px;
		color:#313b3d;
		margin:35px 0 7px 0;
	}
	.p2{
		font-size:12px;
		color:#313b3d;
		margin:0
	}
	.colorP1{
		color:#109bd9
	}
	.colorP2{
		color:#613af7
	}
	.colorP3{
		color:#4ff295
	}
</style>