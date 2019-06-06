<template>
	<div>
		<el-container>
			<el-aside style="width:264px;">
				<div class="logo-box"><img :src="imgUrl0"/></div>
				<div class="vue-aside-nav">
					<vue-aside></vue-aside>
				</div>
			</el-aside>
			<el-container>
				<el-header style="height:78px;">
					<vue-header></vue-header>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
    import vueAside from './pages/vueAside.vue';
    import vueHeader from './pages/vueHeader.vue'
	export default {
		components: {
			vueAside,
			vueHeader
		},
		data() {
			return {
				"imgUrl0":require("./images/01_dashboard_01.png")
			};
		}
	}
</script>

<style>
	body,
	html {
		padding: 0;
		margin: 0;
	}
	
	.logo-box {
		width: 264px;
		height: 78px;
		background: #00b1ef;
	}
	.vue-link {
		height: 40px;
		line-height: 40px;
		margin: 19px 0;
		padding-left: 25px;
		color: #909399;
		display:block;
		text-decoration: none;
	}
	
	.vue-link:hover {
		background-color: #3c4b5d;
		border-right: 5px solid #00b1ef;
	}
	
	.router-link-active {
		background-color: #3c4b5d;
		border-right: 5px solid #00b1ef;
		color: #fff;
	}
	
	[class*=" el-icon-"],
	[class^=el-icon-] {
		margin-right: 20px;
	}
	
	.el-header {
		background-color: #ffffff;
		color: #333;
		line-height: 78px;
		border-bottom: 1px solid #d8e3e7;
	}
	
	.el-aside {
		width: 264px;
		background: #3c4b5d;
		color: #fff;
	}
	
	.el-main {
		background: #f5f8f9;
		width: 100%;
		height: 100%;
		padding:0;
	}
</style>