<template>
	<view class="content">
		<view class="logo"><image src="../../static/login-registration/logo.png" mode=""></image></view>
		<view class="uni-form-item uni-column"><input type="text" class="uni-input" v-model="userName" placeholder="请输入账号" /></view>
		<view class="uni-form-item uni-column"><input type="password" class="uni-input" v-model="password" placeholder="请输入密码" /></view>
		<button type="primary" @tap="login">登陆</button>
		<view class="links">
			<view @tap="gotoForgetPassword">忘记密码？</view>
			<view>|</view>
			<view class="link-highlight" @tap="gotoRegistration">注册账号</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userName: '',
			password: ''
		};
	},
	onLoad() {
	},
	methods: {
		gotoRegistration: function() {
			uni.navigateTo({ url: 'registration' });
		},
		gotoForgetPassword: function() {
			uni.navigateTo({ url: 'forget-password' });
		},
		login() {
			if (this.name == '') {
				uni.showToast({
					title: '请输入用户名！',
					duration: 2000,
					icon: 'error'
				});
				return;
			}
			if (this.password == '') {
				uni.showToast({
					title: '请输入密码！',
					duration: 2000,
					icon: 'error'
				});
				return;
			}
			this.sendLogin();
	    },
		async sendLogin() {
			const res = await this.$myRequest({
				method: 'POST',
				url: '/auth/login',
				data: {
					name: this.userName,
					password: this.password
				},
			});
			if (res.statusCode == 200) {
				uni.showToast({
					title: '登陆成功！',
					duration: 2000,
					icon: 'success',
					success() {
						uni.setStorage({
						    key: 'userName',
						    data: res.data.name,
						    success: function () {

						    }
						});
						uni.setStorage({
						    key: 'userToken',
						    data: res.data.token,
						    success: function () {

						    }
						});
						uni.switchTab({
							url: '../me/me'
						});
					}
				});
				return;
			}
			uni.showToast({
				title: '登陆失败！',
				duration: 2000,
				icon: 'error'
			});
			return;
		}
	}
};
</script>

<style lang="scss" scoped>
$color-primary: #5c8dc8;
.content {
	padding: 100upx;
}
.logo {
	text-align: center;
	image {
		height: 200upx;
		width: 200upx;
		margin: 0 0 60upx;
	}
}
.uni-form-item {
	margin-bottom: 40upx;
	padding: 0;
	border-bottom: 1px solid #e3e3e3;
	.uni-input {
		font-size: 30upx;
		padding: 7px 0;
	}
}
button[type='primary'] {
	background-color: $color-primary;
	border-radius: 0;
	font-size: 34upx;
	margin-top: 60upx;
}
.links {
	text-align: center;
	margin-top: 40upx;
	font-size: 26upx;
	color: #999;
	view {
		display: inline-block;
		vertical-align: top;
		margin: 0 10upx;
	}
	.link-highlight {
		color: $color-primary;
	}
}
</style>
