<style scoped>
	.dropbtn {
	line-height: 30px;
	font-size: 16px;
	border: none;
	cursor: pointer;
	padding-right: 18px;
	color: #666;
	outline: none;
}
</style>
<template>
	<div>
		<div style="text-align: center;margin: 20px 0 40px 0">
			<div v-for="(c,index) in con">
				<div style="margin-bottom: 16px" v-show="c.sch0" >
					<input v-model="c.work" class="dropbtn"/>
					<img src="../../../src/img/ns-head-jtx.png" @click="show(index)" />
				</div>
				<div v-show="c.sch1" >
			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right" class="span-width">工作单位</span>
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left">
					<Input v-model="c.work" placeholder="请输入..." style="width: 150px" v-on:input="change(index)"></Input>
				</span>
				<i-switch style="margin-left: 30px" v-model="c.switch1" @on-change="change1">
					<span slot="open">公开</span>
					<span slot="close">隐藏</span>
				</i-switch>
			</div>
			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right" class="span-width">工作职位</span>
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left">
									 <Input v-model="c.job" placeholder="请输入..." style="width: 150px" v-on:input="change(index)"></Input>
								</span>
				<i-switch style="margin-left: 30px" v-model="c.switch2" @on-change="change1">
					<span slot="open">公开</span>
					<span slot="close">隐藏</span>
				</i-switch>
			</div>
			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right" class="span-width">工作时间</span>
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left">

				<Date-picker v-model="c.time" format="yyyy年MM月" @on-change="time=$event" type="daterange" @on-ok="change(index)" confirm="true"
					 placeholder="选择日期" style="width: 150px"></Date-picker>
				</span>
				<i-switch style="margin-left: 30px" v-model="c.switch3" @on-change="change1(index)">
					<span slot="open">公开</span>
					<span slot="close">隐藏</span>
				</i-switch>
			</div>

			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right" class="span-width">详细内容</span>
				<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left">
 					<Input v-model="c.detail" type="textarea" :rows="4" placeholder="请输入..." v-on:input="change(index)"></Input>
				</span>
				<i-switch style="margin-left: 30px" v-model="c.switch4" @on-change="change1(index)">
					<span slot="open">公开</span>
					<span slot="close">隐藏</span>
				</i-switch>
			</div>
			</div>
	</div>
			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right; margin-left: -316px;color: #4fac77" class="span-width" @click="add">新增工作经历</span>

			</div>

		</div>
		<div v-for="(c,index) in con" v-show="c.sch1">
			<h2 style="text-align: center;padding:0 0 20px 0">实时预览</h2>
			<Input v-model="c.content" type="textarea" :rows="7" placeholder="请输入..." v-on:input="saveBasic"></Input>
		</div>
	</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				con:[{
					content: ''	,
					content1: '',
					work: '',
					job: '',
					start: '',
					time:[],
					detail: '',
					sch0:false,
					sch1:true,
					switch1:true,
					switch2:true,
					switch3:true,
					switch4:true
				}],
				result:[
				{
					contents:{
						work: '',
						job: '',
						start: '',
						time:[],
						detail: ''
					},
					contents1:{
						work: '',
						job: '',
						start: '',
						time:[],
						detail: ''
					}
				}]


			}
		},
		methods: {
			add(){
				var len=this.con.length
				this.con[len-1].sch0=true
				this.con[len-1].sch1=false
				var newcon={
					content: ''	,
					content1: '',
					work: '',
					job: '',
					start: '',
					time:[],
					detail: '',
					sch0:false,
					sch1:true,
					switch1:true,
					switch2:true,
					switch3:true,
					switch4:true
				};
				this.con.push(newcon);
				var newresult={
					contents:{
						work: '',
						job: '',
						start: '',
						time:[],
						detail: ''
					},
					contents1:{
						work: '',
						job: '',
						start: '',
						time:[],
						detail: ''
					}
				}
				this.result.push(newresult)

			},
			saveBasic() {
				this.$store.commit('saveWork', this.con)
			},
			change(e) {
				if(this.con[e].work != '') {
					this.result[e].contents.work= '在' + this.con[e].work+',';
					if(this.con[e].switch1==true){
						this.result[e].contents1.work= '在' + this.con[e].work+',';
					}
				}
				if(this.con[e].time.length!=0){
					this.result[e].contents.time=this.con[e].time;
					if(this.con[e].switch3==true){
						this.result[e].contents1.time=this.con[e].time;
					}
				}

				if(this.con[e].detail != '') {
					this.result[e].contents.detail=this.con[e].detail+',';
					if(this.con[e].switch4==true){
						this.result[e].contents1.detail=this.con[e].detail+',';
					}
				}
				if(this.con[e].job != '') {
					this.result[e].contents.job= this.con[e].job+',';
					if(this.con[e].switch2==true){
						this.result[e].contents1.job=this.con[e].job+',';
					}
				}
				this.con[e].content=this.result[e].contents.work+this.result[e].contents.detail+this.result[e].contents.job;
				if(this.result[e].contents.time.length != 0) {
					this.con[e].content=this.result[e].contents.time[0]+"-"+this.result[e].contents.time[1]+this.con[e].content
				}

				this.con[e].content1=this.result[e].contents1.work+this.result[e].contents1.detail+this.result[e].contents1.job;

				if(this.result[e].contents1.time.length != 0) {
					this.con[e].content1=this.result[e].contents1.time[0]+"-"+this.result[e].contents1.time[1]+this.con[e].content1
				}
				this.saveBasic()
			},
			change1(e) {
					if(this.con[e].work != ''&this.con[e].switch1==true){
						this.result[e].contents1.work= '在' + this.con[e].work+',';
					}else{
						this.result[e].contents1.work= ''
					}

					if(this.con[e].time.length!=0&this.con[e].switch3==true){
						this.result[e].contents1.time=this.con[e].time;
					}else{
						this.result[e].contents1.time=[]
					}
					if(this.con[e].detail != ''&this.con[e].switch4==true){
						this.result[e].contents1.detail= this.con[e].detail+',';
					}else{
						this.result[e].contents1.detail=''
					}
					if(this.con[e].job != ''&this.con[e].switch2==true){
						this.result[e].contents1.job=this.con[e].job+',';
					}else{
						this.result[e].contents1.job= ''
				}

				this.con[e].content1=this.result[e].contents1.work+this.result[e].contents1.detail+this.result[e].contents1.job;

				if(this.result[e].contents1.time.length != 0) {
					this.con[e].content1=this.result[e].contents1.time[0]+"-"+this.result[e].contents1.time[1]+this.con[e].content1
				}
				this.saveBasic()
			},
			show(e){
					var obj = event.target;
					var this_=$(obj).parent().next();
					$(this_).toggle("slow","linear",function(){
						$(this_).addClass("intro1")
					})




			}

		}
	}
</script>

<style>

</style>