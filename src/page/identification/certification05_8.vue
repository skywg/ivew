<template>
	<div>

		<div style="text-align: center;margin: 20px 0 40px 0">

			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right;position: relative;margin-left: -90px;">时间</span>
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left">
  				<Date-picker v-model="time" format="yyyy年MM月" @on-change="time=$event" type="datetime" @on-ok="change" confirm="true"
					 placeholder="选择日期" style="width: 150px;"></Date-picker>
															</span>
				<i-switch style="margin-left: 30px" v-model="switch1" @on-change="change1()">
					<span slot="open">公开</span>
					<span slot="close">隐藏</span>
				</i-switch>
			</div>
			<Checkbox-group v-model="political" @on-change="change">
			<div style="margin-bottom: 16px">
				<Checkbox label="中共党员">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									中共党员
					</span>
				</Checkbox>

			</div>
			<div style="margin-bottom: 16px">
				<Checkbox label="团员">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									团员
					</span>
				</Checkbox>
			</div>

			<div style="margin-bottom: 16px">
				<Checkbox label="中国民主同盟">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									中国民主同盟
									</span>
									</Checkbox>
			</div>
			<div style="margin-bottom: 16px">
				<Checkbox label="中国民主建国会">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									中国民主建国会
									</span></Checkbox>
			</div>
			<div style="margin-bottom: 16px">
				<Checkbox label="中国民主促进会">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									中国民主促进会
									</span></Checkbox>
			</div>
			<div style="margin-bottom: 16px">
				<Checkbox label="中国致公党">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									中国致公党
									</span></Checkbox>
			</div>
			<div style="margin-bottom: 16px">
				<Checkbox label="九三学社">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									九三学社
									</span></Checkbox>
			</div>
			<div style="margin-bottom: 16px">
				<Checkbox label="台湾民主自治同盟">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									台湾民主自治同盟
									</span></Checkbox>
			</div>
			<div style="margin-bottom: 16px">
				<Checkbox label="国民党">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									国民党
									</span></Checkbox>
			</div>
			<div style="margin-bottom: 16px">
				<Checkbox label="民主党">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									民主党
									</span></Checkbox>
			</div>

			<div style="margin-bottom: 16px">
				<Checkbox label="无党派人士">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									无党派人士
									</span></Checkbox>
			</div>
			<div style="margin-bottom: 16px">
				<Checkbox label="民进党">
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									民进党
									</span></Checkbox>
			</div>
		</Checkbox-group>
		</div>
		<div>
			<h2 style="text-align: center;padding:0 0 20px 0">实时预览</h2>

			<Input v-model="con.content" type="textarea" :rows="7" placeholder="请输入..."></Input>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				switch1:true,
				political:[],
					time:'',
				con:{
					content:'',
					content1:''
				},
				contents:{
					political:'',
					time:'',
				},
				contents1:{
					political:'',
					time:'',
				}

			}
		},
		methods: {
			saveBasic() {
				this.$store.commit('savePolitical', this.con)
			},
			change() {

				if(this.time!= '') {
					this.contents.time=this.time
					if(this.switch1==true){
						this.contents1.time=this.time
					}
				}
				if(this.political.length != 0) {
					this.contents.political=this.political[0]
					if(this.switch1==true){
					this.contents1.political=this.political[0]
					}
				}

				this.con.content =this.contents.time+"加入"+this.contents.political
				this.con.content1 =this.contents1.time+"加入"+this.contents1.political
				this.saveBasic()
			},
			change1() {

				if(this.time!= ''&this.switch1==true) {
					this.contents1.time=this.time

				}else{
					this.contents1.time=''
				}
				if(this.political.length != 0&this.switch1==true) {
					this.contents1.political=this.political[0]

				}else{
					this.contents1.political=''
				}

				this.con.content1 =this.contents1.time+"加入"+this.contents1.political
				this.saveBasic()
			}

		}
	}
</script>

<style>

</style>