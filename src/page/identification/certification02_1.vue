<template>
	<div style="margin: 30px auto;">
		<div style="margin-bottom: 16px">
				<span style="padding-left: 54px;padding-top: 10px;font-size: 14px;color: #4fac77" @click="addColumn()">新增栏目</span>
			</div>
		<div style="margin: 20px auto;"  id="columndiv">
			<Row style="text-align: center;font-size: 16px;margin-bottom: 16px;font-weight: 600;background: #fafafa;padding: 10px 0">
				<Col span="5">栏目名称</Col>
				<Col span="5">栏目归属</Col>
				<Col span="5">访问权限</Col>
				<Col span="9">操作</Col>
			</Row>
			<Row style="text-align: center;font-size: 16px;margin-bottom: 16px" v-for="singlecolum in column">
				<Col span="5" class="columntext">
					<Input v-model="singlecolum.name" @on-change="change"></Input>
				</Col>
				<Col span="5">
					<Select v-model="singlecolum.owner" style="width:100px" placeholder="资讯" @on-change="change">
        				<Option v-for="item in puls" :value="item.value" >{{ item.label }}</Option>
    				</Select>

				</Col>
				<Col span="5">
					<Select v-model="singlecolum.authority" style="width:100px" placeholder="所有人可见" @on-change="change">
        				<Option v-for="item in author" :value="item.value" >{{ item.label }}</Option>
    				</Select>
				</Col>
				<Col span="9">
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
</template>
<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				column:[{name:'养鱼服务',
						owner:'咨讯',
						authority:'0',
						},
						{name:'农业',
						owner:'咨讯',
						authority:'0',
						}
					],
					puls:[{
						value:'资讯',
						label:'资讯'
					},{
						value:'政策',
						label:'政策'
					},{
						value:'知识',
						label:'知识'
					},{
						value:'产品',
						label:'产品'
					},{
						value:'服务',
						label:'服务'
					},{
						value:'专家',
						label:'专家'
					},{
						value:'企业',
						label:'企业'
					},{
						value:'机关',
						label:'机关'
					}],
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
		methods: {


			up(e) {
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
					var  newclone = {name:'农业',
							owner:'咨讯',
							authority:'0',
							}
					this.column.push(newclone)

				// TODO 需要调整出显示下拉框
			},
			remove(e){
				var index = this.column.indexOf(e);
				if(index>-1){
					this.column.splice(index,1)
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
				this.$store.commit('saveColumn',this.column)
			}


		},
		created:function(){
			this.change()
		}
	}
</script>