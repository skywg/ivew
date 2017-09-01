<template>
	<div>

		<div style="text-align: center;margin: 20px 0 40px 0">
			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right" class="span-width">QQ号码</span>
				<span style="font-size: 14px;width: 190px;display: inline-block;text-align: left">
									<Input v-model="qq" placeholder="请输入..." style="width: 120px" v-on:input="change"></Input></span>
				<i-switch style="margin-left: 30px" v-model="switch1" @on-change="change1">
					<span slot="open">公开</span>
        			<span slot="close">隐藏</span>
				</i-switch>
			</div>
			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right" class="span-width">座机号码</span>
				<span style="font-size: 14px;width: 190px;display: inline-block;text-align: left">
									<Input v-model="zuoji" placeholder="请输入..." style="width: 120px" v-on:input="change"></Input></span>
				<i-switch style="margin-left: 30px" v-model="switch2" @on-change="change1">
					<span slot="open">公开</span>
        			<span slot="close">隐藏</span>
				</i-switch>
			</div>
			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right" class="span-width"> 手机号码</span>
				<span style="font-size: 14px;width: 190px;display: inline-block;text-align: left">
									<Input v-model="mobile" placeholder="请输入..." style="width: 120px" v-on:input="change"></Input></span>
				<i-switch style="margin-left: 30px" v-model="switch6" @on-change="change1">
					<span slot="open">公开</span>
        			<span slot="close">隐藏</span>
				</i-switch>
			</div>

			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right;width: 97px;display: inline-block"></span>

				<span style="font-size: 14px;width: 190px;display: inline-block;text-align: left;    margin-left: -68px;">
									<Input v-model="code"  style="width: 120px;">
										<Button slot="append" >验证码</Button>
									</Input>
								</span>
			</div>

			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right" class="span-width">邮箱</span>
				<span style="font-size: 14px;width: 190px;display: inline-block;text-align: left">
									<Input v-model="email" placeholder="请输入..." style="width: 120px" v-on:input="change"></Input></span>
				<i-switch style="margin-left: 30px" v-model="switch3" @on-change="change1">
					<span slot="open">公开</span>
        			<span slot="close">隐藏</span>
				</i-switch>
			</div>
			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right" class="span-width">常驻地</span>
				<span style="font-size: 14px;width: 190px;display: inline-block;text-align: left">
									<Input v-model="addr" placeholder="请输入..." style="width: 120px" v-on:input="change"></Input></span>
				<i-switch style="margin-left: 30px" v-model="switch4" @on-change="change1">
					<span slot="open">公开</span>
        			<span slot="close">隐藏</span>
				</i-switch>
			</div>
			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right" class="span-width">邮政编码</span>
				<span style="font-size: 14px;width: 190px;display: inline-block;text-align: left">
									<Input v-model="postalcode" placeholder="请输入..." style="width: 120px" v-on:input="change"></Input></span>
				<i-switch style="margin-left: 30px" v-model="switch5" @on-change="change1">
					<span slot="open">公开</span>
        			<span slot="close">隐藏</span>
				</i-switch>
			</div>

		</div>
		<div>
			<h2 style="text-align: center;padding:0 0 20px 0">实时预览</h2>
			<Input v-model="con.content" type="textarea" :rows="7" placeholder="请输入..." v-on:input="saveBasic"></Input>
		</div>
	</div>
</template>

<script>
	var contents={
		qq:'',
		zuoji:'',
		mobile:'',
		email:'',
		addr:'',
		postalcode:''
	};
	var contents1={
		qq:'',
		zuoji:'',
		mobile:'',
		email:'',
		addr:'',
		postalcode:''
	};
	export default {
		data() {
			return {
				switch1:true,
				switch2:true,
				switch3:true,
				switch4:true,
				switch5:true,
				switch6:true,
				qq:'',
				zuoji:'',
				mobile:'',
				email:'',
				addr:'',
				postalcode:'',
				con:{
					content:'',
					content1:''
				}

			}
		},
		created: function() {
		},
		methods: {
			saveBasic() {
				this.$store.commit('savePhone',this.con)
			},
			change(){
				if(this.qq!=''){
					contents.qq=this.qq
					if(this.switch1==true){
						contents1.qq=this.qq
					}
				}
				if(this.zuoji!=''){
					contents.zuoji=','+this.zuoji;
					if(this.switch2==true){
						contents1.zuoji=','+this.zuoji
					}
				}
				if(this.mobile!=''){
					contents.mobile=','+this.mobile;
					if(this.switch6==true){
						contents1.mobile=','+this.mobile
					}
				}
				if(this.addr!=''){
					contents.addr=','+this.addr;
					if(this.switch3==true){
						contents1.addr=','+this.addr
					}
				}
				if(this.email!=''){
					contents.email=','+this.email;
					if(this.switch4==true){
						contents1.email=','+this.email
					}
				}
				if(this.postalcode!=''){
					contents.postalcode=','+this.postalcode;
					if(this.switch5==true){
						contents1.postalcode=','+this.postalcode
					}
				}

				this.con.content=contents.qq+contents.zuoji+contents.mobile
								+contents.addr+contents.email
								+contents.postalcode;
				this.con.content1=contents1.qq+contents1.zuoji+contents1.mobile
								+contents1.addr+contents1.email
								+contents1.postalcode;
				this.saveBasic()
			}
,
			change1(){
					if(this.qq!=''&this.switch1==true){
						contents1.qq=this.qq
					}else{
						contents1.qq=''
					}
					if(this.zuoji!=''&this.switch2==true){
						contents1.zuoji=','+this.zuoji
					}else{
						contents1.zuoji=''
					}
					if(this.mobile!=''&this.switch6==true){
						contents1.mobile=','+this.mobile
					}else{
						contents1.mobile=''
					}
					if(this.addr!=''&this.switch3==true){
						contents1.addr=','+this.addr
					}else{
						contents1.addr=''
					}
					if(this.email!=''&this.switch4==true){
						contents1.email=','+this.email
					}else{
						contents1.email=''
					}
					if(this.postalcode!=''&this.switch5==true){
						contents1.postalcode=','+this.postalcode
					}else{
						contents1.postalcode=''
					}

				this.con.content1=contents1.qq+contents1.zuoji+contents1.mobile
								+contents1.addr+contents1.email
								+contents1.postalcode;
				this.saveBasic()
			}

			}

	}
</script>

<style>

</style>