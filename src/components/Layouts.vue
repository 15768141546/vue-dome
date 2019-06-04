<template>
	<div>
		<div v-for = "(item, index) in data" :key = "item.id">
	        <p v-if = "item.id === 1" style="background:red"> {{item.id}}</p>
	        <p v-else style="background:green"> {{item.id}}</p>
    	</div>
	</div>
</template>

<script>
	var data=[{"name":1,"id":1},{"name":2,"id":2},{"name":3,"id":3}];
	export default {
		name:'test1',
		data() {
			return {
				data:data
			};
		},
		methods:{
			
		}
	}
</script>

<style>

</style>
