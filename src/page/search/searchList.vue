<style scoped>
	@import '../../css/search.css';
</style>
<template>
	<div class="searchModal">
		<header  style="padding:0 30px">
			<Row>
					<Col span="3" class="region ">
					<img src="../../img/huiyuan-logo.png" alt="">
					</Col>
					<Col span="14" class="nav-center">
						<ul class="ns-nav">
                            <li>
                                <a href="/" class="ns-active">
                                    <!-- <img src="../src/img/head-icon1-lv.png" alt="">  -->
                                    <Icon type="monitor"></Icon> 无忧导航
                                </a>
                            </li>
                            <li>
                                <a href="/mall/index">
                                    <!-- <img src="../src/img/head-icon2.png" alt="">  -->
                                    <Icon type="ios-home"></Icon> 无忧首页
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <!-- <img src="../src/img/head-icon3.png" alt="">  -->
                                    <Icon type="ipad"></Icon> 掌上无忧
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <!-- <img src="../src/img/head-icon4.png" alt="">  -->
                                    <Icon type="map"></Icon> 地图导航
                                </a>
                            </li>
                        </ul>
                        <ul class="ns-nav2">
                            <li>
                                <div class="dropdown-1">
                                    <button class="dropbtn ns-hover" @click="goto('/pro/member')">会员中心</button>
                                    <div class="dropdown-1-content">
                                        <a @click="routeTo('/myWorries')">我的资料</a>
                                        <a @click="routeTo('/portal')">我的门户</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="/center" class="ns-hover">应用中心</a>
                            </li>
                        </ul>
					</Col>
					<Col span="7">
						<div class="header-serch fl">
							<Input v-model="search" style="margin-top: 19px;width: 108px;">
							<Button slot="append" icon="ios-search"  @click="find"></Button>
							</Input>
						</div>
						<div  v-if="loginuserinfo != null">
							<p href="#" style=";float: right;line-height: 81px;font-size: 14px;">
								<Dropdown>
		                            <a href="javascript:void(0)" style="color: #51ad79">
		                                {{loginuserinfo.displayName}}
		                                <Icon type="arrow-down-b"></Icon>
		                            </a>
		                            <Dropdown-menu slot="list" trigger="click">
		                                <Dropdown-item>账户安全</Dropdown-item>
										<Dropdown-item><a :href="['http://192.168.7.61:8080/ovit/center/address.htm?uid='+loginuserinfo.uniqueId]" target="_blank">收货地址</a></Dropdown-item>
										<Dropdown-item><a :href="['http://192.168.7.61:8080/ovit/center/order/list.htm?uid='+loginuserinfo.uniqueId]" target="_blank">消费记录</a></Dropdown-item>
		                                <Dropdown-item><a href="javascript:void0" @click="logout">退出</a></Dropdown-item>
		                            </Dropdown-menu>
		                        </Dropdown>
							</p>
							<Badge count="3" style="margin-top: 30px;float: right;margin-right: 20px">
								<a href="#" class="demo-badge">
									<Icon type="ios-bell" size="22" style="color: #51ad79"></Icon>
								</a>
							</Badge>
						</div>
					</Col>
				</Row>
		</header>
		<div class="container">
			<div class="main-nav" >
				<router-view :data='list' ></router-view>
			</div>
		</div>
		<!--举报的弹框-->
		<Modal v-model="modal1">
			<p slot="header" style="text-align:center;">举报</p>
			<div>
				<Row class="jubao-list">
					<i-col span="8" v-for="btn in btnlist">
						<Button :class="{activeEle:active}" @click="addActive($event)">{{btn.text}}</Button>
					</i-col>
				</Row>
				<div>
					<h3>截图证明</h3>
					<div class="jietu">
						<img src="../../img/jietu-icon.png" />
						<img src="../../img/jietu-add.png" />
					</div>
				</div>
				<div>
					<h3>举报详情</h3>
					<textarea rows="5" style="width:100%;border-radius:5px;margin-top:15px;"></textarea>
				</div>
			</div>
			<div slot="footer" style="text-align:center;">
				<Button type="primary" shape="circle" class="btnReset" style="width:200px;height:50px;">举报</Button>
				<span>取消</span>
			</div>
		</Modal>
	</div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
export default {
	name: 'searchModal',
	data() {
		return {
			loginuserinfo: JSON.parse(sessionStorage.getItem("user")),
			portal: '',
			theme1: 'light',
			replyContent: false,
			modal1: false,
			active: false,
			currentPage: 1,
			pageSize: 10,
			total: 0,
			type: '',
			link: '',
			list: [],
			btnlist: [{
				text: '垃圾广告'
			},
			{
				text: '色情淫秽'
			},
			{
				text: '政治反动'
			},
			{
				text: '钓鱼诈骗'
			},
			{
				text: '网络敲诈'
			}
			]
		}
	},
	created() {
		this.fetchData()
		this.search = this.$route.query.title
	},
	mounted: function () {
		var oBox = $('#demo')
		var demoHtml = $(demo).html().slice(0, 198) + '...'
		$(demo).html(demoHtml)
	},
	methods: {
		fetchData: function () {
			this.list = []
			var path = this.$route.path
			this.url = ''
			if (path == '/search/InforMation') {
				this.url = 'http://localhost:1111/inforMation/findInforMationTitle/' + this.currentPage + "?title=" + this.$route.query.title + "&pageSize=" + this.pageSize
			} else if (path == '/search/policy') {
				this.url = 'http://localhost:1111/policy/findPolicyTitle/' + this.currentPage + "?title=" + this.$route.query.title + "&pageSize=" + this.pageSize
			} else if (path == '/search/knowledge') {
				this.url = 'http://localhost:1111/knowLege/findKnowLedgeTitle/' + this.currentPage + "?title=" + this.$route.query.title + "&pageSize=" + this.pageSize
			} else if (path == '/search/expert') {
				this.url = 'http://localhost:1111/expert/findExpertTitle/' + this.currentPage + "?title=" + this.$route.query.title + "&pageSize=" + this.pageSize
			}else if(path == '/search/memberSearch'){
                this.url = 'http://localhost:1111/inforMation/findInforMationTitle/' + this.currentPage + "?title=" + this.$route.query.title + "&pageSize=" + this.pageSize
			}
			axios.get(this.url)
				.then(response => {
					this.list = response.data

				}).catch(function (error) {
					console.log(error)
				})
		},
		addActive: function (event) {
			var btnDom = event.currentTarget
			btnDom.active = !btnDom.active
		},
		find() {
			debugger
			this.list = []
			var path = this.$route.path
			this.url = ''
			if (path == '/search/InforMation') {
				if (this.search == '') {
                    /*    this.search=null
                        this.$router.push({path: '/search/InforMation', query: {title: this.search}})*/
					this.url = 'http://localhost:1111/inforMation/findInforMation/' + this.currentPage + "?pageSize=" + this.pageSize
				} else {
					this.$router.push({ path: '/search/InforMation', query: { title: this.search } })
					this.url = 'http://localhost:1111/inforMation/findInforMationTitle/' + this.currentPage + "?title=" + this.search + "&pageSize=" + this.pageSize
				}
			} else if (path == '/search/policy') {
				if (this.search == '') {
					this.url = 'http://localhost:1111/policy/findPolicy/' + this.currentPage + "?pageSize=" + this.pageSize
				} else {
					this.$router.push({ path: '/search/policy', query: { title: this.search } })
					this.url = 'http://localhost:1111/policy/findPolicyTitle/' + this.currentPage + "?title=" + this.search + "&pageSize=" + this.pageSize
				}
			} else if (path == '/search/knowledge') {
				if (this.search == '') {
					this.url = 'http://localhost:1111/knowLege/findKnowLedge/' + this.currentPage + "?pageSize=" + this.pageSize
				} else {
					this.$router.push({ path: '/search/knowledge', query: { title: this.search } })
					this.url = 'http://localhost:1111/knowLege/findKnowLedgeTitle/' + this.currentPage + "?title=" + this.search + "&pageSize=" + this.pageSize
				}
			} else if (path == '/search/expert') {
				if (this.search == '') {
					this.url = 'http://localhost:1111/expert/find/' + this.currentPage + "?pageSize=" + this.pageSize
				} else {
					this.$router.push({ path: '/search/expert', query: { title: this.search } })
					this.url = 'http://localhost:1111/expert/findExpertTitle/' + this.currentPage + "?title=" + this.search + "&pageSize=" + this.pageSize
				}
			}else if(path == '/search/memberSearch'){
                if (this.search == '') {
					/*    this.search=null
					 this.$router.push({path: '/search/InforMation', query: {title: this.search}})*/
                    this.url = 'http://localhost:1111/inforMation/findInforMation/' + this.currentPage + "?pageSize=" + this.pageSize
                } else {
                    this.$router.push({ path: '/search/memberSearch', query: { title: this.search } })
                    this.url = 'http://localhost:1111/inforMation/findInforMationTitle/' + this.currentPage + "?title=" + this.search + "&pageSize=" + this.pageSize
                }

            }

			axios.get(this.url)
				.then(response => {
					this.list = response.data
				}).catch(function (error) {
					console.log(error)
				})
		},
		routeTo(e) {
			if (e == '/portal') {
				this.portal = 'http://192.168.7.61:8080/ovit/center/gateway.htm?uid='+this.loginuserinfo.uniqueId
				window.open(this.portal)
			} else {
				this.$router.push(e)
			}
		},
		
		logout() {
			axios.get('http://localhost:1111/login/logout')
				.then(response => {
					console.log(response.data)
				})
			sessionStorage.removeItem("user")
			this.$router.push('/pro/firstPage')
		}
	}}
</script>