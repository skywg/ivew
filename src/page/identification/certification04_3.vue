<style scoped>
	label.check_box2 {
    margin: 10px 27px;
    font-size: 14px;
    width: 138px;

}
.ivu-checkbox-checked .ivu-checkbox-inner {
    border-color: #51ad79 ! important;
    background-color: #51ad79! important;
}

</style>
<template>
	<!--4应用设置第三步开始-->
	<div>
		<p style="font-size: 22px ;text-align: center;line-height: 80px;padding-top: 20px">高级应用</p>

		<Row :gutter="16" style="font-size: 14px;padding: 0 26px;height: 200px;overflow-y: auto">
			<Checkbox-group v-model="app.agent" @on-change="save">
				<Checkbox label="物种百科1" class="check_box2">
					<img src="../../img/gjyx-icon.png" alt="" style="vertical-align: middle;margin-left: 6px">
					<div style="float: right;    margin-top: -5px;margin-left: 8px;">
						<P style="font-size: 16px ;line-height: 44px;">物种百科</P>
					</div>
				</Checkbox>
				<Checkbox label="物种百科2" class="check_box2">
					<img src="../../img/gjyx-icon.png" alt="" style="vertical-align: middle;margin-left: 6px">
					<div style="float: right;    margin-top: -5px;margin-left: 8px;">
						<P style="font-size: 16px ;line-height: 44px;">物种百科</P>
					</div>
				</Checkbox>
				<Checkbox label="物种百科3" class="check_box2">
					<img src="../../img/gjyx-icon.png" alt="" style="vertical-align: middle;margin-left: 6px">
					<div style="float: right;    margin-top: -5px;margin-left: 8px;">
						<P style="font-size: 16px ;line-height: 44px;">物种百科</P>
					</div>
				</Checkbox>
				<Checkbox label="物种百科4" class="check_box2">
					<img src="../../img/gjyx-icon.png" alt="" style="vertical-align: middle;margin-left: 6px">
					<div style="float: right;    margin-top: -5px;margin-left: 8px;">
						<P style="font-size: 16px ;line-height: 44px;">物种百科</P>
					</div>
				</Checkbox>
			</Checkbox-group>

		</Row>
	</div>
	<!--4应用设置第三步结束-->
</template>

<script>
	export default {
		data() {
			return {
				app:{
					agent: ['物种百科1', '物种百科2', '物种百科3', '物种百科4'],
					level:1
				}

			}
		},
		methods:{
			save(){
				this.$store.commit('saveApp',this.app)
			}
		},
		created:function(){
			this.save()
		}
	}
</script>

<style>

</style>