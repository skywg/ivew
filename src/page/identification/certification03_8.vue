<template>
	<!--3设置栏目第八步开始-->
	<div style="margin: 30px auto;padding:0 24px;">

		<div style="padding:0 24px;display: block">
				<div style="float: right;margin-top: 24px;">
				<Button type="primary" size="small">查询</Button>
					&nbsp&nbsp
				<Button type="error" size="small">重置</Button>
			</div>
				<div style="padding-top: 46px">
				<span>名称：</span>
				<Input v-model="value" placeholder="请输入…" style="width: 108px"></Input>
				&nbsp&nbsp&nbsp&nbsp&nbsp
				<span>备注信息：</span>
				<Input v-model="value" placeholder="请输入…" style="width: 108px"></Input>
				</div>
				<p style="padding-top: 20px;padding-bottom: 10px;font-size: 14px;color: #4fac77" @click="addNode">新增栏目</p>
		<div id="content">
				<Row style="text-align: left;font-size: 16px;margin-bottom: 16px;font-weight: 600;background: #fafafa;padding: 10px 8px">
					<Col span="6">分组名称</Col>
					<Col span="4" offset="2" style="text-align: center">备注名称</Col>
					<Col span="8" offset="4" style="text-align: center">操作</Col>
				</Row>
				<Row style="text-align: left;font-size: 16px;margin-bottom: 16px" >

				 <vue-tree-list  :model="data" default-tree-node-name="new node" default-leaf-node-name="new leaf"></vue-tree-list>

				</Row>
				<Button  @click="save">保存</Button>
			</div>
			</div>




	</div>
	<!--3设置栏目第八步结束-->
</template>
<script>
import $ from 'jquery'
import { VueTreeList, Tree, TreeNode } from '~components/VueTreeList/index'
export default {
	components: {
      VueTreeList
    },
	data() {
		return {
       		 data: new Tree([
          {
            name: '我喜欢的',
            id: 1,
            pid: 0,
            reamrk:'demo 1',
            children: [
              {
                name: '我的最爱',
                id: 2,
                isLeaf: false,
                pid: 1,
                reamrk:'demo1-1'
              }
            ]
          }

        ])


		}
	},
	watch:{
        data:{
            handler(curVal,oldVal){
            	console.log("curValdeep====")
                console.log(curVal)
                this.$store.commit('saveTree',curVal)

            },
            deep:true
        }

    },
	methods: {

		save(){
				console.log(this.data)
		},
		addNode: function () {
        var node = new TreeNode('new node', false,'书签')
        if (!this.data.children) this.data.children = []
        this.data.addChildren(node)
      },

      getNewTree: function () {
        const vm = this
        function _dfs (oldNode) {
          let newNode = {}

          newNode.name = oldNode.name
          newNode.pid = oldNode.pid
          newNode.isLeaf = oldNode.isLeaf
          newNode.id = oldNode.id

          if (oldNode.children && oldNode.children.length > 0) {
            newNode.children = []
            for (let i = 0, len = oldNode.children.length; i < len; i++) {
              newNode.children.push(_dfs(oldNode.children[i]))
            }
          }
          return newNode
        }

        vm.newTree = _dfs(vm.data)
      }
	},
	created:function(){
		this.$parent.baifen=50
	}
}
</script>