<template>
	<view class="center">
		<view class="center_top"><view class="mask"></view></view>
		<view class="center_box_bg">
			<view class="profily">
				<view class="base">
					<view class="profily_header"></view>
					<text>{{ userName }}</text>
					<image v-show="isToken" @click="toLogin" src="../../static/fumou-center-template/login.png" mode=""></image>
				</view>
				<view class="order_status">
					<view class="status" v-for="item in status">
						<image class="icon" :src="item.url" mode="aspectFill"></image>
						<text>{{ item.name }}</text>
					</view>
				</view>
			</view>
			<view class="baiban"></view>
			<view class="center_menu">
				<view class="menu_item" @click="itemClick(index)" v-for="(item, index) in menus">
					<image :src="item.icon" mode="aspectFill"></image>
					<text>{{ item.name }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isToken: true,
			userName: '请登陆后使用～',
			status: [
				{
					key: 1,
					name: '我的课表',
					url: '../../static/pc.png'
				},
				{
					key: 2,
					name: '我的待办',
					url: '../../static/todo.png'
				},
				{
					key: 3,
					name: '打卡签到',
					url: '../../static/data.png'
				},
				{
					key: 4,
					name: '我的快递',
					url: '../../static/express.png'
				}
			],
			menus: [
				{
					name: '我的信息',
					icon: '../../static/info.png',
					key: 1
				},
				{
					name: '我的班级',
					icon: '../../static/classmates.png',
					key: 2
				},
				{
					name: '我的文件',
					icon: '../../static/mydata.png',
					key: 3
				},
				{
					name: '帮助中心',
					icon: '../../static/helpcenter.png',
					key: 4
				},
				{
					name: '意见反馈',
					icon: '../../static/help.png',
					key: 5
				},
				{
					name: '退出登陆',
					icon: '../../static/atom.png',
					key: 6
				}
			]
		};
	},
	methods: {
		
		toLogin() {
			uni.redirectTo({
				url: '../login/login'
			});
		},
		itemClick(index) {

			switch (index) {
				case 5:
					uni.clearStorage();
					uni.showToast({
						title: '已退出登录～',
						duration: 2000,
						icon: 'success',
						success() {
							uni.reLaunch({
								url: '../home/home'
							});
						}
					});
					break;
				default:
					uni.showToast({
						title: '还未开发哦～',
						duration: 2000,
						icon: 'none'
					});
			}
		}
	},
	onLoad() {
		
		uni.getStorage({
			key: 'userName',
			success: res => {
				this.userName = res.data;
			}
		});
		uni.getStorage({
			key: 'userToken',
			success: res => {
				if (res.data) {
					this.isToken = true;
				}
				this.isToken = false;
			}
		});

	},
	computed: {}
};
</script>

<style lang="scss">
page {
	height: 100%;
}

.profily,
.profily_header {
	border-radius: 8px;
}

.center {
	height: 100%;

	&_top {
		height: 18%;
		background: url('../../static/myimage.jpeg') no-repeat 0% 50%;
		background-size: cover;

		// background: #E6E6E6;
		.mask {
			background: rgba(0, 0, 0, 0.4);
			height: 100%;
		}
	}

	&_box_bg {
		background: #f9f9f9;
		position: relative;

		.profily {
			position: absolute;
			width: 90%;
			// border:1px solid #F7F7F7;
			margin: 0 auto;
			top: -100upx;
			left: 5%;
			background: #fefefe;
			padding: 35upx;
			box-sizing: border-box;
			box-shadow: 0px 2px 5px #ededed;
		}
	}
}

.base {
	display: flex;
	align-items: center;
	border-bottom: 2px solid #f6f6f6;
	padding-bottom: 35upx;
	position: relative;
	.profily_header {
		height: 120upx;
		width: 120upx;
		background-image: url('../../static/myimage.jpeg');
		background-size: 100%;
	}

	text {
		margin-left: 20px;
		font-size: 30upx;
	}

	image {
		position: absolute;
		height: 40upx;
		width: 40upx;
		right: 0px;
		top: 0px;
	}
}

.order_status {
	display: flex;
	justify-content: space-between;
	margin-top: 35upx;

	.status {
		width: 140upx;
		font-size: 24upx;
		text-align: center;
		letter-spacing: 0.5px;
		display: flex;
		flex-direction: column;
		.icon {
			width: 50upx;
			height: 50upx;
			margin: 0 auto;
			margin-bottom: 5px;
		}
	}
}

.baiban {
	background: #fefefe;
	height: 300upx;
}

.center_menu {
	width: 100%;
	display: inline-block;

	.menu_item {
		font-size: 28upx;
		letter-spacing: 1px;
		padding: 14px 5%;
		background: #fefefe;
		overflow: hidden;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		position: relative;
		border-bottom: 1px solid #efefef;

		&:hover {
			background: #f6f6f6 !important;
		}

		&::after {
			content: '';
			width: 30upx;
			height: 30upx;
			position: absolute;
			right: 5%;
			background: url('../../static/fumou-center-template/right.png') no-repeat;
			background-size: 100%;
		}

		text:nth-of-type(1) {
			margin-left: 10px;
		}

		image {
			width: 40upx;
			height: 40upx;
		}

		&:nth-of-type(4) {
			margin-top: 10px;
		}
	}
}
</style>
