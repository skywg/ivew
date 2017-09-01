<template>
	<div class="wrapper">
		<top :address="false" />
		<!-- 导航 -->
		<div class="layouts">
			<a href="javascript:;"><img src="../../../static/datas/img/ad.png"></a>
		</div>
		<nav class="mall-nav">
			<div class="layouts">
				<a href="/mall/index" class="link on">首页</a>
				<a href="/pro/inforMationList" class="link">资讯</a>
				<a href="/pro/policyList" class="link">政策</a>
				<a href="/pro/knowledgeList" class="link">知识</a>
				<a href="/pro/productList" class="link">产品</a>
				<a href="javascript:;" class="link">服务</a>
				<a href="/pro/enterpriseList" class="link">企业</a>
				<a href="/pro/departmentList" class="link">机关</a>
				<a href="/pro/expertList" class="link">专家</a>
			</div>
		</nav>
		<section class="layouts">
			<!-- 要文排行 -->
			<Row class="mt30">
				<Col span="8">
				<Carousel v-model="carousel.value" :autoplay="carousel.autoplay" :dots="carousel.dots" :arrow="carousel.arrow">
					<Carousel-item v-for="item in carousel.list">
						<Row>
							<Col span="24" class="mb10">
							<img :src="item.src[0]" width="100%">
							<div class="tit">{{item.title[0]}}</div>
							</Col>
							<Col span="12" class="pr5">
							<img :src="item.src[1]" width="100%">
							<div class="tit">{{item.title[1]}}</div>
							</Col>
							<Col span="12" class="pl5">
							<img :src="item.src[2]" width="100%">
							<div class="tit">{{item.title[2]}}</div>
							</Col>
						</Row>
					</Carousel-item>
				</Carousel>
				</Col>
				<Col span="8" class="pl20 pr10">
				<mall-new-title text="农业要闻" />
				<ul class="mall-news agro-news has-dot mt5">
					<li v-for="item in agroList">
						<a :href="item.url" class="tit ell">{{item.title}}</a>
					</li>
				</ul>
				</Col>
				<Col span="8">
				<mall-new-title text="阅读排行" />
				<ul class="mall-news read-rate has-num mt5">
					<li v-for="(item,index) in readList" class="clear">
						<Col span="1">
						<div class="num">{{index+1}}</div>
						</Col>
						<a :href="item.url">
							<Col span="18" class="ell tit">{{item.title}}</Col>
						</a>
						<Col span="5" class="t-grey tr">{{item.clickRate}}</Col>
					</li>
				</ul>
				</Col>
			</Row>
			<!-- 热门 推荐 -->
			<Row class="mt30">
				<Col span="4" class="hot-classify">
				<mall-new-title text="热门分类" background="#F7F7F7" />
				<ul class="min-nav mt10">
					<li class="item clear" v-for="item in minNav">
						<Col span="3"><i :class="item.icon" class="h4"></i></Col>
						<Col span="19" class="tl pl10">{{item.name}}</Col>
						<Col span="2"><i class="icon-arrow-right"></i></Col>
						<div class="sub">
							<Row>
								<Col span="24">
								<Row v-for="sub in item.sub" class="mt10 mb10 pr10">
									<Col span="3">
									<a :href="['http://192.168.7.61:8080/ovit/'+sub.url]" class="sub-class">{{sub.text}} <i class="icon-arrow-right"></i></a>
									</Col>
									<Col span="21" class="pb5 mb5 tl" style="border-bottom: 1px dotted #ddd;">
									<a v-for="link in sub.sublink" :href="['http://192.168.7.61:8080/ovit/'+link.url]" class="sub-link">{{link.text}}</a>
									</Col>
								</Row>
								</Col>
							</Row>
						</div>
					</li>
				</ul>
				</Col>
				<Col span="20" class="recom-list pl20">
				<mall-new-title text="产品推荐" more background="#F7F7F7">
					<template slot="more">
						<a href="javascript:;" class="link">推荐产品</a> |
						<a href="javascript:;" class="link">热门产品</a> |
						<a href="javascript:;" class="link">最新产品</a>
					</template>
				</mall-new-title>
				<Row class="mt10">
					<Col span="18">
					<Col span="8" v-for="item in recomList" class="item">
					<a :href="item.url">
						<div class="info">
							<p class="h6">{{item.title}}</p>
							<p class="h5 t-orange">￥{{item.price}}</p>
						</div>
						<img :src="item.src" height="216">
					</a>
					</Col>
					</Col>
					<Col span="6">
					<Col span="24" v-for="item in minRecomList" class="item" style="border-right:1px solid #efefef">
					<a :href="item.url">
						<div class="info">
							<p class="h6">{{item.title}}</p>
							<p class="h5 t-orange">￥{{item.price}}</p>
						</div>
						<img :src="item.src" height="143">
					</a>
					</Col>
					</Col>
				</Row>
				</Col>
			</Row>
			<div class="mt30 mb30">
				<a href="javascript:;"><img src="../../../static/datas/img/ad.png"></a>
			</div>

			<!-- 服务 -->
			<Row>
				<Col span="9" class="pr20">
				<mall-new-title text="服务供应" more>
					<template slot="more">
						<a href="javascript:;" class="link">更多 >></a>
					</template>
				</mall-new-title>
				<ul class="mall-news read-rate has-num mt5">
					<li v-for="(item,index) in readList" class="clear">
						<Col span="1">
						<div class="num">{{index+1}}</div>
						</Col>
						<a :href="item.url">
							<Col span="18" class="ell tit">{{item.title}}</Col>
						</a>
						<Col span="5" class="t-grey tr">{{item.clickRate}}</Col>
					</li>
				</ul>
				</Col>
				<Col span="9" class="pr20">
				<mall-new-title text="服务需求" more>
					<template slot="more">
						<a href="javascript:;" class="link">更多 >></a>
					</template>
				</mall-new-title>
				<ul class="mall-news read-rate has-num mt5">
					<li v-for="(item,index) in readList" class="clear">
						<Col span="1">
						<div class="num">{{index+1}}</div>
						</Col>
						<a :href="item.url">
							<Col span="18" class="ell tit">{{item.title}}</Col>
						</a>
						<Col span="5" class="t-grey tr">{{item.clickRate}}</Col>
					</li>
				</ul>
				</Col>
				<Col span="6">
				<mall-new-title text="最新入住机构" more>
					<template slot="more">
						<a href="javascript:;" class="link">更多 >></a>
					</template>
				</mall-new-title>
				<ul class="mall-news read-rate has-dot mt5">
					<li v-for="(item,index) in organizList" class="clear">
						<a :href="item.url">
							<Col span="18" class="ell tit">{{item.title}}</Col>
						</a>
						<Col span="5" class="t-grey tr">山东</Col>
					</li>
				</ul>
				</Col>
			</Row>
			<div class="mt30 mb30">
				<a href="javascript:;"><img src="../../../static/datas/img/ad.png"></a>
			</div>

			<Row class="info-list">
				<mall-new-title text="资讯中心" more background="#F7F7F7">
					<template slot="more">
						<a href="javascript:;" class="link">国内资讯</a> |
						<a href="javascript:;" class="link">国际资讯</a> |
						<a href="javascript:;" class="link">农业科技</a> |
						<a href="javascript:;" class="link">循环经济</a> |
						<a href="javascript:;" class="link">食品安全</a>
					</template>
				</mall-new-title>
				<Col span="8" class="mt20">
				<Carousel v-model="carousel.value" :autoplay="carousel.autoplay" :dots="carousel.dots" :arrow="carousel.arrow">
					<Carousel-item v-for="item in carousel.list">
						<Row>
							<Col span="24" class="mb10">
							<img :src="item.src[0]" width="100%">
							<div class="tit">{{item.title[0]}}</div>
							</Col>
							<Col span="12" class="pr5">
							<img :src="item.src[1]" width="100%">
							<div class="tit">{{item.title[1]}}</div>
							</Col>
							<Col span="12" class="pl5">
							<img :src="item.src[2]" width="100%">
							<div class="tit">{{item.title[2]}}</div>
							</Col>
						</Row>
					</Carousel-item>
				</Carousel>
				</Col>
				<Col span="8" class="pl20 pr10">
				<ul class="mall-news agro-news has-dot mt5">
					<li v-for="(item,index) in info1">
						<router-link :to="{ path: '/InforMation/findInforMationDetail', query: { 'id': item.id }}"> {{ item.title }}</router-link>
					</li>
				</ul>
				</Col>
				<Col span="8">
				<ul class="mall-news agro-news has-dot mt5">
					<li v-for="(item,index) in info2">
						<router-link :to="{ path: '/InforMation/findInforMationDetail', query: { 'id': item.id }}"> {{ item.title }}</router-link>
					</li>
				</ul>
				</Col>
				<Col span="24">
				<slick ref="slick" :options="slickOptions" class="slick">
					<a :href="item.url" v-for="item in slickList"><img :src="item.src"></a>
				</slick>
				</Col>
			</Row>

			<Row>
				<mall-new-title text="知识大全" more background="#F7F7F7">
					<!-- <template slot="more">
                        <a href="javascript:;" class="link">国内资讯</a> |
                        <a href="javascript:;" class="link">国际资讯</a> |
                        <a href="javascript:;" class="link">农业科技</a> |
                        <a href="javascript:;" class="link">循环经济</a> |
                        <a href="javascript:;" class="link">食品安全</a>
                    </template> -->
				</mall-new-title>
				<Col span="24">
				<Col span="8" class="pd10" >
				<div class="mt20 pl10 pr10 clear">
					<span class="h6 b">科普</span>
					<a href="javascript:;" class="fr mt5" style="color:#4a4a4a;">更多 >></a>
				</div>
						<ul class="mall-news read-rate has-dot mt5">
                            <li v-for="item in leibie" v-if="item.leibie==='科普'">
                            	<router-link :to="{ path: '/InforMation/knowledgeDetail', query: { 'id': item.id }}"> {{ item.title }}</router-link>
                            	</li>
                        </ul>
				</Col>
				<Col span="8" class="pd10">
				<div class="mt20 pl10 pr10 clear">
					<span class="h6 b">论文</span>
					<a href="javascript:;" class="fr mt5" style="color:#4a4a4a;">更多 >></a>
				</div>
				<ul class="mall-news read-rate has-dot mt5">
					<li v-for="item in leibie" v-if="item.leibie==='论文'">
						<router-link :to="{ path: '/InforMation/knowledgeDetail', query: { 'id': item.id }}"> {{ item.title }}</router-link>
					</li>
				</ul>
				</Col>
				<Col span="8" class="pd10">
				<div class="mt20 pl10 pr10 clear">
					<span class="h6 b">图书</span>
					<a href="javascript:;" class="fr mt5" style="color:#4a4a4a;">更多 >></a>
				</div>
				<ul class="mall-news read-rate has-dot mt5">
					<li v-for="item in leibie" v-if="item.leibie==='图书'">
						<router-link :to="{ path: '/InforMation/knowledgeDetail', query: { 'id': item.id }}"> {{ item.title }}</router-link>
					</li>
				</ul>
				</Col>
				</Col>
				<Col span="24">
				<Col span="8" class="pd10">
				<div class="mt20 pl10 pr10 clear">
					<span class="h6 b">科技成果</span>
					<a href="javascript:;" class="fr mt5" style="color:#4a4a4a;">更多 >></a>
				</div>
				<ul class="mall-news read-rate has-dot mt5">
					<li v-for="item in leibie" v-if="item.leibie==='科技成果'">
						<router-link :to="{ path: '/InforMation/knowledgeDetail', query: { 'id': item.id }}"> {{ item.title }}</router-link>
					</li>
				</ul>
				</Col>
				<Col span="8" class="pd10">
				<div class="mt20 pl10 pr10 clear">
					<span class="h6 b">种养标准</span>
					<a href="javascript:;" class="fr mt5" style="color:#4a4a4a;">更多 >></a>
				</div>
				<ul class="mall-news read-rate has-dot mt5">
					<li v-for="item in leibie" v-if="item.leibie==='种养标准'">
						<router-link :to="{ path: '/InforMation/knowledgeDetail', query: { 'id': item.id }}"> {{ item.title }}</router-link>
					</li>
				</ul>
				</Col>
				<Col span="8" class="pd10">
				<div class="mt20 pl10 pr10 clear">
					<span class="h6 b">经验交流</span>
					<a href="javascript:;" class="fr mt5" style="color:#4a4a4a;">更多 >></a>
				</div>
				<ul class="mall-news read-rate has-dot mt5">
					<li v-for="item in leibie" v-if="item.leibie==='经验交流'">
						<router-link :to="{ path: '/InforMation/knowledgeDetail', query: { 'id': item.id }}"> {{ item.title }}</router-link>
					</li>
				</ul>
				</Col>
				</Col>
			</Row>
			<div class="mt30 mb30">
				<a href="javascript:;"><img src="../../../static/datas/img/ad.png"></a>
			</div>
			<Row>
				<mall-new-title text="法律法规" more background="#F7F7F7" />
				<Col span="24">
				<Col span="8" class="pd10">
				<div class="mt20 pl10 pr10 clear">
					<span class="h6 b">政策法规</span>
					<a href="javascript:;" class="fr mt5" style="color:#4a4a4a;">更多 >></a>
				</div>
				<ul class="mall-news read-rate has-dot mt5">
					<li v-for="item in regulations">
						<router-link :to="{ path: '/InforMation/policyDetail', query: { 'id': item.informationDetailId }}"> {{ item.title }}</router-link>

					</li>
				</ul>
				</Col>
				<Col span="8" class="pd10">
				<div class="mt20 pl10 pr10 clear">
					<span class="h6 b">政策解读</span>
					<a href="javascript:;" class="fr mt5" style="color:#4a4a4a;">更多 >></a>
				</div>
				<ul class="mall-news read-rate has-dot mt5">
					<li v-for="item in interpretation">
						<router-link :to="{ path: '/InforMation/policyDetail', query: { 'id': item.informationDetailId }}"> {{ item.title }}</router-link>
					</li>
				</ul>
				</Col>
				<Col span="8" class="pd10">
				<div class="mt20 pl10 pr10 clear">
					<span class="h6 b">通知公告</span>
					<a href="javascript:;" class="fr mt5" style="color:#4a4a4a;">更多 >></a>
				</div>
				<ul class="mall-news read-rate has-dot mt5">
					<li v-for="item in notice">
						<router-link :to="{ path: '/InforMation/policyDetail', query: { 'id': item.informationDetailId }}"> {{ item.title }}</router-link>
					</li>
				</ul>
				</Col>
				</Col>
			</Row>
		</section>
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

	</div>
</template>
<script>
	import axios from 'axios'
	import $ from 'jquery'
	import top from '../../top'
	import mallNewTitle from '~components/mallNewTitle'
	import slick from 'vue-slick'
	export default {
		components: {
			top,
			mallNewTitle,
			slick
		},
		data() {
			return {
				currentPage: 1,
				pageSize: 6,
				total: 0,
				info1: [],
				info2: [],
				leibie: [],
				carousel: {
					value: 0,
					dots: 'outside',
					autoplay: true,
					arrow: 'never',

					list: [{
						src: [
							'../static/datas/img/banner01.png',
							'../static/datas/img/banner02.png',
							'../static/datas/img/banner03.png'
						],
						title: [
							'农业电商成为农产品品牌发展的热门主体',
							'双手开创全面小康美好明天',
							'系上“保险带”熨平“猪周期”'
						]
					}, {
						src: [
							'../static/datas/img/banner01.png',
							'../static/datas/img/banner02.png',
							'../static/datas/img/banner03.png'
						],
						title: [
							'农业电商成为农产品品牌发展的热门主体',
							'双手开创全面小康美好明天',
							'系上“保险带”熨平“猪周期”'
						]
					}]
				},
				agroList: [{
					title: '上周发生了哪些农业大事？7月第2期',
					url: 'javascript:;'
				}, {
					title: '江苏大丰区农委加大农业结构调整服务推进力度',
					url: 'javascript:;'
				}, {
					title: '公司注册三个商标,法人电话被骚扰不断,个人信息还.....',
					url: 'javascript:;'
				}, {
					title: '武汉：本周蔬菜价格基本稳定',
					url: 'javascript:;'
				}, {
					title: '安徽：2017年实现全省农村电商县域全覆盖',
					url: 'javascript:;'
				}, {
					title: '专家答疑解惑：农民所不了解的微生物肥料',
					url: 'javascript:;'
				}, {
					title: '“人可以喝的农药”实现农业生产与生态环境的平衡',
					url: 'javascript:;'
				}, {
					title: '农业部发布控制小麦赤霉病危害技术指导意见',
					url: 'javascript:;'
				}, {
					title: '江苏大丰区农委加大农业结构调整服务推进力度',
					url: 'javascript:;'
				}],
				readList: [{
					title: '上周发生了哪些农业大事？7月第2期',
					clickRate: 100,
					url: 'javascript:;'
				}, {
					title: '江苏大丰区农委加大农业结构调整服务推进力度',
					clickRate: 200,
					url: 'javascript:;'
				}, {
					title: '公司注册三个商标,法人电话被骚扰不断,个人信息还.....',
					clickRate: 300,
					url: 'javascript:;'
				}, {
					title: '武汉：本周蔬菜价格基本稳定',
					clickRate: 400,
					url: 'javascript:;'
				}, {
					title: '安徽：2017年实现全省农村电商县域全覆盖',
					clickRate: 500,
					url: 'javascript:;'
				}, {
					title: '专家答疑解惑：农民所不了解的微生物肥料',
					clickRate: 600,
					url: 'javascript:;'
				}, {
					title: '“人可以喝的农药”实现农业生产与生态环境的平衡',
					clickRate: 700,
					url: 'javascript:;'
				}, {
					title: '农业部发布控制小麦赤霉病危害技术指导意见',
					clickRate: 800,
					url: 'javascript:;'
				}, {
					title: '江苏大丰区农委加大农业结构调整服务推进力度',
					clickRate: 900,
					url: 'javascript:;'
				}, {
					title: '2017年7月下旬杀菌剂原药价格行情',
					clickRate: 1000,
					url: 'javascript:;'
				}],
				minNav: this.$minNav.data,
				recomList: [{
					title: '复合肥料',
					src: '../static/datas/img/Group16.png',
					price: 80,
				}, {
					title: '复合肥料',
					src: '../static/datas/img/cp2.png',
					price: 80,
				}, {
					title: '复合肥料',
					src: '../static/datas/img/cp3.png',
					price: 80,
				}, {
					title: '复合肥料',
					src: '../static/datas/img/cp4.png',
					price: 80,
				}, {
					title: '复合肥料',
					src: '../static/datas/img/cp5.png',
					price: 80,
				}, {
					title: '复合肥料',
					src: '../static/datas/img/cp6.png',
					price: 80,
				}],
				minRecomList: [{
					title: '复合肥料',
					src: '../static/datas/img/xiaocp01.png',
					price: 80,
				}, {
					title: '复合肥料',
					src: '../static/datas/img/xiaocp02.png',
					price: 80,
				}, {
					title: '复合肥料',
					src: '../static/datas/img/xiaocp03.png',
					price: 80,
				}],
				organizList: [{
					title: '沂水县起伟果蔬种植专业合作社',
					url: 'javascript:;'
				}, {
					title: '沂水县起伟果蔬种植专业合作社',
					url: 'javascript:;'
				}, {
					title: '沂水县起伟果蔬种植专业合作社',
					url: 'javascript:;'
				}, {
					title: '沂水县起伟果蔬种植专业合作社',
					url: 'javascript:;'
				}, {
					title: '沂水县起伟果蔬种植专业合作社',
					url: 'javascript:;'
				}, {
					title: '沂水县起伟果蔬种植专业合作社',
					url: 'javascript:;'
				}, {
					title: '沂水县起伟果蔬种植专业合作社',
					url: 'javascript:;'
				}, {
					title: '沂水县起伟果蔬种植专业合作社',
					url: 'javascript:;'
				}, {
					title: '沂水县起伟果蔬种植专业合作社',
					url: 'javascript:;'
				}, {
					title: '沂水县起伟果蔬种植专业合作社',
					url: 'javascript:;'
				}],
				slickList: [{
					src: '../static/datas/img/kaocha01.png',
					url: 'javascript:;'
				}, {
					src: '../static/datas/img/kaocha02.png',
					url: 'javascript:;'
				}, {
					src: '../static/datas/img/kaocha03.png',
					url: 'javascript:;'
				}, {
					src: '../static/datas/img/kaocha04.png',
					url: 'javascript:;'
				}, {
					src: '../static/datas/img/kaocha05.png',
					url: 'javascript:;'
				}, {
					src: '../static/datas/img/kaocha06.png',
					url: 'javascript:;'
				}, {
					src: '../static/datas/img/kaocha01.png',
					url: 'javascript:;'
				}, {
					src: '../static/datas/img/kaocha02.png',
					url: 'javascript:;'
				}, {
					src: '../static/datas/img/kaocha03.png',
					url: 'javascript:;'
				}, {
					src: '../static/datas/img/kaocha04.png',
					url: 'javascript:;'
				}],
				slickOptions: {
					slidesToShow: 6,
					autoplay: true,
					slidesToScroll: 1,
					autoplaySpeed: 1000,
					arrows: false
				},
				loreList: [{
					title: '云南广南：推进精准扶贫工作，入股资金近30',
					src: 'javascript:;'
				}, {
					title: '江苏大丰区农委加大农业结构调整服务推进力度',
					src: 'javascript:;'
				}, {
					title: '小马奔腾陨落记：人才出走竞争削弱加速衰落',
					src: 'javascript:;'
				}, {
					title: '一位山羊奶肥皂创业者分享的5条创业经验',
					src: 'javascript:;'
				}, {
					title: '一位山羊奶肥皂创业者分享的5条创业经验',
					src: 'javascript:;'
				}],
				regulations: [],
				interpretation: [],
				notice: []
			}
		},
		created() {
			this.fetchData()
			this.showinfo()
			this.showled()
		},
		methods: {
			fetchData: function() {
				axios.get('http://localhost:1111/policy/findIndexPolicy/' + this.currentPage + "?pageSize=" + this.pageSize)
					.then(response => {
						this.regulations = response.data.regulations.list,
							this.interpretation = response.data.interpretation.list,
							this.notice = response.data.notice.list
					}).catch(function(error) {
						console.log(error)
					})
			},
			showinfo() {
				axios.get('http://localhost:1111/inforMation/show')
					.then(response => {
						var result = response.data
						if(undefined != result) {
							result.forEach((e, index) => {
								if(index < 10) {
									this.info1.push(e)
								} else {
									this.info2.push(e)
								}
							})
						}
					}).catch(function(error) {
						console.log(error)
					})
			},
			showled() {
				axios.get('http://localhost:1111/knowLege/show')
					.then(response => {
						this.leibie = response.data
						console.log(this.liebie)
					}).catch(function(error) {
						console.log(error)
					})
			}
		}
	}
</script>