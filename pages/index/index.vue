<template>
	<view class="container">
	<h1 @click="goHome">
		SuperCampus 点击进入
	</h1>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
		goHome(){
			uni.switchTab({
				url:"../home/home"
			})
		}
		}
	}
</script>

<style>
	
</style>
