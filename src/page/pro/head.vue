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

	.container {
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

	.region {
		float: left;
		margin-left: 14px;
		width: 80px;
		margin-top: 26px;
		height: 36px;
	}

	.nav-center {
		margin-left: 20px;
	}

	.nav-r {
		float: right;
		margin-top: 26px;
	}

	.btn1 {
		height: 36px;
		margin-left: 12px;
	}

	.ivu-menu-horizontal .ivu-menu-item,
	.ivu-menu-horizontal .ivu-menu-submenu {
		float: left;
		padding: 0 18px;
		position: relative;
		cursor: pointer;
		z-index: 3;
		transition: all .2s ease-in-out;
		border-top: 6px solid #fff;
	}

	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
		color: #51ad79;
		border-bottom: none;
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
		background-color: #51ad79;
		border-color: #51ad79;
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

	.banner {
		background: url("../../img/index-banner.png") center top no-repeat;
		height: 512px;
		background-size: cover;
	}

	.banner-main {
		width: 802px;
		padding: 24px;
		background: #272727;
		border-radius: 4px;
		opacity: 0.7;
		margin-top: 80px;
		margin: auto;
	}

	.banner-logo {
		width: 109px;
		margin: 20px auto;
	}

	.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
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
		transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
	}

	.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active {
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

	.search {
		margin: 20px 0;
		border-radius: 0 4px 4px 0;
		width: 94px;
		margin-left: -4px;
	}

	.footer {
		height: 163px;
		border-top: 5px solid #51ad79;
		background: #333333;
		margin-top: 140px;
		padding-top: 22px;
	}

	.footer-l {
		float: left;
	}

	.footer-r {
		float: right;
		color: #fff;
	}

	.footer-l ul li {
		color: #fff;
		float: left;
		padding: 0 16px;
		border-right: 1px solid #474747;
	}

	.footer-r ul li {
		color: #fff;
		float: left;
		padding: 0 16px;
		border-left: 1px solid #474747;
	}

	.footer-l div {
		color: #b4b4b4;
		padding-left: 16px;
	}

	.cardList {
		width: 1000px;
		margin: 10px auto;
		box-shadow: 2px 2px 5px #efefef, -2px -2px 5px #efefef;
	}

	.ivu-card-head {
		border-bottom: none;
	}

	.ivu-card-head h3 {
		text-align: center;
		font-size: 22px;
		font-family: normal;
		color: #000;
	}

	.cardList-content h3 {
		margin-bottom: 20px;
		padding-bottom: 15px;
		border-bottom: 1px solid #efefef;
	}

	.cardList-content h3 span {
		padding-left: 10px;
		border-left: 4px solid #51ad79;
	}

	.forgetPassWord {
		float: right;
	}

	.loginList {
		text-align: center;
	}

	.loginList li {
		display: inline-block;
		margin: 0 15px;
	}

	.loginTab .ivu-tabs-bar {
		border-bottom: 1px solid #000;
	}

	.tuijian-user {
		height: 64px;
		width: 64px;
		border-radius: 50px;
		background: url("../../img/yuijian-user.png");
		margin: 0 auto;
		margin-top: 38px;
	}

	/*big-search样式开始*/
	.top-head{
		height: 82px;
	

		padding-top: 20px;
		border-bottom: 1px solid #ccc;

	}
	.big-search{
		width: 540px;
		margin: auto;
	}
	.search-down{
		width: 676px;
		padding: 20px;

		margin: 0 auto;
		z-index: 999;
		/* position: absolute; */
		/* bottom: 0; */
		background: #ffffff;

		position: relative;
		margin-top: 16px;

	}
	.zj-search{
		height: 28px;
		border-bottom: 1px solid #4fac77;
		margin-bottom: 14px;
	}
	.zj-search ul li{
		 float: left;
		 margin-right: 16px;
		 font-size: 14px;
		 color: #333;
	 }
	.zj-search>ul>li>a{
		float: left;
		margin-right: 14px;
		font-size: 14px;
		color: #a8a8a8 !important;
	}
	.zj-search>ul>li>a:hover{

		color: #333 !important;
	}
	.search-down-t{
		height: 31px ;
		padding: 0 10px;


		line-height: 31px;
		background: #4fac77;
		color: #fff;
		font-size: 14px;
		text-align: center;
		display: inline-block;

	}
	.mar{
		margin-left: 16px;
	}
	.search-down .ivu-collapse {
		 background-color: #fff ;
		 border-radius: 3px;
		 border:none;
	}
	.zhankai{
		border-top: 1px solid #ededed;
	}
	.zhankai span{
		padding: 4px 4.4px;
		font-size: 12px;
		display: inline-block;
		vertical-align: middle;
		color: #999999;
	}
	.zhankai span:hover{
		display: inline-block;
		background: #4fac77;
		color: #fff;
		cursor: pointer;

	}
	.zhankai-main{
		border: 1px solid #ededed;
		border-radius: 4px;

	}
	.zhankai-main-l{
		width: 130px;
		text-align: center;
		border-right: 1px solid #ededed;
		padding: 30px 0;

	}
	.zhankai-main-r{

		text-align: center;
		padding: 30px 20px 10px 20px;
	}
	.zhankai-main-r ul li a {
			 display: inline-block;
			 height: 24px;
			 width: 70px;
			 float: left;
			 border-radius: 20px;
			 border: 1px solid #ededed;
			 font-size: 12px ;
			 line-height: 22px;
			 margin: 0 11px;
			 margin-bottom: 20px;



		 }
	.zhankai-main-r ul li a:hover {
		color: #fff !important;
		background: #64ba89;

		border: 1px solid #4fac77

	}
	.ivu-collapse>.ivu-collapse-item {
		border-top: none !important;

	}
	.danwei{
		border-top: 2px solid #4fac77 ;
		margin-top: -12px;
	}
	.search-up{
		height: 30px;
		border-bottom: 2px solid #4fac77;
		text-align: center;
		margin-top: 14px;

	}
	.search-up a{
		display: block;
		background: #4fac77;
		color: #fff !important;
		width: 68px;
		height: 30px;
		margin: auto;
		line-height: 30px;



	}
	.jieguo{
		width: 140px;
		height: 31px;
		line-height: 31px;
		padding: 0 8px;

		border: 1px solid rgb(185, 185, 185);
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		color: rgb(185, 185, 185);
		border-radius: 4px;
		display: inline-block;
		margin-right: 8px;


	}
	.jieguo:hover{
		cursor: pointer;

	}
	.jieguo2{

		height: 31px;
		line-height: 31px;
		padding: 0 8px;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		color: rgb(156, 156, 156);
		border-radius: 4px;
		display: inline-block;
		margin-right: 8px;


	}
	.jieguo2:hover{
		cursor: pointer;
		color: #4fac77;

	}






	/*big-search样式结束*/


</style>
<template>
	<div class="top-head">
		<div class="container">
			<div class="big-search">
				<Input v-model="value13" icon="ios-search">

				<Button slot="append" >搜索</Button>
				</Input>
			</div>

		</div>
		<div class="search-down">
			<div class="zj-search">
				<ul>
					<li>最近搜索：</li>
					<li><a href="">稻田</a></li>
					<li><a href="">水稻</a></li>
					<li><a href="">麦子</a></li>
					<li><a href="">茄子</a></li>
					<li><a href="">拖拉机</a></li>
					<li><a href="">手扶拖拉机</a></li>


				</ul>
			</div>
			<div>
				<Row style="margin-bottom: 16px">
					<Col span="2">

					<div class="search-down-t">
						地区

                    </div>
					</Col>
					<Col span="3" class="mar">
					<div>
						<Select v-model="model1" style="width:86px">
							<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</div>
					</Col>
					<Col span="3" class="mar">
					<div>
						<Select v-model="model1" style="width:86px">
							<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</div>
					</Col>
					<Col span="3" class="mar">
					<div>
						<Select v-model="model1" style="width:86px">
							<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</div>
					</Col>
					<Col span="3" class="mar">
					<div>
						<Select v-model="model1" style="width:86px">
							<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</div>
					</Col>
					<Col span="3" class="mar">
					<div>
						<Select v-model="model1" style="width:86px">
							<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</div>
					</Col>
					<Col span="3" class="mar">
					<div>
						<Select v-model="model1" style="width:86px">
							<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</div>
					</Col>

				</Row>
			</div>
			<div>
				<Collapse v-model="value1" style="margin-bottom: 12px">
					<Panel name="1">
						<div class="search-down-t">
							物种
                        </div>
						<span style=" color: #a8a8a8;margin-left: 24px">请选择物种关键字</span>
						<Button type="primary"  size="small" style="float: right;    margin-top: 8px;">展开</Button>

						<div slot="content" class="zhankai">
							<div style="padding: 12px 0">
								<span>A</span>
								<span>B</span>
								<span>C</span>
								<span>D</span>
								<span>E</span>
								<span>F</span>
								<span>G</span>
								<span>H</span>
								<span>I</span>
								<span>J</span>
								<span>K</span>
								<span>L</span>
								<span>M</span>
								<span>N</span>
								<span>O</span>
								<span>P</span>
								<span>Q</span>
								<span>R</span>
								<span>S</span>
								<span>T</span>
								<span>U</span>
								<span>V</span>
								<span>W</span>
								<span>X</span>
								<span>Y</span>
								<span>Z</span>
								<Input v-model="value4" size="small" icon="ios-search-strong" placeholder="请输入..." style="width: 108px;margin-left: 5px"></Input>
							</div>
							<div class="zhankai-main">
								<Row>
									<Col span="6" class="zhankai-main-l">
									<Tree :data="baseData" show-checkbox></Tree>
									</Col>
									<Col span="18" class="zhankai-main-r" style="width: 504px">
									<ul>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>


									</ul>
									</Col>
								</Row>
							</div>

						</div>
					</Panel>
					<Panel name="2">
						<div class="search-down-t">
							行业
                        </div>
						<span style=" color: #a8a8a8;margin-left: 24px">请选择物种关键字</span>
						<Button type="primary"  size="small" style="float: right;    margin-top: 8px;">展开</Button>

						<div slot="content" class="zhankai">
							<div style="padding: 12px 0">
								<span>A</span>
								<span>B</span>
								<span>C</span>
								<span>D</span>
								<span>E</span>
								<span>F</span>
								<span>G</span>
								<span>H</span>
								<span>I</span>
								<span>J</span>
								<span>K</span>
								<span>L</span>
								<span>M</span>
								<span>N</span>
								<span>O</span>
								<span>P</span>
								<span>Q</span>
								<span>R</span>
								<span>S</span>
								<span>T</span>
								<span>U</span>
								<span>V</span>
								<span>W</span>
								<span>X</span>
								<span>Y</span>
								<span>Z</span>
								<Input v-model="value4" size="small" icon="ios-search-strong" placeholder="请输入..." style="width: 108px;margin-left: 5px"></Input>
							</div>
							<div class="zhankai-main">
								<Row>
									<Col span="6" class="zhankai-main-l">
									<Tree :data="baseData" show-checkbox></Tree>
									</Col>
									<Col span="18" class="zhankai-main-r" style="width: 504px">
									<ul>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>


									</ul>
									</Col>
								</Row>
							</div>

						</div>
					</Panel>
					<Panel name="3">
						<div class="search-down-t">
							产品
                        </div>
						<span style=" color: #a8a8a8;margin-left: 24px">请选择物种关键字</span>
						<Button type="primary"  size="small" style="float: right;    margin-top: 8px;">展开</Button>

						<div slot="content" class="zhankai">
							<div style="padding: 12px 0">
								<span>A</span>
								<span>B</span>
								<span>C</span>
								<span>D</span>
								<span>E</span>
								<span>F</span>
								<span>G</span>
								<span>H</span>
								<span>I</span>
								<span>J</span>
								<span>K</span>
								<span>L</span>
								<span>M</span>
								<span>N</span>
								<span>O</span>
								<span>P</span>
								<span>Q</span>
								<span>R</span>
								<span>S</span>
								<span>T</span>
								<span>U</span>
								<span>V</span>
								<span>W</span>
								<span>X</span>
								<span>Y</span>
								<span>Z</span>
								<Input v-model="value4" size="small" icon="ios-search-strong" placeholder="请输入..." style="width: 108px;margin-left: 5px"></Input>
							</div>
							<div class="zhankai-main">
								<Row>
									<Col span="6" class="zhankai-main-l">
									<Tree :data="baseData" show-checkbox></Tree>
									</Col>
									<Col span="18" class="zhankai-main-r" style="width: 504px">
									<ul>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>


									</ul>
									</Col>
								</Row>
							</div>

						</div>
					</Panel>
					<Panel name="4">
						<div class="search-down-t">
							服务
                        </div>
						<span style=" color: #a8a8a8;margin-left: 24px">请选择物种关键字</span>
						<Button type="primary"  size="small" style="float: right;    margin-top: 8px;">展开</Button>

						<div slot="content" class="zhankai">
							<div style="padding: 12px 0">
								<span>A</span>
								<span>B</span>
								<span>C</span>
								<span>D</span>
								<span>E</span>
								<span>F</span>
								<span>G</span>
								<span>H</span>
								<span>I</span>
								<span>J</span>
								<span>K</span>
								<span>L</span>
								<span>M</span>
								<span>N</span>
								<span>O</span>
								<span>P</span>
								<span>Q</span>
								<span>R</span>
								<span>S</span>
								<span>T</span>
								<span>U</span>
								<span>V</span>
								<span>W</span>
								<span>X</span>
								<span>Y</span>
								<span>Z</span>
								<Input v-model="value4" size="small" icon="ios-search-strong" placeholder="请输入..." style="width: 108px;margin-left: 5px"></Input>
							</div>
							<div class="zhankai-main">
								<Row>
									<Col span="6" class="zhankai-main-l">
									<Tree :data="baseData" show-checkbox></Tree>
									</Col>
									<Col span="18" class="zhankai-main-r" style="width: 504px">
									<ul>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>
										<li><a href="">关联物种</a></li>


									</ul>
									</Col>
								</Row>
							</div>

						</div>
					</Panel>
				</Collapse>

			</div>
			<div class="danwei">
				<div style="margin-top: 16px">
					<div class="search-down-t" style="margin-right: 28px">发文单位</div>
					<Input v-model="value" placeholder="武汉市政府农业研究院" style="width: 160px;    margin-top: -4px;"></Input>
				</div>
				<div style="margin-top: 16px">
					<div class="search-down-t" style="margin-right: 28px">发文字号</div>
					<Input v-model="value" placeholder="武汉市政府农业研究院" style="width: 160px;    margin-top: -4px;"></Input>
				</div>
				<div style="margin-top: 16px">
					<div class="search-down-t" style="margin-right: 28px">文档类型</div>
					<Radio v-model="single">文件</Radio>
					<Radio v-model="single">图片</Radio>
					<Radio v-model="single">音频</Radio>
					<Radio v-model="single">视频</Radio>
				</div>



			</div>
			<div class="search-up">
				<div>
					<a href="">
						收起
                        <Icon type="arrow-up-b"></Icon>
					</a>
				</div>
			</div>
			<div style="margin-top: 20px">
				<div class="jieguo" title="发文单位：武汉市政府农业研究院">发文单位：武汉市政府农业研究院.</div>
				<div class="jieguo" title="发文单位：武汉市政府农业研究院">发文单位：武汉市政府农业研究院.</div>

				<div class="jieguo" title="发文单位：武汉市政府农业研究院">发文单位：武汉市政府农业研究院.</div>
				<div class="jieguo2">清空筛选条件</div>
				<Button type="primary"  size="small" style="float: right;    margin-top: 3px;">筛选</Button>



			</div>
		</div>

	</div>
</template>
<script>
import Qs from 'qs'
import axios from 'axios'
import $ from 'jquery'
export default {
	name: 'app',
	data() {
		return {
            baseData: [{
                expand: true,
                title: 'parent 1',
                children: [{
                    title: 'parent 1-0',
                    expand: true,
                    disabled: true,
                    children: [{
                        title: 'leaf',
                        disableCheckbox: true
                    }, {
                        title: 'leaf',
                    }]
                }, {
                    title: 'parent 1-1',
                    expand: true,
                    checked: true,
                    children: [{
                        title: '<span style="color: red">leaf</span>',
                    }]
                }]
            }],
			loginuserinfo: '',
			portal :'',
			value1: [],
            modal1: false,
			modal2: false,
			modal_loading: false,
			modal3: false,
			modal4: false,
			modal5: false,
			value: '',
			currentPage: 0,

		}
	},
//	created: function () {
//		this.$router.push('/pro/firstPage')
//		this.friends();
//        this.loginuserinfo=JSON.parse(sessionStorage.getItem("user"))
//        console.log("user="+this.loginuserinfo)
//	},
	methods: {
		pass() {
			this.modal1 = !this.modal1
		},
		logout(){
			axios.get('http://localhost:1111/login/logout')
				.then(response => {
					console.log(response.data)
				})
				sessionStorage.removeItem("user")				
				window.location.reload()
		}
	}
}
</script>