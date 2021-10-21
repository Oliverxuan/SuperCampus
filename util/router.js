
// 页面白名单
const whiteList = [
	'/',
	'/pages/me/me',
	'/pages/index/index',
	'/pages/login/forget-password',
	'/pages/login/login',
	'/pages/login/registration',
	'/pages/home/home',
	'/pages/index/index',
	'/pages/category/index',
]

function hasPermission (url) {
	let access_token = uni.getStorageSync('userToken')
	// 在白名单中或有token，直接跳转
	if(whiteList.indexOf(url) !== -1 || access_token) {
		return true
	}
	return false
}

uni.addInterceptor('navigateTo', {
	// 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转
	invoke (e) {
		if(!hasPermission(e.url)){
			uni.showToast({
				title:"请登陆后使用",
				duration:2000,
				icon:"none"
			})
			return false
		}
		return true
		
	},
	success (e) {
		// uni.showToast({
		// 	title:"请登陆后使用",
		// 	duration:2000,
		// 	icon:"none"
		// })
		// console.log(e)
	}
})

// uni.addInterceptor('switchTab', {
// 	// tabbar页面跳转前进行拦截
// 	invoke (e) {
// 		if(!hasPermission(e.url)){
// 			uni.reLaunch({
// 				url: '/pages/index/index'
// 			})
// 			return false
// 		}
// 		return true
// 	},
// 	success (e) {
// 		// console.log(e)
// 	}
// })