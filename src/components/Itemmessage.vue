<template>
	<div>
		<div class="grap-top">
			<div class="left">Item Progress </div>
			<div class="right">
				<span><i class="el-icon-arrow-down"></i></span>
				<span><i class="el-icon-setting"></i></span>
				<span><i class="el-icon-close"></i></span>
			</div>
		</div>
		<div class="message-item">
			<div class="item">
				<div class="item-img"></div>
				<div class="item-text">
					<p class="item-p1">Text of the printing and typesetting industry.</p>
					<p class="item-p2">By <span>Adam Smith</span></p>
				</div>
				<div class="item-time">
					<i class="el-icon-alarm-clock"></i>Last updated Today at 4:24 AM
				</div>
				<div class="item-comment">
					<i class="el-icon-chat-round"></i>623
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'itemmessage',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.message-item{
		padding:20px 30px;
	}
	.item{
		width:100%;
		height:100px;
		background: #f5f8f9;
		margin-top:10px;
		display: flex;
	}
	.item-img{
		width:60px;
		height:60px;
		background: #f40;
		margin:20px 0 20px 15px;
	}
	.item-text{
		width:420px;
		margin-left:30px;
	}
	.item-text .item-p1{
		font-size: 18px;
		color:#313b3d;
		margin:30px 0 0px 0
	}
	.item-text .item-p2{
		font-size: 14px;
		color:#313b3d;
		margin-top: 0;
	}
	.item-text .item-p2 span{
		color:#fc3615;
	}
	.item-time{
		line-height:100px;
		width:300px;
		font-size: 14px;
	}
	.item-comment{
		width:100px;
		line-height:100px;
	}
</style>