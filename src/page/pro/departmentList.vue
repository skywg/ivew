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
		border-top: 6px solid #51ad79;
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

	.news-img{
		position: absolute;right: 0;top: 0
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
		border-bottom: 1px solid #ccc;

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

	/*企业样式开始  */
	.qiye-box{
		height: 182px;
		width: 182px;
		/*border: 1px solid #ededed;*/
		margin-right: 12px;
		margin-left: 8px;
		margin-bottom: 66px;
		padding: 0;
	}
	.qiye-box-r{
		height: 182px;
		width: 182px;
		/*border: 1px solid #ededed;*/
		margin-right: 0;
		margin-bottom: 66px;
		padding: 0;
	}
	.qiye p{
		font-size: 14px;
		text-align: center;
	}
	.qiye-box-hover{
		background: rgba(81,173,121,0.9);
		height: 182px;
		width: 182px;
		position: absolute;
		top: 0;
	}
	.qiye-box-hover h2{
		font-size: 24px;
		color: #fff;
		text-align: center;
		font-weight: normal;
		width: 80%;
		margin: auto;
		height: 50px;
		line-height: 50px;
		border-bottom: 4px solid #fff;
		margin-top: 14px;
	}
	.qiye-box-hover span{
		font-size: 14px;
		color: #fff;
		width: 70%;
		display: block;
		margin: auto;
		margin-top: 8px;
	}
	.main-nav ul li a {
		float: left;
		color: #666;
		font-size: 16px;
		margin-right: 0px;
		line-height: 20px;
	}

</style>
<template>
	<div class="container" style="margin-top: 10px">
	<div class="qiye">
		<div class="zj-mian-1">
			<div class="fenlei">
				<Row style="font-size: 14px">
					<Col span="2" class="list-title">共产党机关</Col>
					<Col span="19" class="fenlei-list">
					<ul>
						<li>
							<a href="">党委</a>
						</li>
						<li>
							<a href="">党办</a>
						</li>
						<li>
							<a href="">组织</a>
						</li>
						<li>
							<a href="">宣传</a>
						</li>
						<li class="active">
							<a href="">统战</a>
						</li>
						<li>
							<a href="">外联</a>
						</li>
						<li>
							<a href="">政法</a>
						</li>
						<li>
							<a href="">政研</a>
						</li>
						<li>
							<a href="">军委</a>
						</li>
						<li>
							<a href="">纪检</a>
						</li>
					</ul>
					</Col>
					<Col span="3" style="text-align: center ;padding: 2px">更多
					<Icon type="ios-arrow-down"></Icon>
					</Col>
				</Row>
			</div>
			<div class="fenlei">
				<Row style="font-size: 14px">
					<Col span="2" class="list-title">行政机构</Col>
					<Col span="19" class="fenlei-list">
					<ul>
						<li>
							<a href="">政府办</a>
						</li>
						<li>
							<a href="">外交</a>
						</li>
						<li>
							<a href="">国防</a>
						</li>
						<li>
							<a href="">发展</a>
						</li>
						<li>
							<a href="">教育</a>
						</li>
						<li>
							<a href="">科技</a>
						</li>
						<li>
							<a href="">工信</a>
						</li>
						<li>
							<a href="">民族</a>
						</li>
						<li>
							<a href="">公安</a>
						</li>
						<li>
							<a href="">国安</a>
						</li>
						<li>
							<a href="">监察</a>
						</li>
						<li>
							<a href="">民政</a>
						</li>

					</ul>
					</Col>
					<Col span="3" style="text-align: center ;padding: 2px">更多
					<Icon type="ios-arrow-down"></Icon>
					</Col>
				</Row>
			</div>
			<div class="fenlei">
				<Row style="font-size: 14px">
					<Col span="2" class="list-title">群团组织</Col>
					<Col span="19" class="fenlei-list">
					<ul>
						<li>
							<a href="">工会</a>
						</li>
						<li>
							<a href="">妇联</a>
						</li>
						<li>
							<a href="">共青团</a>
						</li>
						<li>
							<a href="">科协</a>
						</li>
						<li>
							<a href="">工商联</a>
						</li>
						<li>
							<a href="">残联</a>
						</li>
					</ul>
					</Col>
					<Col span="3" style="text-align: center ;padding: 2px">更多
					<Icon type="ios-arrow-down"></Icon>
					</Col>
				</Row>
			</div>
			<div class="fenlei">
				<Row style="font-size: 14px">
					<Col span="2" class="list-title">社会团体</Col>
					<Col span="19" class="fenlei-list">
					<ul>
						<li>
							<a href="">专业性团体</a>
						</li>
						<li>
							<a href="">社会性团体</a>
						</li>
					</ul>
					</Col>
					<Col span="3" style="text-align: center ;padding: 2px">更多
					<Icon type="ios-arrow-down"></Icon>
					</Col>
				</Row>
			</div>
		</div>
		<Tabs type="card" style="margin-top: 20px">
			<Tab-pane label="国家级">
				<div>
					<Row :gutter="16" style="margin-bottom: 20px">
						<Col span="6" class="qiye-box" style=" padding: 0;" v-for="d in depart.list">
						<div>
							<img src="../../img/qiye-img.png" alt="">
							<p><router-link to="/departmentDetail">{{d.govName}}</router-link></p>
						</div>
						</Col>
					</Row>
					<div class="fenye" style="">
						<Page :total='depart.total' page-size="10" show-total :current='currentPage'  @on-change="nextPage" ></Page>
					</div>
				</div>
			</Tab-pane>
			<Tab-pane label="省级">省级</Tab-pane>
			<Tab-pane label="地市级">地市级</Tab-pane>
			<Tab-pane label="县市级">县市级</Tab-pane>
			<Tab-pane label="乡镇级">乡镇级</Tab-pane>
			<Tab-pane label="村级">村级</Tab-pane>
		</Tabs>
	</div>
	</div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                depart:[],
                currentPage:1,
                pageSize:10,
                total: 0
            }
        },
        props:['data'],
        created(){
            this.show()
        },
        methods:{
            show() {
                axios.get('http://localhost:1111/govInfo/find/' + this.currentPage + "?pageSize=" + this.pageSize)
                    .then(response => {
                        this.depart = response.data;

                    })
            },
            nextPage(page) {
                this.currentPage = page;
                axios.get('http://localhost:1111/govInfo/find/' + this.currentPage + "?pageSize=" + this.pageSize)
                    .then(response => {
                        this.depart = response.data;

                    })
            }
        }
    }
</script>