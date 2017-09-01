<style scoped>
	.layout {
		background: #fff;
	}
	/* header样式开始*/

	header {
		height: 81px;
		background: #FFFFFF;
		border-bottom: 1px solid #e7e7e7;
	}

	/*本页出了头和底部样式开始*/
	.tabs-nav{
		width: 100%;
		height: 62px;
		border-bottom: 2px solid #51ad79;
	}
	.tabs-nav ul {
		width: 850px;
		margin: 0 auto;
	}
	.tabs-nav ul li {

	}
	.tabs-nav ul li a{
		float: left;
		margin-right: 60px;
		font-size: 16px;
		color: #333;
		line-height: 62px;
		display: block;
		padding: 0 10px;

	}
	.tabs-nav ul li .nav-end{
		float:right;
		margin-right: 0;
	}
	.tabs-nav ul li a:hover{
		background: #51ad79;
		color: #fff;
	}
	.tabs-nav ul li .diss{
		background: #51ad79;
		color: #fff;
	}
	.banner1{
		background: url("../../img/cp-banner.png") no-repeat center top;
		height: 440px;
		background-size: cover;
	}
	.banner2{
		background: url("../../img/cp-banner.png") no-repeat center top;
		height: 440px;
		background-size: cover;
	}
	.banner3{
		background: url("../../img/cp-banner.png") no-repeat center top;
		height: 440px;
		background-size: cover;
	}
	.dianshang{
		width: 200px;
		height: 440px;
		position: absolute;
		background: rgba(255,255,255,0.88);
		z-index: 999;
		margin: auto
	}
	.dianshang{
		padding-top: 26px;
		text-align: center;
		font-size: 14px;
		line-height: 44px;
	}
	.dianshang li:hover{
		color: #51ad79;
		cursor:pointer;
	}
	.shangping{
		border: 1px solid #ededed;
		height: 360px;
		width: 278px;
		margin-right:24px;
	}
	.shangping2{
		border: 1px solid #ededed;
		height: 360px;
		width: 280px;
		margin-right:-24px;

	}
	.shangping:hover{
		border: 1px solid #51ad79;
	}
	.shangping2:hover{
		border: 1px solid #51ad79;
	}
	img{
		transition: all 0.45s ease-in;
	}

	.img-dong{
		margin-top: 20px;
	}
	.jiage{
		font-size: 24px;
		color: #333;
		padding-right: 6px;
	}
	.huajiage{
		font-size: 16px;
		text-decoration: line-through;
		color: #999999;
	}
	.shangpingming{
		font-size: 18px;
		text-align: center;
	}
	.down-l-img01{
		background: url("../../img/xiaheitu.png") no-repeat;
		height: 155px;
		width: 310px;
		float: left;
	}
	.down-l-img02{
		background: url("../../img/xiaheitu.png") no-repeat;
		height: 155px;
		width: 310px;
		float: right;
	}
	.down-l-img03{
		border: 1px solid #ededed;
		width: 97px;
		font-size: 14px;
		text-align: center;
		margin-top: 10px;
	}
	.down-l-img03:hover{
		border: 1px solid #51ad79;
	}
	.down-l-img03 p{
		padding-bottom: 4px;
	}
	.down-r{
		width: 230px;
		height: 290px;
		background: url("../../img/down-r-img1.png") no-repeat;
		border: 1px solid  #ededed;
	}
	.down-r-img{
		height: 145px;
		border: 1px solid rgba(237, 237, 237, 0.51);
	}
	.down-r-img:hover{
		border: 1px solid #51ad79;
	}
	.down-text{
		background: rgba(81,173,121,.9);
		padding: 18px 0 10px 20px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	.down-text p{
		font-size: 18px;
		color: #fff;
	}
	.down-text span{
		font-size: 22px;
		color: #fff;
	}
	.container .ivu-col-span-7{
		width: auto;
	}

	/*本页出了头和底部样式结束*/
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
					<Menu mode="horizontal" :theme="theme1"  @on-select="routeTo">
						<Menu-item name="/pro/firstPage">
							<Icon type="ios-home"></Icon>
							首页
                        </Menu-item>
						<Menu-item name="/pro/member">
							会员中心
                        </Menu-item>
						<Menu-item name="/myWorries">
							我的无忧
                        </Menu-item>
						<Menu-item name="/portal">
							我的门户
                        </Menu-item>
						
					</Menu>
					</Col>
					<Col span="7">
					<Input v-model="value13" style="margin-top: 25px;margin-left: 60px; width: 238px;">
					<Button slot="append" icon="ios-search"></Button>
					</Input>
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

		<!--main开始-->
			<!--二级导航开始-->
			<div class="tabs-nav">
				<div class="container">
				<ul>
					<li>
						<a href="/pro/inforMationList">资讯</a>
						<a href="/pro/policyList">政策</a>
						<a href="/pro/inforMationList">知识</a>
						<a href="/good" class="diss">产品</a>
						<a href="/pro/inforMationList">服务</a>
						<a href="/pro/enterpriseList">企业</a>
						<a href="/pro/departmentList">机关</a>
						<a href="/pro/expertList" class="nav-end">专家</a>
					</li>
				</ul>
			</div>
		</div>
			<!--二级导航结束-->

			<!--banner开始-->
		<div class="container">
		<div class="dianshang">
			<ul>
				<li><a target="_blank" href="http://192.168.7.61:8080/gf_mall_client/productlist/002-1-30.html">农资产品</a></li>
				<li><a target="_blank" href="http://192.168.7.61:8080/gf_mall_client/productlist/003-1-30.html">生产用具</a></li>
				<li><a target="_blank" href="http://192.168.7.61:8080/gf_mall_client/productlist/004-1-30.html">机械设备</a></li>
				<li><a target="_blank" href="http://192.168.7.61:8080/gf_mall_client/productlist/005-1-30.html">仪器列表</a></li>
				<li><a target="_blank" href="http://192.168.7.61:8080/gf_mall_client/productlist/006-1-30.html">农事产品</a></li>
				<li><a target="_blank" href="http://192.168.7.61:8080/gf_mall_client/productlist/007-1-30.html">食用产品</a></li>
				<li><a target="_blank" href="http://192.168.7.61:8080/gf_mall_client/productlist/008-1-30.html">图书音像</a></li>
				<li><a target="_blank" href="http://192.168.7.61:8080/gf_mall_client/productlist/009-1-30.html">日用产品</a></li>
				<li><a target="_blank" href="http://192.168.7.61:8080/gf_mall_client/productlist/010-1-30.html">无形商品</a></li>
			</ul>			
		</div>
		</div>
		<Carousel autoplay v-model="value2">
			<Carousel-item>
				<div class="demo-carousel banner1"></div>
			</Carousel-item>
			<Carousel-item>
				<div class="demo-carousel banner2"></div>
			</Carousel-item>
			<Carousel-item>
				<div class="demo-carousel banner3"></div>
			</Carousel-item>
		</Carousel>
			<!--banner结束-->

		<!--content开始-->
		<div class="container" style="width: 1172px">
		<div class="tuangou-title">
			<Button type="ghost" style="float: right;margin-top: 16px;width: 68px;height: 30px;line-height: 18px">更多 ▸</Button>
			<div style="width: 24px;height: 4px;margin: auto;background: #51ad79;margin-top: 58px"></div>
			<h1 style="font-size: 34px;font-weight: normal;text-align: center;padding-bottom: 30px;width: 600px;margin: auto">热门团购</h1>
			<div>
				<Row :gutter="16">
					<Col span="6" class="shangping">
					<div>
						<div style="padding: 10px 0 0 10px">
						<span class="jiage">158</span><span class="huajiage">248</span>
						</div>
						<div class="img-dong">

							<img src="../../img/shangping01.png" alt="" class="dongx">
						</div>
						<p class="shangpingming">天然花草</p>
						<div style="width: 201px;margin: auto;margin-top: 10px">
							<img src="../../img/daojishi.png" alt="" >
						</div>
					</div>
					</Col>
					<Col span="6" class="shangping">
					<div>
						<div style="padding: 10px 0 0 10px">
							<span class="jiage">158</span><span class="huajiage">248</span>
						</div>
						<div class="img-dong">
							<img src="../../img/shangping01.png" alt="" class="dongx">
						</div>
						<p class="shangpingming">天然花草</p>
						<div style="width: 201px;margin: auto;margin-top: 10px">
							<img src="../../img/daojishi.png" alt="" >
						</div>
					</div>
					</Col>
					<Col span="6" class="shangping">
					<div>
						<div style="padding: 10px 0 0 10px">
							<span class="jiage">158</span><span class="huajiage">248</span>
						</div>
						<div class="img-dong">
							<img src="../../img/shangping01.png" alt="" class="dongx">
						</div>
						<p class="shangpingming">天然花草</p>
						<div style="width: 201px;margin: auto;margin-top: 10px">
							<img src="../../img/daojishi.png" alt="" >
						</div>
					</div>
					</Col>
					<Col span="6" class="shangping2">
					<div>
						<div style="padding: 10px 0 0 10px">
							<span class="jiage">158</span><span class="huajiage">248</span>
						</div>
						<div class="img-dong">
							<img src="../../img/shangping01.png" alt="" class="dongx">
						</div>
						<p class="shangpingming">天然花草</p>
						<div style="width: 201px;margin: auto;margin-top: 10px">
							<img src="../../img/daojishi.png" alt="" >
						</div>
					</div>
					</Col>
				</Row>
			</div>
		</div>
			<div class="tuangou-title">
				<Button type="ghost" style="float: right;margin-top: 16px;width: 68px;height: 30px;line-height: 18px">更多 ▸</Button>
				<div style="width: 24px;height: 4px;margin: auto;background: #51ad79;margin-top: 58px"></div>
				<h1 style="font-size: 34px;font-weight: normal;text-align: center;padding-bottom: 30px;width: 600px;margin: auto">热门团购</h1>
				<div>
					<Row :gutter="16">
						<Col span="6" class="shangping">
						<div>
							<div style="padding: 10px 0 0 10px">
								<span class="jiage">158</span><span class="huajiage">248</span>
							</div>
							<div class="img-dong">
								<img src="../../img/shangping01.png" alt="" class="dongx">
							</div>
							<p class="shangpingming">天然花草</p>
							<div style="width: 201px;margin: auto;margin-top: 10px">
								<img src="../../img/daojishi.png" alt="" >
							</div>
						</div>
						</Col>
						<Col span="6" class="shangping">
						<div>
							<div style="padding: 10px 0 0 10px">
								<span class="jiage">158</span><span class="huajiage">248</span>
							</div>
							<div class="img-dong">
								<img src="../../img/shangping01.png" alt="" class="dongx">
							</div>
							<p class="shangpingming">天然花草</p>
							<div style="width: 201px;margin: auto;margin-top: 10px">
								<img src="../../img/daojishi.png" alt="" >
							</div>
						</div>
						</Col>
						<Col span="6" class="shangping">
						<div>
							<div style="padding: 10px 0 0 10px">
								<span class="jiage">158</span><span class="huajiage">248</span>
							</div>
							<div class="img-dong">
								<img src="../../img/shangping01.png" alt="" class="dongx">
							</div>
							<p class="shangpingming">天然花草</p>
							<div style="width: 201px;margin: auto;margin-top: 10px">
								<img src="../../img/daojishi.png" alt="" >
							</div>
						</div>
						</Col>
						<Col span="6" class="shangping2">
						<div>
							<div style="padding: 10px 0 0 10px">
								<span class="jiage">158</span><span class="huajiage">248</span>
							</div>
							<div class="img-dong">
								<img src="../../img/shangping01.png" alt="" class="dongx">
							</div>
							<p class="shangpingming">天然花草</p>
							<div style="width: 201px;margin: auto;margin-top: 10px">
								<img src="../../img/daojishi.png" alt="" >
							</div>
						</div>
						</Col>
					</Row>
				</div>
			</div>
			<div class="tuangou-title">
				<Button type="ghost" style="float: right;margin-top: 16px;width: 68px;height: 30px;line-height: 18px">更多 ▸</Button>
				<div style="width: 24px;height: 4px;margin: auto;background: #51ad79;margin-top: 58px"></div>
				<h1 style="font-size: 34px;font-weight: normal;text-align: center;padding-bottom: 30px;width: 600px;margin: auto">热门团购</h1>
				<div>
					<Row :gutter="16">
						<Col span="6" class="shangping">
						<div>
							<div style="padding: 10px 0 0 10px">
								<span class="jiage">158</span><span class="huajiage">248</span>
							</div>
							<div class="img-dong">
								<img src="../../img/shangping01.png" alt="" class="dongx">
							</div>
							<p class="shangpingming">天然花草</p>
							<div style="width: 201px;margin: auto;margin-top: 10px">
								<img src="../../img/daojishi.png" alt="" >
							</div>
						</div>
						</Col>
						<Col span="6" class="shangping">
						<div>
							<div style="padding: 10px 0 0 10px">
								<span class="jiage">158</span><span class="huajiage">248</span>
							</div>
							<div class="img-dong">
								<img src="../../img/shangping01.png" alt="" class="dongx">
							</div>
							<p class="shangpingming">天然花草</p>
							<div style="width: 201px;margin: auto;margin-top: 10px">
								<img src="../../img/daojishi.png" alt="" >
							</div>
						</div>
						</Col>
						<Col span="6" class="shangping">
						<div>
							<div style="padding: 10px 0 0 10px">
								<span class="jiage">158</span><span class="huajiage">248</span>
							</div>
							<div class="img-dong">
								<img src="../../img/shangping01.png" alt="" class="dongx">
							</div>
							<p class="shangpingming">天然花草</p>
							<div style="width: 201px;margin: auto;margin-top: 10px">
								<img src="../../img/daojishi.png" alt="" >
							</div>
						</div>
						</Col>
						<Col span="6" class="shangping2">
						<div>
							<div style="padding: 10px 0 0 10px">
								<span class="jiage">158</span><span class="huajiage">248</span>
							</div>
							<div class="img-dong">
								<img src="../../img/shangping01.png" alt="" class="dongx">
							</div>
							<p class="shangpingming">天然花草</p>
							<div style="width: 201px;margin: auto;margin-top: 10px">
								<img src="../../img/daojishi.png" alt="" >
							</div>
						</div>
						</Col>
					</Row>
				</div>
			</div>
			<div >
				<Row>
					<Col span="13" style="width: 630px">
					<h2 style="margin-top: 50px;border-left: 6px solid #4fac77;line-height: 22px;padding-left: 6px;display: block;margin-bottom: 16px">特色推荐</h2>
					<div class="down-l-img01"></div>
					<div class="down-l-img02"></div>
					<Row :gutter="16">
						<Col span="4">
						<div class="down-l-img03">
							<img src="../../img/down-img03.png" alt="">
							<p>¥168</p>
						</div>
						</Col>
						<Col span="4">
						<div class="down-l-img03">
							<img src="../../img/down-img03.png" alt="">
							<p>¥168</p>
						</div>
						</Col>
						<Col span="4">
						<div class="down-l-img03">
							<img src="../../img/down-img03.png" alt="">
							<p>¥168</p>
						</div>
						</Col>
						<Col span="4">
						<div class="down-l-img03">
							<img src="../../img/down-img03.png" alt="">
							<p>¥168</p>
						</div>
						</Col>
						<Col span="4">
						<div class="down-l-img03">
							<img src="../../img/down-img03.png" alt="">
							<p>¥168</p>
						</div>
						</Col>
						<Col span="4">
						<div class="down-l-img03">
							<img src="../../img/down-img03.png" alt="">
							<p>¥168</p>
						</div>
						</Col>
					</Row>
					</Col>
					<Col span="11" style="width: 520px;margin-left: 20px">
					<Button type="ghost" style="float: right;margin-top: 44px;width: 68px;height: 30px;line-height: 18px">更多 ▸</Button>
					<h2 style="margin-top: 50px;border-left: 6px solid #4fac77;line-height: 22px;padding-left: 6px;display: block;margin-bottom: 16px">特色推荐</h2>
					<Row>
						<Col span="12" style="width: 230px">
						<div class="down-r">
							<div class="down-text">
								<p>美国加州车厘子</p>
								<span>¥168</span>
							</div>
						</div>
						</Col>
						<Col span="12" style="width: 290px">
						<Row>
							<Col span="12" class="down-r-img">
							<div style="padding-top: 14px;padding-left: 14px"><p  style="font-size: 12px">苹果</p>
								<p  style="font-size: 14px;color: #51ad79">¥12</p></div>
							<img src="../../img/apple.png" alt="" style="margin-left: 30px;">
							</Col>
							<Col span="12" class="down-r-img">
							<div style="padding-top: 14px;padding-left: 14px"><p  style="font-size: 12px">苹果</p>
								<p  style="font-size: 14px;color: #51ad79">¥12</p></div>
							<img src="../../img/apple.png" alt="" style="margin-left: 30px;">
							</Col>
							<Col span="12" class="down-r-img">
							<div style="padding-top: 14px;padding-left: 14px"><p  style="font-size: 12px">苹果</p>
								<p  style="font-size: 14px;color: #51ad79">¥12</p></div>
							<img src="../../img/apple.png" alt="" style="margin-left: 30px;">
							</Col>
							<Col span="12" class="down-r-img">
							<div style="padding-top: 14px;padding-left: 14px"><p  style="font-size: 12px">苹果</p>
								<p  style="font-size: 14px;color: #51ad79">¥12</p></div>
							<img src="../../img/apple.png" alt="" style="margin-left: 30px;">
							</Col>
						</Row>
						</Col>
					</Row>
					</Col>
				</Row>
			</div>
		</div>
		<!--content结束-->
		<!--main结束-->
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
						<br/>备案号：蜀ICP备88888888号-1</div>
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
import Qs from 'qs'
import axios from 'axios'
export default {
	name: 'app',
	data() {
		return {
			loginuserinfo: JSON.parse(sessionStorage.getItem("user")),
			portal :'',
			theme1:'light',
			modal1: false,
			modal2: false,
			modal_loading: false,
			modal3: false,
			modal4: false,
			modal5: false,
			value13:'',
			value2:'',
			value: '',
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
				],
				methods: {
					del() {
						this.modal_loading = true
						setTimeout(() => {
							this.modal_loading = false
							this.modal2 = false
							this.$Message.success('删除成功')
						}, 2000)
					},
					ok() {
						this.$Message.info('点击了确定');
					},
					cancel() {
						this.$Message.info('点击了取消');
					}
				}
			},
			cardShow: false,
			appShow: true
		}
	},
	created: function () {
		//            this.$router.push('/pro/firstPage')
	},
	methods: {
		modalShow() {
			this.cardShow = !this.cardShow
			this.appShow = !this.appShow
		},
		search: function () {
			alert('111')
			this.$router.push({
				path: '/search'
			})
		},
		routeTo(e) {
			if(e == '/portal'){
				this.portal = 'http://192.168.7.61:8080/gf_mall_client/shop/seller.html?memLoginId='+this.loginuserinfo.loginAccount
				window.open(this.portal)
			}else{
				this.$router.push(e)
			}
		},
		/*注册*/
		handleSubmit(name) {
			this.$refs[name].validate((valid) => {
				if (valid) {
					axios({
						method: 'post',
						url: 'http://localhost:1111/login/insert',
						data: {
							username: this.formInline.user,
							pwd: this.formInline.password
						}
					}).then(response => {
						if ('exists' === response.data) {
							this.$Message.error('用户名已存在！');
						} else {
							this.$Message.success('注册成功!');
							this.modal2 = false;
						}
					})
				}
			})
		},
		//登录
		login(name) {
			this.$refs[name].validate((valid) => {
				if (valid) {
					axios({
						method: 'post',
						url: 'http://localhost:1111/login/login',
						data: {
							username: this.formInline.user,
							pwd: this.formInline.password
						}
					}).then(response => {
						console.log(response.data.user)
						if (undefined != response.data.user) {
							//this.$Message.success('登录成功!');
							sessionStorage.setItem("user", JSON.stringify(response.data.user))
							this.modal2 = false;
							this.modal1 = true;
						} else {
							this.$Message.error('用户名或密码错误!');
						}
					}).catch(function (error) {
						console.log(error)
					})
				}
			})
		},
		//点击登录显示登录界面
		loginuser() {
			this.value = '登录';
			this.modal2 = true;
		},
		//点击注册显示注册界面
		regist() {
			this.value = '注册';
			this.modal2 = true;
		},
		test() {
			axios.get('http://localhost:1111/login/friend_list')
				.then(response => {
					this.friend = response.data;
					this.friend.forEach(e => {
						console.log(e.id)
					})
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