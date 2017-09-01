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
			<div  v-for="(c,index) in con">
				<div style="margin-bottom: 16px" v-show="c.sch0" >
					<input v-model="c.space" class="dropbtn"/>
					<img src="../../../src/img/ns-head-jtx.png" @click="show(index)" />
				</div>
				<div v-show="c.sch1" >
			<div style="margin-bottom: 16px" class="content">
				<span style="font-size: 14px;padding-right: 6px;text-align: right">耕地1面积</span>
				<span style="font-size: 14px;width: 56px;display: inline-block;text-align: left">
									<Input v-model="c.space" placeholder="请输入..." style="width: 50px" @on-change="change(index)"></Input></span>
				<span style="font-size: 14px;padding-right: 40px;text-align: right">亩</span>

				<span style="font-size: 14px;padding-right: 6px;text-align: right">种养物种</span>
				<span style="font-size: 14px;width: 56px;display: inline-block;text-align: left;margin-right: 50px">
 										 <Select v-model="c.species" style="width:80px" @on-change="change(index)">
											<Option v-for="item in wuzhong" :value="item.value"
													:key="item.value">{{ item.label }}
											</Option>
										</Select>
								</span>
				<i-switch style="margin-left: 30px" v-model="c.switch1" @on-change="change1(index)">
					<span slot="open">公开</span>
					<span slot="close">隐藏</span>
				</i-switch>
			</div>
			</div>
			</div>
			<div style="margin-bottom: 16px" id="add">
				<span style="font-size: 14px;padding-right: 30px;text-align: right; margin-left: -462px;color: #4fac77" @click="add()">新增</span>

			</div>

		</div>

		<div v-for="(c,index) in con" v-show="c.sch1">
			<h2 style="text-align: center;padding:0 0 20px 0">实时预览</h2>
			<Input v-model="c.content" type="textarea" :rows="7" placeholder="请输入..."></Input>
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
					content: '',
					content1: '',
					sch0:false,
					sch1:true,
					switch1:true,
					species: '',
					space:''
				}],
				result:[
				{
					contents:{
						species: '',
						space:''
					},
					contents1:{
						species: '',
						space:''
					}

				}],
				wuzhong:[{ value: '稻谷',
                           label: '稻谷'},
                           { value: '玉米',
                           label: '玉米'}
				]

			}
		},
		created: function() {

		},
		methods: {
			saveBasic() {
				this.$store.commit('savePlant', this.con)
			},
			change(e) {
				if(this.con[e].space != '') {
					this.result[e].contents.space = this.con[e].space+'亩,';
					if(this.con[e].switch1==true){
						this.result[e].contents1.space= this.con[e].space+'亩,';
					}
				}
				if(this.con[e].species != '') {
					this.result[e].contents.species= this.con[e].species;
					if(this.con[e].switch1==true){
						this.result[e].contents1.species= this.con[e].species;
					}
				}
				this.con[e].content=this.result[e].contents.space+this.result[e].contents.species;

				this.con[e].content1=this.result[e].contents1.space+this.result[e].contents1.species;

				this.saveBasic()
			},
			change1(e) {

				if(this.con[e].space != ''&this.con[e].switch1==true){
						this.result[e].contents1.space=this.con[e].space+'亩,';
					}else{
						this.result[e].contents1.space= ''
					}
				if(this.con[e].species != ''&this.con[e].switch1==true){
						this.result[e].contents1.species=this.con[e].species;
					}else{
						this.result[e].contents1.species= ''
					}

				this.con[e].content1=this.result[e].contents1.space+this.result[e].contents1.species;

				this.saveBasic()
			},
			add(){
				var len=this.con.length
				this.con[len-1].sch0=true
				this.con[len-1].sch1=false
				var newcon={
					content: '',
					content1: '',
					switch1:true,
					sch0:false,
					sch1:true,
					species: '',
					space:'',
				};
				this.con.push(newcon);
				var newresult={
					contents:{
						species: '',
						space:''
					},
					contents1:{
						species: '',
						space:''
					}

				};
				this.result.push(newresult)

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