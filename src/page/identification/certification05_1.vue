<template>
	<div>

		<!--5完善信息第一步开始-->
			<div>
				<div style="width: 302px;margin-left: 304px;margin-top: 60px"><img src="../../img/zhuce-img01.png" alt=""></div>
				<div class="zuce1-text" style="text-align: center;margin-bottom: 30px">
					<h2 style="font-size: 22px;line-height: 76px">完善</h2>
					<p style="font-size: 14px">检测到您还没有完善用户信息，为更好的使用系统，请您完善个人信息<br/>
	您可以通过下面的链接，前往个人资料页面</p>
				</div>
			</div>
			<!--5完善信息第一步结束-->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cityList: [{
						value: 'beijing',
						label: '北京市'
					},
					{
						value: 'shanghai',
						label: '上海市'
					},
					{
						value: 'shenzhen',
						label: '深圳市'
					},
					{
						value: 'hangzhou',
						label: '杭州市'
					},
					{
						value: 'nanjing',
						label: '南京市'
					},
					{
						value: 'chongqing',
						label: '重庆市'
					}
				],
				certification:{
					name:'',
					idcard:'',
					code:'',
					phone:'',
					city:''
				}

			}
		},
		created:function(){

		},
		methods: {
			userNameChange(){
				 this.$store.state.certification = this.certification;
			}
		}
	}
</script>

<style>

</style>