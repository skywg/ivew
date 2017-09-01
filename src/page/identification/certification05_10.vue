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
			<div style="margin-bottom: 16px" v-for="(c,index) in con">
				<div style="margin-bottom: 16px" v-show="c.sch0" >
					<input v-model="c.honor" class="dropbtn"/>
					<img src="../../../src/img/ns-head-jtx.png" @click="show(index)" />
				</div>
				<div v-show="c.sch1" >
				<span style="font-size: 14px;padding-right: 6px;text-align: right">曾获荣誉</span>
				<span style="font-size: 14px;width: 56px;display: inline-block;text-align: left">
					<Input v-model="c.honor" placeholder="请输入..." style="width: 110px" @on-change="change(index)"></Input></span>

				<span style="font-size: 14px;padding-right: 6px;text-align: right;margin-left: 80px">获奖时间</span>
				<span style="font-size: 14px;width: 56px;display: inline-block;text-align: left;margin-right: 50px">
 					<Date-picker v-model="c.time" type="datetime" @on-change="time=$event" @on-ok="change(index)" placement="bottom-end" placeholder="选择日期" style="width: 120px"></Date-picker>

								</span>
				<i-switch style="margin-left: 30px" v-model="c.switch1" @on-ok="change1(index)">
					<span slot="open">公开</span>
					<span slot="close">隐藏</span>
				</i-switch>
				</div>
			</div>
			<div style="margin-bottom: 16px">
				<span style="font-size: 14px;padding-right: 30px;text-align: right; margin-left: -462px;color: #4fac77" @click="add">新增荣誉</span>
			</div>

		</div>
		<div v-for="c in con" v-show="c.sch1">
			<h2 style="text-align: center;padding:0 0 20px 0">实时预览</h2>

			<Input v-model="c.content" type="textarea" :rows="7" placeholder="请输入..."></Input>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	var works = '';
	export default {
		data() {
			return {

				con:[{
					honor:'',
					time: '',
					content: '',
					content1:'',
					sch0:false,
					sch1:true,
					switch1:true,
				}],
				result:[{
					contents:{
						honor:'',
						time: ''
					},
					contents1:{
						honor:'',
						time: ''
					}
				}]


			}
		},
		created: function() {
		},
		methods: {
			saveBasic() {
				this.$store.commit('saveHonor', this.con)
			},
			change(e) {
				if(this.con[e].honor != '') {
					this.result[e].contents.honor = this.con[e].honor;
					if(this.con[e].switch1==true){
						this.result[e].contents1.honor= this.con[e].honor;
					}
				}
				if(this.con[e].time!=''){
					this.result[e].contents.time=this.con[e].time;
					if(this.con[e].switch1==true){
						this.result[e].contents1.time=this.con[e].time;
					}
				}
				this.con[e].content=this.result[e].contents.time+this.result[e].contents.honor;

				this.con[e].content1=this.result[e].contents1.time+this.result[e].contents1.honor;
				this.saveBasic()
			},
			change1(e) {
				if(this.con[e].honor != ''&this.con[e].switch1==true) {
						this.result[e].contents1.honor= this.con[e].honor;
				}else{
					this.result[e].contents1.honor=''
				}
				if(this.con[e].time!=''&this.con[e].switch1==true){
						this.result[e].contents1.time=this.con[e].time;
					}else{
						this.result[e].contents1.time=''
					}

				this.con[e].content1=this.result[e].contents1.time+this.result[e].contents1.honor;
				this.saveBasic()
			},
			add(){
				var len=this.con.length
				this.con[len-1].sch0=true
				this.con[len-1].sch1=false
				var newcon={
					honor:'',
					time: '',
					content: '',
					content1:'',
					sch0:false,
					sch1:true,
					switch1:true,
					switch2:true,
				};
				this.con.push(newcon);
				var result={
					contents:{
						honor:'',
						time: ''
					},
					contents1:{
						honor:'',
						time: ''
					}
				};
				this.result.push(result)
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