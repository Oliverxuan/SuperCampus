const BASE_URL="http://152.136.185.210:7878/api/hy66"

export const myRequest=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method || 'GET',
			data:options.data || {},
			success:res=>{
				if(res.statusCode!=200){
					return uni.showToast({
						title:"获取数据失败！"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"请求失败"
				})
				reject(err)
			}
		})
	})
}