<template>
	<!--3设置栏目第八步开始-->
	<div >

			<p style="padding-left: 54px;font-size: 14px;color: #4fac77;padding-top: 45px;" @click="addColumn()">添加新分组</p>
			<div style="margin: 20px auto;display: block" id="columndiv">
				<Row style="text-align: center;font-size: 16px;margin-bottom: 16px;font-weight: 600;background: #fafafa;padding: 10px 0">
					<Col span="5">分组名称</Col>
					<Col span="5" offset="2">权限</Col>
					<Col span="9" offset="2">操作</Col>
				</Row>
				<Row style="text-align: center;font-size: 16px;margin-bottom: 16px" v-for="singlecolum in friends">
				<Col span="5" class="columntext">
					<Input v-model="singlecolum.name"  @on-change="change"></Input>
				</Col>
				<Col span="5" offset="2">
					<Select v-model="singlecolum.authority" style="width:100px" placeholder="所有人可见" @on-change="change">
        				<Option v-for="item in author" :value="item.value" >{{ item.label }}</Option>
    				</Select>
				</Col>
				<Col span="9" offset="2">
				<Button-group>
					<Button @click="up()">向上</Button>
					<Button @click="down()">向下</Button>
					<Button @click="rename()">重命名</Button>
					<Button @click="remove(singlecolum)">删除</Button>
				</Button-group>
				</Col>
			</Row>
			</div>

	</div>
	<!--3设置栏目第八步结束-->
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				friends:[
					{name:'我的好友',authority:'0'}
					],
				author:[
					{
						value:'0',
						label:'所有人可见'
					},{
						value:'2',
						label:'仅自己可见'
					},{
						value:'1',
						label:'仅好友可见'
					}
					]
			}
		},
		created:function(){
		this.$parent.baifen=75;
		this.change()
	},
	methods:{
		up() {
				var obj = event.target
				if($(obj).html().indexOf("span") == -1) {
					obj = $(obj).parent()
				}
				var row = $(obj).parent().parent().parent()
				var buttons = $("#columndiv .ivu-btn-group")
				var group = $(obj).parent()
				var index = $(buttons).index(group)
				if(index > 0) {
					$(row).prev().before($(row))
				}
			},
			down() {
				var obj = event.target
				if($(obj).html().indexOf("span") == -1) {
					obj = $(obj).parent()
				}
				var row = $(obj).parent().parent().parent()
				var buttons = $("#columndiv .ivu-btn-group")
				var group = $(obj).parent()
				var index = $(buttons).index(group)
				if(index + 1 < buttons.length) {
					$(row).next().after($(row))
				}
			},
			addColumn(){
					var  newclone = {name:'我的好友',
							authority:'0',
							}
					this.friends.push(newclone)

			},
			remove(e){
				var index = this.friends.indexOf(e);
				if(index>-1){
					this.friends.splice(index,1)
				}
			},
			rename(){
				var obj = event.target
				if($(obj).html().indexOf("span")==-1){
					obj = $(obj).parent()
				}
				var row = $(obj).parent().parent().parent()
				$(row).find("div:eq(0)").attr("contenteditable","true")
			},
			change(){
				this.$store.commit('saveFriends',this.friends)
			}
		},
		created:function(){
			this.change()
		}
	}
</script>

<style>

</style>