<style scoped>
	.ivu-steps .ivu-steps-tail {
		width: 100%;
		padding: 0 10px;
		position: absolute;
		left: 0;
		top: 13px;
		margin-left: 100px;
	}

	.zhuce-btn1 {
		width: 200px;
		height: 50px;
		font-size: 16px;
	}

	.footer-btn {
		text-align: center;
		padding: 10px;
	}

	.zhushi {
		position: absolute;
		margin-left: 9px;
		margin-top: 12px;
		font-size: 20px;
		color: red;
	}

	.tiaoguo {
		position: absolute;
		margin: 12px;
		margin-left: 20px;
		font-size: 16px;
		color: #999999;
	}

	.tiaoguo:hover {
		color: #51ad79;
		cursor: pointer;
	}

	.ivu-table-wrapper {
		position: relative;
		/* border: 1px solid #dddee1; */
		border-bottom: 0;
		border-right: 0;
	}

	.jingtu-top ul li {
		float: left;
		margin-right: 150px;
		font-size: 18px;
		color: #999999;
	}

	.jingtu-down ul li {
		float: left;
		margin-right: 82px;
		font-size: 14px;
	}

	.jingtu-top .jd-r {
		float: right;
		margin-right: 0px;
	}

	.jingtu-down .jd-r {
		float: right;
		margin-right: 0px;
	}

	.zhuce-list {
		height: 160px;
		overflow-y: auto;
	}

	.zhuce-list2 {
		height: 160px;
		overflow-y: auto;
	}

	.zhuce-list2 ul li {
		margin-left: 20px;
		float: left;
		font-size: 14px;
		cursor: pointer;
		padding: 4px 12px;
		border: 1px solid #cccccc;
		margin-bottom: 10px;
		border-radius: 18px;
		text-align: center;
	}

	.zhuce-list2 ul li:hover {
		border: 1px solid #51ad79;
		background: #51ad79;
		color: #fff;
	}

	.zhuce-list2 ul li:active {
		border: 1px solid #51ad79;
		background: #51ad79;
		color: #fff;
	}
</style>
<template>
	<div class="layout">

		<Modal v-model="modal2" width="850" :closable="false" :scrollable="true" style=" height: 530px;" :mask-closable="false">
			<div>
				<Steps :current="current" style="margin-top: 20px;width: 860px;padding: 0 20px">
					<Step title="实名认证"></Step>
					<Step title="设置栏目"></Step>
					<Step title="个性化"></Step>
					<Step title="应用设置"></Step>
					<Step title="完善信息"></Step>
					<Step title="网站设置"></Step>
				</Steps>
			</div>



			<transition>
				<router-view ></router-view>
			</transition>
			<div slot="footer" class="footer-btn" v-if="this.$route.path=='/pro/member/step1'
														||this.$route.path=='/pro/member/step3'
														||this.$route.path=='/pro/member/step5'
														||this.$route.path=='/pro/member/step17'
														||this.$route.path=='/pro/member/step26'
														||this.$route.path=='/pro/member/step20'
														||this.$route.path=='/pro/member/step21'
														||this.$route.path=='/pro/member/step30'">
				<i-button type="primary" shape="circle" @click="next" class="zhuce-btn1">继续</i-button>
			</div>

			<div slot="footer" class="footer-btn" v-else-if="this.$route.path=='/pro/member/step31'
														||this.$route.path=='/pro/member/step32'
														||this.$route.path=='/pro/member/step33'
														||this.$route.path=='/pro/member/step34'
														||this.$route.path=='/pro/member/step35'">

			</div>

			<div slot="footer" class="footer-btn" v-else-if="this.$route.path=='/pro/member/step2'">
				<i-button type="primary" shape="circle" @click="next" class="zhuce-btn1">提交</i-button>
			</div>
			<div slot="footer" class="footer-btn" v-else-if="this.$route.path=='/pro/member/step4'">

				<i-button type="primary" shape="circle" @click="next" class="zhuce-btn1">继续</i-button>
				<span class="tiaoguo" @click="next">跳过</span>
			</div>
			<div slot="footer" class="footer-btn" v-else>
				<i-button type="primary" shape="circle" @click="preStep"  size="large">上一步</i-button>
				<i-button type="primary" shape="circle" @click="next()"  size="large">下一步</i-button>
				<span class="tiaoguo" @click="next">跳过</span>
			</div>

		</Modal>

	</div>

</template>

<script>
	import axios from 'axios'
	export default {
		name: 'app',
		computed: {
			getCertification() {
				return this.$store.getters.getCertification
			},
			getContent(){
				return this.$store.getters.getContent
			},
			getPhone(){
				return this.$store.getters.getPhone
			},
			getEducation(){
				return this.$store.getters.getEducation
			},
			getWork(){
				return this.$store.getters.getWork
			}
		},
		data() {
			return {
				modal2: true,
				current: 0,
				count: 1
			}
		},
		methods: {
			next() {
				this.count += 1;
				console.log("count="+this.count)
				if(this.count == 32) {
					this.count = 1;
				}
				this.getCurrent(this.count);

				/*const paths=this.$route.path.substring(16);

				if("step22"==paths&this.getContent!=''){
					this.$store.commit('savePhone',null)
					this.$store.commit('saveEducation',null)
					this.$store.commit('saveWork',null)
						this.saveBasic();
				}
				if("step23"==paths&this.getPhone!=null){
					this.$store.commit('saveContent',null)
					this.$store.commit('saveEducation',null)
					this.$store.commit('saveWork',null)
					this.saveBasic();
				}
				if("step24"==paths&this.getEducation!=null){
					this.$store.commit('savePhone',null)
					this.$store.commit('saveContent',null)
					this.$store.commit('saveWork',null)
					this.saveBasic();
				}
				if("step25"==paths&this.getWork!=null){
					this.$store.commit('savePhone',null)
					this.$store.commit('saveContent',null)
					this.$store.commit('saveEducation',null)
					this.saveBasic();
				}*/
				this.$router.push('/identification/step' + this.count)
			},

			saveBasic(){
				 axios({
                    method: 'post',
                    url: 'http://192.168.13.28:1111/userFullInfo/insert',
                    data: {
                        content:this.getContent,
                        contract:this.getPhone,
                        education:this.getEducation,
                        work:this.getWork
                    }
                }).then(response => {
                    const flag = response.data
                    if(flag==1){
                        this.$Message.success('提交成功！');
                    }

                }).catch(function(error) {
                    this.$Message.success('提交失败!');
                    console.log(error)
                })
			},
			getCurrent(n) {
				switch(n) {
					case 1:
					case 2:
						this.current = 0;
						break;
					case 3:
					case 4:
						this.current = 1;
						break;
					case 7:
					case 8:
					case 5:
					case 6:
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
						this.current = 2;
						break;
					case 17:
					case 18:
					case 19:
						this.current = 3;
						break;
					case 20:
					case 21:
					case 22:
					case 23:
					case 24:
					case 25:
					case 26:
					case 27:
					case 28:
					case 29:
						this.current = 4;
						break;
					case 30:
					this.current=5;
					break;
				}
			},
			preStep() {
				this.$router.go(-1);
				this.count--;
				this.getCurrent(this.count);
			},
			regest() {
				axios({
					method: 'post',
					url: 'http://192.168.13.28:1111/Certification/insert',
					data: {
						name: this.getCertification.name,
						idcard: this.getCertification.idcard,
						code: this.getCertification.code,
						phone: this.getCertification.phone,
						city: this.getCertification.city

					}
				}).then(response => {
					console.log(response.data);
					if(1 != response.data) {
						this.$Message.error('提交失败');
					} else {
						this.$Message.success('提交成功!');
						this.next();

					}
				}).catch(function(error) {
					console.log(error)
				})
			},
			columnSet(){
				axios({
					method: 'post',
					url: 'http://192.168.13.28:1111/columnSettings/insert',
					data: {
						base:this.base

					}
				})
			}

		},


		created:function(){
			this.$router.push("/identification/step1");
		}

	}
</script>