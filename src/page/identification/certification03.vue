<style scoped>
	@import '../../css/identification.css';
	.jing{
		color: #4fac77;
	}
</style>
<template>
	<!--3设置栏目第二步开始-->
	<div>
		<div style="margin: 26px 0 20px 0;padding: 0 20px">
			<div class="jingtu-top" style="padding: 0 10px;">
				<ul>
					<li>设置关注</li>
					<li>设置收藏</li>
					<li>好友分组</li>
					<li class="jd-r">设置账户</li>
				</ul>
			</div>
			<Progress :percent="baifen" status="active" hide-info :stroke-width="5"></Progress>


		</div>
		<transition>
				<router-view ></router-view>
			</transition>
	</div>
	<!--3设置栏目第二步结束-->
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				baifen:25
			}
		},
		methods:{



		},
		created:function(){
			this.$parent.$router.push('/pro/member/step6/step7')
			this.$parent.$parent.count1=7


		}

	}
</script>

<style>

</style>