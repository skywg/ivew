<template>
	<div>
		<div style="text-align: center;margin: 20px 0 40px 0">
			<Checkbox-group v-model="religion" @on-change="change">
				<div style="margin-bottom: 16px">

					<Checkbox label="佛教" style="    margin-left: 86px;">
						<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									佛教
									</span></Checkbox>
					<i-switch style="margin-left: 30px" v-model="switch1" @on-change="change1">
						<span slot="open">公开</span>
						<span slot="close">隐藏</span>
					</i-switch>
				</div>
				<div style="margin-bottom: 16px">
					<Checkbox label="道教">
						<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									道教
									</span></Checkbox>
				</div>
				<div style="margin-bottom: 16px">
					<Checkbox label="基督教">
						<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									基督教
									</span></Checkbox>
				</div>
				<div style="margin-bottom: 16px">
					<Checkbox label="犹太教">
						<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									犹太教
									</span></Checkbox>
				</div>
				<div style="margin-bottom: 16px">
					<Checkbox label="伊斯兰教">
						<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									伊斯兰教
									</span></Checkbox>
				</div>
				<div style="margin-bottom: 16px">
					<Checkbox label="印度教">
						<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									印度教
									</span></Checkbox>
				</div>
				<div style="margin-bottom: 16px">
					<Checkbox label="神道教">
						<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									神道教
									</span></Checkbox>
				</div>
				<div style="margin-bottom: 16px">
					<Checkbox label="儒教">
						<span style="font-size: 14px;width: 230px;display: inline-block;text-align: left;padding-left: 40px;">
									儒教
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
	var works = '';
	export default {
		data() {
			return {
				religion: [],
				switch1: true,
				con: {
					content: '',
					content1: ''
				}

			}
		},
		created: function() {
			this.change()
		},
		methods: {
			saveBasic() {
				this.$store.commit('saveReligion', this.con)
			},
			change() {
				if(this.religion.length != 0) {
					this.con.content = this.religion[0]
					if(this.switch1 == true) {
						this.con.content1 = this.religion[0]
					}
				}
				this.saveBasic()
			},
			change1() {
				if(this.religion.length != 0 & this.switch1 == true) {
					this.con.content1 = this.religion[0]
				}
				this.saveBasic()
			}

		}
	}
</script>

<style>

</style>