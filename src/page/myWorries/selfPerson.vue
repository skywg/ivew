<style scoped>
	.layout {
		background: #fff;
	}

	header {
		height: 81px;
		background: #FFFFFF;
		border-bottom: 1px solid #e7e7e7;
	}

	/*main样式开始*/
	.main {
		margin-top: 10px;
	}

	.mian-left {
		border-right: 1px solid #fafafa;
		width: 210px;
	}

	/*main样式结束*/

	.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
		color: #51ad79;
	}

	.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
		color: #51ad79;
		border-right: 2px solid #51ad79;
		z-index: 2;
	}

	.mian-center {
		max-width: 702px;
		margin-left: 10px;
		margin-top: 60px;
		background: #fafafa;
		border: 1px solid #eeeeee;
		padding-bottom: 500px;
	}

	.main-user {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		margin-top: -46px;
	}

	.main-top-bg {
		height: 135px;
		width: 100%;
		background: url("../../img/images/mian-img.png") no-repeat center top;
		position: relative;
	}

	.main-t-r {
		width: 74%;
		margin-top: 24px;
		height: 100px;
	}

	.main-t-r ul li {
		float: right;
		margin-right: 28px;
		text-align: center;
	}

	.main-t-r span {
		font-size: 20px;
		font-weight: 500;
	}

	.main-t-r p {
		font-size: 14px;
	}

	.main-bot {
		width: 600px;
		margin: 0 auto;
		border-top: 1px solid #ededed;
		position: relative;
	}

	.main-bot-title {
		width: 120px;
		height: 35px;
		font-size: 18px;
		background: #ededed;
		text-align: center;
		line-height: 35px;
		position: absolute;
		top: -20px;
		left: 0px;
		right: 0px;
		margin: auto;
		color: #333;
		border-radius: 18px;
	}

	.mian-bot1-title {
		width: auto;
		height: 18px;
		font-size: 16px;
		margin-top: 46px;
		border-left: 4px solid #51ad79;
		padding-left: 10px;
		line-height: 16px;
	}

	.mian-bot1-title a {
		color: #333;
		font-size: 12px;
	}

	.main-bot2 img {
		margin-right: 16px;
		margin-top: 8px;
	}

	.main-bot2 p {
		font-size: 14px;
		line-height: 30px;
	}

	.main-bot2 ul {
		margin-right: 63px;
	}

	.main-bot2 ul li {
		line-height: 30px;
		font-size: 14px;
	}

	.main-bot3 li {
		line-height: 18px;
	}

	.main-bot3 ul {
		margin-left: 24px;
	}

	.check-box ul li {
		margin-bottom: 20px;
		font-size: 14px;
	}

	.ivu-switch-checked {
		border-color: #51ad79;
		background-color: #51ad79;
	}

	.ivu-btn-group-small > .ivu-btn {
		padding: 4px 12px;
		font-size: 12px;
		border-radius: 3px;
	}

	.ivu-btn-group:not(.ivu-btn-group-vertical) .ivu-btn-primary:not(:first-child):not(:last-child) {
		border: 1px solid #51ad79;
	}

	.ivu-btn:hover {
		color: #51ad79;
		background-color: #fff;
		border-color: #51ad79;
	}

	/*本页出了头和底部样式结束*/
</style>
<style>
	.ns-nav li>a {
    float: left;
    display: block;
    /*width: 116px;*/
    height: 82px;
    line-height: 78px;
    font-size: 16px;
    text-align: center;
    color: #666666 !important;
    border-top: 4px solid #fff;
    padding:0 20px;
}

.ns-nav li>a:hover {
    border-top: 4px solid #51ad79;
    color: #51ad79 !important;
}

.ns-nav li a img {
    vertical-align: middle;
    padding-right: 2px;
    margin-top: -4px;
}

.ns-active {
    color: #51ad79 !important;
}

.ns-nav2 {
    float: right;
}

.ns-nav2 li {
    float: left;
    font-size: 16px;
    color: #666 !important;
}

.ns-nav2 li>a {
    color: #666 !important;
    display: block;
    padding: 29px 18px;
    margin-left: 10px
}

.ns-header-c {
    width: 1196px;
    margin: auto;
}
</style>
<template>
	<div class="layout">
		<!--header开始-->
		<header>
			<div class="container">
				<Row>
					<Col span="4" class="region ">
					<img src="../../img/huiyuan-logo.png" alt="">
					</Col>
					<Col span="10" class="nav-center" style="width:45%;">
					<!-- <Menu mode="horizontal" :theme="theme1" active-name="/pro/myAuthentiacation" @on-select="routeTo">
						<Menu-item name="/pro/firstPage">
							<Icon type="ios-home"></Icon>
							首页
						</Menu-item>
						<Menu-item name="/pro/member">
							会员中心
						</Menu-item>
						<Menu-item name="/myWorries/myAuthentiacation">
							我的无忧
						</Menu-item>
						<Menu-item name="/portal">
							我的门户
						</Menu-item>
						<Submenu name="3">
							<template slot="title">
								机构注册
							</template>
							<Menu-item name="/corpInfo/corpRegister">企业注册</Menu-item>
							<Menu-item name="/corpInfo/govRegister">机关注册</Menu-item>
						</Submenu>
					</Menu> -->
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
					</Col>
					<Col span="7">
					<!--<Input v-model="value13" style="margin-top: 25px;margin-left: 60px;    width: 238px;">
					<Button slot="append" icon="ios-search"></Button>
					</Input>-->
					</Col>
					<Col span="3" style="float: right;height:81px;">
					<p href="#" style=";float: right;line-height: 81px;font-size: 14px;">
						<Dropdown v-if="loginuserinfo != null">
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
					</Col>
				</Row>
			</div>
		</header>
		<!--header结束-->
		<!--mian开始-->
		<div class="main">
			<div class="container">
				<Row>
					<Row>
						<!--mian左边开始-->
						<Col span="6" class="mian-left">
						<div style="height: 14px;width: auto"></div>
						<Menu width="auto" @on-select="routeTo">
							<Menu-item name="/myWorries/personalInformation">
								<img src="../../img/images/wdwy-icon1.png" alt="" style="margin-right: 26px;vertical-align:text-top;">
								<span class="layout-text">个人信息</span>
							</Menu-item>
							<Menu-item name="/myWorries/myAuthentiacation">
								<img src="../../img/images/wdwy-icon2.png" alt="" style="margin-right: 26px;vertical-align:text-top;">
								<span class="layout-text">我的认证</span>
							</Menu-item>
							<Menu-item name="/myWorries/myStyle">
								<img src="../../img/images/wdwy-icon3.png" alt="" style="margin-right: 26px;vertical-align:text-top;">
								<span class="layout-text">我的风采</span>
							</Menu-item>
							<Menu-item name="4">
								<img src="../../img/images/wdwy-icon4.png" alt="" style="margin-right: 26px;vertical-align:text-top;">
								<span class="layout-text">荣誉证书</span>
							</Menu-item>
							<Menu-item name="5">
								<img src="../../img/images/wdwy-icon5.png" alt="" style="margin-right: 26px;vertical-align:text-top;">
								<span class="layout-text">资质证书</span>
							</Menu-item>
							<Menu-item name="6">
								<img src="../../img/images/wdwy-icon6.png" alt="" style="margin-right: 26px;vertical-align:text-top;">
								<span class="layout-text">我的产品</span>
							</Menu-item>
							<Menu-item name="7">
								<img src="../../img/images/wdwy-icon7.png" alt="" style="margin-right: 14px;vertical-align:text-top;">
								<span class="layout-text" style="padding-left: 15px">我的服务</span>
							</Menu-item>
							<Menu-item name="8">
								<img src="../../img/images/wdwy-icon8.png" alt="" style="margin-right: 26px;vertical-align:text-top;">
								<span class="layout-text">我的知识</span>
							</Menu-item>
							<Menu-item name="/myWorries/customTag">
								<img src="../../img/images/wdwy-icon9.png" alt="" style="margin-right: 26px;vertical-align:text-top;">
								<span class="layout-text">自定义设置</span>
							</Menu-item>
						</Menu>
						</Col>
						<!--mian左边结束-->
						<!--mian中边开始-->
						<Col span="18" class="mian-center">
						<div style="height: 140px">
							<div class="main-user">
								<div class="main-top-bg">
									<a href=""><Icon type="gear-b" style="font-size: 20px;color: #fff;float: right;margin: 15px"></Icon></a>
								</div>
								<i-circle class="main-user"
										  :size="86"
										  :trail-width="0"
										  :stroke-width="4"
										  :percent="80"
										  stroke-linecap="square"
										  stroke-color="#7bcc46">
									<div class="demo-i-circle-custom">
										<img src="../../img/images/user-img.png" alt="">
										</span>
									</div>
								</i-circle>
							</div>
						</div>
						<div class="main-top-text" style="text-align: center ">
							<h2 v-if="loginuserinfo != null">{{loginuserinfo.displayName}}</h2>
							<span>保密级别:<span style="color: red">低</span></span> <span>账号风险:<span style="color:#51ad79">正常</span></span>
							<div class="main-t-r">
								<ul>
									<li>
										<span>{{counts}}</span>
										<p>好友数</p>
									</li>
									<li>
										<span>{{artical}}</span>
										<p>发表数</p>
									</li>
									<li>
										<span>{{comment}}</span>
										<p>回复数</p>
									</li>
									<li>
										<span>7</span>
										<p>分享数</p>
									</li>
									<li>
										<span>{{zan}}</span>
										<p>被赞数</p>
									</li>
								</ul>
							</div>
						</div>
						<div>
							<router-view></router-view>
						</div>
						</Col>
						<!--mian中边结束-->
					</Row>
				</Row>
			</div>
		</div>
		<!--mian结束-->
		<!--footer开始-->
		<div class="footer">
			<div class="container">
				<div class="footer-l">
					<ul>
						<li>关于NSS1</li>
						<li>公益性质</li>
						<li>服务项目</li>
						<li>以往案例</li>
						<li>新闻动态</li>
						<li>联系我们</li>
					</ul>
					<br/>
					<br/>
					<div>Copyright©2015trecare.com All Rights Reserved 版权所有TREcare
						<br/>备案号：蜀ICP备88888888号-1
                    </div>
				</div>
				<div class="footer-r">
					<ul>
						<li>微博</li>
						<li>微信</li>
						<li>Support:DGG Group</li>
					</ul>
				</div>
			</div>
		</div>
		<!--footer结束-->
	</div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
export default {
	name: 'app',
	data() {
		return {
			portal :'',
			theme1: 'light',
			value13:'',
			artical: '0',
			zan: '0',
			comment: '0',
			zanTwo: '0',
			counts: '0',
			formInline: {
				user: '',
				password: ''
			},
			ruleInline: {
				user: [{
					required: true,
					message: '请填写用户名',
					trigger: 'blur'
				}],
				password: [{
					required: true,
					message: '请填写密码',
					trigger: 'blur'
				},
				{
					type: 'string',
					min: 6,
					message: '密码长度不能小于6位',
					trigger: 'blur'
				}
				]
			},
			cardShow: false,
			appShow: true,
			loginuserinfo: JSON.parse(sessionStorage.getItem("user"))
		}
	},
	created: function () {
		this.findMyNoTitle()
		this.$router.push('/myWorries/myAuthentiacation')
	},
	methods: {
		routeTo(e) {
			if(e == '/portal'){
				this.portal = 'http://192.168.7.61:8080/ovit/center/gateway.htm?uid='+this.loginuserinfo.uniqueId
				window.open(this.portal)
			}else{
				this.$router.push(e)
			}
		},
		findMyNoTitle() {
			axios.get('http://localhost:1111/report/findMyTitle/')
				.then(response => {
					this.artical = response.data.list.artical
					this.zan = response.data.list.zan + response.data.list.zanTwo
					this.comment = response.data.list.comment
					this.counts = response.data.counts
				}).catch(function (error) {
					console.log(error)
				})
		},
		logout(){
			axios.get('http://localhost:1111/login/logout')
				.then(response => {
					console.log(response.data)
				})
				sessionStorage.removeItem("user")
				this.$router.push('/pro/firstPage')
		}
	}
}
</script>