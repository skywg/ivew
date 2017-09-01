<template>
	<div>
		<p style="text-align: center;margin-top: 30px;font-size: 14px;line-height: 1.8">您的身份信息仅用于实名认证，我们不会将此信息用于其它任何地方<br/>实名认证后才能使用会员中心各项功能，请慎重填写</p>
		<div style="margin: 10px auto;text-align: center">

			<div style="text-align: center" >
				<Input v-model="certification.name" placeholder="姓名" style="width: 260px;height: 45px;margin-top:6px;" size="large" @on-change="userNameChange"></Input>
				<span class="zhushi">*</span>
			</div>
			<div style="text-align: center">
				<Input v-model="certification.idcard" placeholder="身份证" style="width: 260px;height: 45px;margin-top: 6px" size="large" @on-change="userNameChange"></Input>
				<span class="zhushi">*</span>
			</div>
			<div style="text-align: center">
				<Input v-model="certification.phone" placeholder="手机号" style="width: 260px;height: 45px;margin-top: 6px" size="large" @on-change="userNameChange"></Input>
				<span class="zhushi">*</span>
			</div>
			<div style="text-align: center">
				<span style="font-size: 14px;width: 190px;display: inline-block;text-align: left;    margin-left: -68px;">
									<Input v-model="certification.code" style="width: 260px;">
										<Button slot="append">验证码</Button>
				</Input>
								</span>

			</div>
			<div style="text-align: center">

				<Cascader :data="cityList" v-model="certification.city" style="width: 260px;height: 45px;margin-top: 6px;  margin-left: 280px;" @on-change="userNameChange"></Cascader>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cityList: this.$zone.data,
				certification:{
					name:null,
					idcard:null,
					code:null,
					phone:null,
					city:[]
				}


			}
		},
		created:function(){

		},
		methods: {

			userNameChange(){
				this.$store.commit('showUserName',this.certification)
			},


		 }
	}
</script>

<style>

</style>