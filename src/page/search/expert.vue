<style scoped>
	.layout {
		background: #fff;
	}

	/*header样式开始*/
	header {
		height: 81px;
		background: #FFFFFF;
		border-bottom: 1px solid #e7e7e7;
	}
	.container{
		width: 1196px;
		margin: 0 auto;
	}

	.header-top {
		height: 81px;
	}
	.ivu-menu-horizontal {
		height: 81px;
		line-height: 74px;
	}
	.region{
		float: left;
		margin-left: 14px;
		width: 80px;
		margin-top: 26px;
		height: 36px;

	}
	.nav-center{
		margin-left: 20px;
	}
	.nav-r{
		float: right;
		margin-top: 26px;
	}
	.btn1{
		height: 36px;
		margin-left: 12px;
	}
	.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
		float: left;
		padding: 0 18px;
		position: relative;
		cursor: pointer;
		z-index: 3;
		transition: all .2s ease-in-out;
		border-top: 6px solid #fff;
	}

	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
		color:#51ad79;
		border-bottom:none;
		/*border-top: 6px solid #51ad79;*/
		font-size: 16px;
	}
	.ivu-menu-item {
		display: block;
		outline: 0;
		list-style: none;
		font-size: 16px;
		position: relative;
		z-index: 1;
		cursor: pointer;
		transition: all .2s ease-in-out;
	}
	.ivu-menu {
		list-style: none;
		color: #657180;
		font-size: 16px;
	}
	.ivu-select-selection:hover {
		border-color: #51ad79;
	}

	.ivu-btn-primary {
		color: #fff;
		background-color:  #51ad79;
		border-color:  #51ad79;
	}
	.ivu-btn-ghost:hover {
		color: #51ad79;
		background-color: transparent;
		border-color: #51ad79;
	}
	.ivu-btn-primary:hover {
		color: #fff;
		background-color: #51ad79;
		border-color: #51ad79;
		opacity: 0.8;
	}
	.banner{
		background: url("../../img/index-banner.png") center top no-repeat;
		height: 512px;
		background-size: cover;
	}
	.banner-main{
		width: 802px;
		padding: 24px;
		background: #272727;
		border-radius: 4px;
		opacity: 0.7;
		margin-top: 80px;
		margin: auto;
	}
	.banner-logo{
		width: 109px;
		margin: 20px auto;
	}
	.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
		margin: 0;
		margin-right: 14px;
		height: 31px;
		padding: 5px 16px 4px;
		border: 1px solid #d7dde4;
		border-bottom: 0;
		border-radius: 4px 4px 0 0;
		transition: all .3s ease-in-out;
		background: #f5f7f9;
	}
	.ivu-input {
		display: inline-block;
		width: 100%;
		height: 41px;
		line-height: 1.5;
		padding: 4px 7px;
		font-size: 12px;
		border: 1px solid #d7dde4;
		border-radius: 4px;
		color: #657180;
		background-color: #fff;
		background-image: none;
		position: relative;
		cursor: text;
		transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
	}
	.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
		height: 32px;
		padding-bottom: 5px;
		background: #fd1212;
		transform: translateZ(0);
		border-color: #d7dde4;
		color: #39f;
	}

	/*header样式结束*/
	.ivu-tabs-nav .ivu-tabs-tab-active {
		color: #fff;
	}
	.search{
		margin: 20px 0;
		border-radius: 0 4px 4px 0 ;
		width: 94px;
		margin-left: -4px;
	}

	.main{
		position: relative;

	}
	.main-title{
		height: 50px;
		border-top: 1px solid #949494;
		margin-top: 72px;
	}
	.main-text{
		text-align: center;
		background: #fff;
		position: absolute;
		top: -26px;
		left: 0px;
		right: 0;
		margin: auto;
		width: 200px;
	}

	.main-title-h5{
		font-size: 34px;
		font-weight: normal;
	}
	.mian p{
		font-size: 14px;
		line-height: 36px;
	}

	/*mian*/
	.ivu-menu-dark {
		background: #fff;
	}
	.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover {
		color: #51ad79;
	}
	.nav-padding{
		float: left;
		padding: 0 48px;
		position: relative;
		cursor: pointer;
		z-index: 3;
		transition: all .2s ease-in-out;
		border-top: 6px solid #fff;
	}
	.new-tab{
		border: 1px solid #51ad79 !important;
		color:#51ad79 !important;
		float: left;
		margin-right: 6px;
	}
	.main-time{
		padding: 0 8px;
		border-left: 1px solid #ccc;
		color: #949494;
	}
	.main span{
		margin-left: 6px;
	}
	.new-last li{
		border-bottom: none !important;
		padding: 0 12px 70px 12px;
		margin-bottom: 20px;
	}
	.new-last h3{
		font-size: 18px;
		padding-bottom: 24px;
		font-weight: 400;

	}
	.new-title-h5{
		font-size: 24px;
		font-weight: normal;
	}
	.new-text{
		text-align: center;
		background: #fff;
		position: absolute;
		top: -20px;
		left: 0px;
		right: 0;
		margin: auto;
		width: 80px;
	}
	.new2 ul li{
		width: 410px;
		overflow-x: hidden;
		margin: 0 auto;
		font-size: 18px;
		border-bottom: 1px dashed #ccc;
		padding: 20px 0;
	}
	.new-more{
		width: 100%;
		height: 50px;
	}
	.new2{
		height: 609px;
		padding-top: 20px;
	}
	.top{
		padding: 10px;
		background: #51ad79;
		color: #fff;
		text-align: center;
		border-radius: 2px;
		bottom: 30px;
	}

	.footer{
		height: 163px;
		border-top: 5px solid #51ad79;
		background: #333333;
		/*margin-top: 140px;*/
		padding-top: 22px;
	}
	.footer-l{
		float: left;
	}
	.footer-r{
		float: right;
		color: #fff;
	}

	.footer-l ul li{
		color: #fff;
		float: left;
		padding: 0 16px;
		border-right: 1px solid #474747;
	}
	.footer-r ul li{
		color: #fff;
		float: left;
		padding: 0 16px;
		border-left: 1px solid #474747;
	}
	.footer-l div{
		color: #b4b4b4;
		padding-left: 16px;
	}

	.fenlei-list ul li{
		float: left;
		margin-left: 30px;
		color: #333;
		padding: 2px;
	}
	.fenlei{
		margin-bottom: 10px;
	}
	.fenlei-list ul li a{

		color: #333;
	}
	.fenlei-list ul li a :hover{
		color:#51ad79;
	}
	.list-title{
		background: #51ad79;
		text-align: center;
		padding: 2px;
		color: #fff;
	}
	.active a{
		color:#51ad79;

	}
	.zj-mian-1{
		background: #fafafa;
		padding: 14px;
		border: 1px solid #ededed;
	}
	.zj-mian-2{
		border-left: 1px solid #ffffff;
		padding-left: 1px;
		/*padding: 8px 14px 14px 14px;*/
		margin-top: 16px;
	}
	.zj-mian-2 h3{
		font-size: 18px;
	}
	.zj-mian-2 p{
		font-size: 14px;
	}
	.ivu-rate-star-full:before, .ivu-rate-star-half .ivu-rate-star-content:before {
		color: #51ad79;
	}
	.zj-kuang{
		border: 1px solid #ededed;
		padding: 8px 14px 14px 14px;
		height: 186px;
		width: 308px;
		margin: 0 6px 11px 6px;
	}

	.zj-tiao{
		position: absolute;
		bottom: 0;
		background: #fafafa;
		width: 305px;
		margin-left: -7px
	}

	.right-img{
		text-align: center;
		margin-bottom: 24px;
	}
	.lishi{
		width: 100%;
		height: 64px;
		padding: 6px;
		background: #fafafa;
		border-top: 1px solid #ededed;
		margin-top: 140px;
		position: relative;
		bottom: 0;
	}
	.box{
		float: left;
	}
	.lishi p{
		float: left;

	}
	.box ul li{
		float: left;
		margin-left: 6px;
	}
	.news-img{
		position: absolute;
		left: 0;
		top: 0;
		margin-top: 53px;
	}
	.main-nav ul li a {
		float: left;
		margin-right: 46px;
		color: #666;
		font-size: 20px;
		line-height: 50px;
		text-align: left !important;
		margin-left: -13px;

	}
	.text-min{
		height: 70px;
		width: 620px;
		text-align: left;
		margin-top: 26px;
		padding-left: 126px;
		font-size: 14px;
	}
	.text-min2{
		margin-left: 127px;

	}
	.new-last li {
		border-bottom: none !important;
		padding: 0 10px 34px 12px;
		margin-bottom: 10px;
	}
	.clear {
		clear:both;
		overflow:hidden;
	}
	.search-xgyy li{
		float:left;
		margin:26px 28px 26px 0;
		text-align:center;
	}
	.xg-content{
		float:left;
		width:300px;
		border-left:1px solid #ccc;
		padding-left:40px;
	}
	.xg-content div{
		margin-top:10px;
	}
	.main-nav ul {
		height: 130px;
	}
</style>
<template>
	<div class="zj-mian-2 zj-mian-2 layout">
		<Breadcrumb separator=">">
			<Breadcrumb-item href="/pro/firstPage">首页</Breadcrumb-item>
			<Breadcrumb-item href="/pro/expertList?flag=8">专家</Breadcrumb-item>
			<Breadcrumb-item >{{data.title}}</Breadcrumb-item>
		</Breadcrumb>
		<Row :gutter="16" style="margin-top: 30px">
			<Col span="5" style="width: 230px;float: right;border: 10px solid #fafafa">
			<h2 style="font-size: 20px;font-weight: 400;text-align: center;line-height: 62px">特邀专家</h2>
			<div class="right-img">
				<img src="../../img/timg-(4).png" alt="">
			</div>
			<div class="right-img">
				<img src="../../img/timg-(4).png" alt="">
			</div>
			<div class="right-img">
				<img src="../../img/timg-(4).png" alt="">
			</div>
			<div class="right-img">
				<img src="../../img/timg-(4).png" alt="">
			</div>
			<div class="right-img">
				<img src="../../img/timg-(4).png" alt="">
			</div>
			</Col>
			<div  v-if="data.list.list!=''">
				<div class="aaa" v-for="e in data.list.list">
					<Col span="8" class="zj-kuang">
					<div style="float: left">
						<img src="../../img/timg-(1).png" alt="">
					</div>
					<div style="float: left;margin-left: 12px;padding-top: 8px">
						<h3><router-link to="/InforMation/expertDetail">{{e.expertName}}</router-link></h3>
						<p>{{e.organaztion}}</p>
						<p>{{e.title}}</p>
						<p>擅长领域：{{e.field}}</p>
					</div>
					<br/>
					<div class="zj-tiao">
						<div style="height: 48px;">
							<span style="font-size: 14px ;line-height: 48px;padding-left: 10px">好评率：{{e.point}}%</span>
							<div style="float: right;margin-top: 9px;">
								<Rate disabled  :value="e.star"></Rate>
							</div>
						</div>
					</div>
					</Col>
				</div>
			</div>
			<div  v-else="">
				<ul>
					<li class="new-last1" style="position: relative" >
						<h3 >无搜索结果！</h3>
					</li>
				</ul>
			</div>
		</Row>
		<div class="fenye" style="margin-top: 10px;" v-if="data.list.list!=''">
			<Page :total='data.list.total' :page-size="10"  show-total :current='currentPage' @on-change="nextPage" ></Page>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
export default {
	data() {
		return {
			currentPage: 1,
			data: [],
			total: 0,
			pageSize: 10,
			valueDisabled: 5
		}
	},
    props: ['data'],
	methods: {
        nextPage(val) {
            debugger
            this.currentPage = val
            this.data = []
            this.url='http://localhost:1111/expert/findExpertTitle/' + this.currentPage + "?title=" + this.$route.query.title +"&pageSize=" + this.pageSize
            axios.get(this.url)
                .then(response => {
                    this.data = response.data
                }).catch(function (error) {
                console.log(error)
            })
        },
		expert() {
			this.$router.push({
				path: '/pro/expertList', query: { flag: 8 }
			})
		}
	}
}
</script>