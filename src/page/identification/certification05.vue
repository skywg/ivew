<style scoped>
	.biaoqian{
		color: #4fac77;
	}
</style>
<template>
	<div>
	<Row class="tab-zhuce2">
			<Col span="1"  :class="[this.$route.path=='/pro/member/step23/step24' ? biaoqian:'',tabzhuce,tabzhucetou]" >
				全部
			</Col>
			<Col span="2" :class="[this.$route.path=='/pro/member/step23/step25' ? biaoqian:'',tab-zhuce]" >注册信息</Col>
			<Col span="2" :class="[this.$route.path=='/pro/member/step23/step26' ? biaoqian:'',tab-zhuce]" >联系方式</Col>
			<Col span="2" :class="[this.$route.path=='/pro/member/step23/step27' ? biaoqian:'',tab-zhuce]" >教育经历</Col>
			<Col span="2" :class="[this.$route.path=='/pro/member/step23/step28' ? biaoqian:'',tab-zhuce]" >工作经历</Col>
			<Col span="2" :class="[this.$route.path=='/pro/member/step23/step29' ? biaoqian:'',tab-zhuce]" >种养信息</Col>
			<Col span="2" :class="[this.$route.path=='/pro/member/step23/step30' ? biaoqian:'',tab-zhuce]" >政治面貌</Col>
			<Col span="2" :class="[this.$route.path=='/pro/member/step23/step31' ? biaoqian:'',tab-zhuce]" >宗教信仰</Col>
			<Col span="2" :class="[this.$route.path=='/pro/member/step23/step32' ? biaoqian:'',tab-zhuce]" >获得荣誉</Col>
		</Row>
		<transition>
				<router-view ></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabzhuce:'tab-zhuce',
				tabzhucetou:'tab-zhuce-tou',
				biaoqian:'biaoqian'

			}
		},
		created:function(){
			this.$parent.$router.push('/pro/member/step23/step24')
			this.$parent.$parent.count1=24

		},
		methods:{


		}

	}
</script>

