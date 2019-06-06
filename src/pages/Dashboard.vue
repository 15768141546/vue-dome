<template>
<div>
	<div class="top-crumbs">
		<span class="left">dashboard</span>
		<span class="right">
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
		  <el-breadcrumb-item>Dashboard</el-breadcrumb-item>
		</el-breadcrumb>
		</span>
	</div>
	<div class="con-main">
		<div class="card">
			<div class="list" v-for="item in totalData">
				<img :src="item.url"/>
				<div class="title">
					<p>{{item.total}}</p>
					<span>{{item.name}}</span>
				</div>
			</div>
		</div>
		<div class="line-echart">
			<div class="line-grap">
				<line-graps></line-graps>
			</div>
			<div class="line-sales">
				<line-sales></line-sales>
			</div>
		</div>
		<div class="message-box">
			<item-message></item-message>
		</div>
		<div>	
		</div>
	</div>
</div>
</template>

<script>
	import lineGraps from '../components/Linegrap.vue';
	import lineSales from '../components/Linesales.vue';
	import itemMessage from '../components/Itemmessage.vue'
	export default {
		name: 'dashboard',
		components:{
			lineGraps,
			lineSales,
			itemMessage
		},
		data() {
			return {
				totalData:[
				{name:'Total User',total:'24467',url:require("../images/01_dashboard_15.png")},
				{name:'New Order Received',total:'3842',url:require("../images/01_dashboard_18.png")},
				{name:'Total Sold Today',total:'25678',url:require("../images/01_dashboard_09.png")},
				{name:'Total Items Delivered',total:'4578',url:require("../images/01_dashboard_12.png")},
				]
			};
		}
	}
</script>

<style>
	.top-crumbs{
		height:76px;
		border-bottom:1px solid #d8e3e7;
		background:#fff;
		line-height:76px;
		padding:0 30px;
		color:#313b3d;
		
	}
	.top-crumbs .left{
		font-size:24px;
		font-family: "Myriad Pro";
	}
	.top-crumbs .right{
		font-size:12px;
		margin-top: 32px;
		font-family: "Myriad Pro";
		float: right;
	}
	.con-main{
		padding:35px;
	}
	.card{
		height:127px;
		width:100%;
		justify-content:space-between;
		display:flex;
	}
	.card .list{
		width:23.5%;
		height:127px;
		background: #fff;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}
	.list img{
		width:70px;
		margin-top:25px;
		margin-left:8%;
		float: left;
	}
	.list .title{
		margin-left:18.8%;
	}
	.list .title p{
		color: #313b3d;
    	font-size: 30px;
    	margin: 30px 0 0px 0;
	}
	.list .title span{
		color:#95a0a2;
		font-size: 12px;
	}
	.line-echart{
		height:578px;
		width:100%;
		margin-top:30px;
		justify-content:space-between;
		display:flex;
	}
	.line-grap{
		background: #fff;
		width:70%;
		height:578px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	.line-sales{
		background: #fff;
		width:28%;
		height:578px;
	}
	.message-box{
		background: #fff;
		margin-top:30px;
		width:100%;
		height:560px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
</style>
