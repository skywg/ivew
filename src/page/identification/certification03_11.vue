<template>
	<!--3实名认证第十一步开始-->
	<div>

		<p style="text-align: center;margin-top: 30px;font-size: 16px;line-height: 1.8; padding-top: 65px;">填加银行卡</p>
		<div style="margin: 10px auto">
			<div style="text-align: center">
				<Input v-model="account.bank" placeholder="银行卡号(只支持储蓄卡)" style="width: 260px;height: 45px;margin-top:6px;" size="large" @on-change="change"></Input>
				<span class="zhushi">*</span>
			</div>
			<div style="text-align: center">
				<Input v-model="account.phone" placeholder="银行预留手机号" style="width: 260px;height: 45px;margin-top:6px;" size="large" @on-change="change"></Input>
				<span class="zhushi">*</span>
			</div>
			<div style="text-align: center">
				<Input v-model="value" placeholder="输入验证码" style="width: 260px;height: 45px;margin-top: 6px" size="large"></Input>
				<span class="zhushi">*</span>
			</div>

		</div>
		<div style="height: 30px"></div>
	</div>
	<!--3实名认证第十一步结束-->
</template>

<script>
	export default {
		data() {
			return {
				account:{
					bank:'',
					phone:''
				}
			}
		},
		created:function(){
		this.$parent.baifen=100
	},
	methods:{
		change(){
			this.$store.commit('saveAccount',this.account)
		}
	}
	}
</script>

<style>

</style>