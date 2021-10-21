<template>
	<view class="home">
		<!-- 轮播图 -->
		<!-- 显示轮播点 轮播循环 -->
<!-- 		<swiper class="swiper" indicator-dots circular>
			<swiper-item v-for="(item, index) in swiperd"><image class="images" :src="item.image"></image></swiper-item>
		</swiper> -->
		<swiper class="swiper" indicator-dots circular>
			<swiper-item><image class="images" src="../../static/bg.png"></image></swiper-item>
		</swiper>

		<!--宫格-->
		<uni-grid @change="grid_index" class="grid" :column="4" :showBorder="false">
			<uni-grid-item :index="0" class="items">
				<view class="iconfont">&#xe615;</view>
				<text>课程表</text>
			</uni-grid-item>
			<uni-grid-item :index="1" class="items">
				<view class="iconfont">&#xe600;</view>
				<text>成绩</text>
			</uni-grid-item>
			<uni-grid-item :index="2" class="items">
				<view class="iconfont">&#xe623;</view>
				<text>图书馆</text>
			</uni-grid-item>
			<uni-grid-item :index="3" class="items">
				<view class="iconfont">&#xe60f;</view>
				<text>校园地图</text>
			</uni-grid-item>
			<uni-grid-item :index="4" class="items">
				<view class="iconfont">&#xe636;</view>
				<text>快递服务</text>
			</uni-grid-item>
			<uni-grid-item :index="5" class="items">
				<view class="iconfont">&#xe8ba;</view>
				<text>二手交易</text>
			</uni-grid-item>
			<uni-grid-item :index="6" class="items">
				<view class="iconfont">&#xe61b;</view>
				<text>悬赏互助</text>
			</uni-grid-item>
			<uni-grid-item :index="7" class="items">
				<view class="iconfont">&#xe62a;</view>
				<text>后勤服务</text>
			</uni-grid-item>
			<uni-grid-item :index="8" class="items">
				<view class="iconfont">&#xe602;</view>
				<text>失物招领</text>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiper: []
		};
	},
	onLoad() {
		// this.getSwipers();
	},
	methods: {
		// async getSwipers() {
		// 	const res = await this.$myRequest({
		// 		url: '/home/multidata'
		// 	});
		// 	this.swiper = res.data.data.banner.list;
		// },
		grid_index(index) {
			var goIndex = index.detail.index;
			console.log(goIndex);
			switch (goIndex) {
				case 0:
					uni.navigateTo({
						url: '../curriculum/curriculum'
					});
					break;
				case 1:
					uni.navigateTo({
						url: "../score/score"
					});
					break;
				case 2:
					uni.navigateTo({
						url: "../book/book"
					});
					break;
				case 3:
					uni.navigateTo({
						url: "../map/map"
					});
					break;
				case 4:
					uni.navigateTo({
						url: "../express/express"
					});
					break;
				case 5:
					uni.navigateTo({
						url: "../cc/cc"
					});
					break;
				case 6:
					uni.navigateTo({
						url: "../help/help"
					});
					break;
				case 7:
					uni.navigateTo({
						url: "../service/service"
					});
					break;
					case 8:
					uni.navigateTo({
						url: "../find/find"
					});
					break;
			}
		}
	}
};
</script>

<style>
.home{
		background-color: #fcfff7;
		padding-bottom: 400rpx;
	}
.swiper {
	width: 750rpx;
	height: 380rpx;
}
.images {
	width: 100%;
	height: 380rpx;
}
.items {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 30rpx;
}
.iconfont {
	margin-bottom: 20rpx;
	font-size: 50rpx;
}
</style>
