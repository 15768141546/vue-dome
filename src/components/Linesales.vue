<template>
	<div>
	<div class="line-top">
		<div class="grap-top">
			<div class="left">Sales</div>
			<div class="right">
				<span class="ridus">Weelky</span>
				<span><i class="el-icon-setting"></i></span>
			</div>
		</div>
		<div class="sales-echart-box" ref="testEchart">
			
		</div>
	</div>
	<div class="line-bottom">
		stock price
	</div>
	</div>
	
</template>

<script>
	import echarts from 'echarts'
	export default{
		name:'linesales',
		data(){
			return{
				chart: null
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
				this.chart = echarts.init(this.$refs.testEchart);
				// 把配置和数据放这里
				this.chart.setOption({
						tooltip: {  
							trigger: 'axis',
							showContent:true,
							formatter: function(param) {  
                        		var value = param[0].data;  
                        		//console.log(param[0].data)
                        		return '<div style="backgroundColor:#fc3615;color:#fff;fontSize:12px"> ' + value + '</div>';  
                   			}  
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
							data: ['MON', 'TUN', 'WED', 'THU', 'FRI']
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
								showSymbol: true,
								symbol: 'circle',     //设定为实心点也可设置图片
                            	symbolSize: 14,   //设定实心点的大小
								areaStyle: {
									normal:{
										color:'rgba(0,0,0,0)'//背景色
									}
								},
								itemStyle:{
									normal:{
										color:'#fc3615'//背景色的上边框色
									}
								},
								data: [420, 332, 101, 134, 90]
							}
							
							
						]
						})
					}
				}
	}
</script>

<style>
	.line-top {
		height:420px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	.sales-echart-box{
		height:328px;
		width:100%
	}
	.line-bottom{
		width:100%;
		height:130px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		margin-top:25px;
	}
</style>