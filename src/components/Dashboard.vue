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
			<div class="list">
				<img src=""/>
			</div>
			<div class="list">2</div>
			<div class="list">3</div>
			<div class="list">4</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		name: 'dashboard',
		data() {
			return {
				
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
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
	}
</style>
