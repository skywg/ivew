<style scoped>
    @import '../../css/circle.css';
    .ivu-col-span-2 {
        display: block;
        width: 11%;
    }
    .main-r-title2 {
    height: 50px;
    background: #f8f8f8;
    padding-top: 13px;


    /*border-bottom: 2px solid #51ad79;*/
}
    .main .main-r-title2 h4 {
        color: #333;
        font-size: 16px;
        font-weight: normal;
        padding-left: 10px;
        display: block;
    }  

</style>
<template>
    <div class="index">
        <!--header开始-->
        <header>
            <div class="container">
                <Row>
                    <Col span="4" class="region ">
                    <img src="../../img/huiyuan-logo.png" alt="">
                    </Col>
                    <Col span="10" class="nav-center" style="width:45%;">
                    <Menu mode="horizontal" :theme="theme1" active-name="/pro/member" @on-select="routeTo">
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
                       
                    </Menu>
                    </Col>
                    <Col span="7">
                    <Input v-model="value13" style="margin-top: 25px;margin-left: 60px;    width: 238px;">
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
        <!--mian开始-->
        <div class="main">
            <div class="wrapper-container">
                <div class="mianbaoxie">当前位置:  圈子>优品黄豆圈</div>
                <div class="main-top" style=" background: #fff;padding: 20px">
                    <div class="main-top-title">
                        <div style="float: right;margin-top: 6px; margin-right:1%;">
                            <Button type="success">申请加入</Button>
                        </div>
                        &nbsp;&nbsp;&nbsp;<span class="text1" style="margin-left:1%;">优品黄豆圈</span>&nbsp;&nbsp;&nbsp;
                        <span class="text2">成员:</span>
                        <span class="text3">123</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="text2">活跃值:</span>
                        <span class="text3">123</span>
                        <p class="text4" style="margin-left:1%;">来这里发表技术文章将有机会上中文站首页直接推广，还有机会上专场，参与专家红人来了等，赶紧来发帖吧</p>
                    </div>
                    <div style="margin: 10px 0"><img src="../../img/quanzi-banner.png" alt="" style="width: 98%;margin:1%;"></div>
                    <Row style="margin-left:1%;">
                        <Col span="2" v-for="m in moderator">
                        <div style="float: left">
                            <img src="../../img/mian-top-user.png" alt="">
                        </div>
                        <div style="float: left;margin-left: 10px;margin-top: 5px;">
                            <p style="font-size: 14px;color: #333">{{m.display_name}}</p>
                            <span style="font-size: 12px;color: #a6a6a6;line-height: 20px" >{{m.TYPE}}</span>
                        </div>
                        </Col>
                        <Col span="2">
                        <div style="float: left">
                            <img src="../../img/mian-top-user.png" alt="">
                        </div>
                        <div style="float: left;margin-left: 10px;margin-top: 5px;">
                            <p style="font-size: 14px;color: #333">朱建伟</p>
                            <span style="font-size: 12px;color: #a6a6a6;line-height: 20px">副版主</span>
                        </div>
                        </Col>
                        <Col span="2">
                        <div style="float: left">
                            <img src="../../img/mian-top-user.png" alt="">
                        </div>
                        <div style="float: left;margin-left: 10px;margin-top: 5px;">
                            <p style="font-size: 14px;color: #333">朱建伟</p>
                            <span style="font-size: 12px;color: #a6a6a6;line-height: 20px">副版主</span>
                        </div>
                        </Col>
                        <Col span="2">
                        <div style="float: left">
                            <img src="../../img/mian-top-user.png" alt="">
                        </div>
                        <div style="float: left;margin-left: 10px;margin-top: 5px;">
                            <p style="font-size: 14px;color: #333">朱建伟</p>
                            <span style="font-size: 12px;color: #a6a6a6;line-height: 20px">副版主</span>
                        </div>
                        </Col>
                    </Row>
                </div>             
                <Row style="margin-top: 20px">
                    <Col span="18" style="margin-right: 20px;width: 877px;">
                    <div class="main-bot" style="margin: 0;width: auto">
                    <div style="margin-bottom: 10px">
                        <Row>
                            <Col span="12">
                            <Button type="success">发表帖子</Button>
                            </Col>
                            <Col span="12" >
                            <div style="float: right">
                            <Page :total='total' page-size=2 :current='currentPage'  @on-change="nextPage"></Page>
                            </div>
                            </Col>
                        </Row>
                    </div>
                    <div class="tab-main" style="border: 1px solid #ededed">
                       <Row style="border-bottom: 1px solid #ededed;padding: 14px 0 " v-for="c in content">
                            <Col span="1" >
                            <img src="../../img/tab-title.png" alt="" style="margin: 12px 0 0 16px;">
                            </Col>
                            <Col span="19">
                            <span>{{c.title}}</span>
                            <span style="vertical-align: middle;"><img src="../../img/tu.png" alt=""></span>&nbsp;
                            <span style="vertical-align: middle;"><img src="../../img/huo.png" alt=""></span>&nbsp;
                            <span style="vertical-align: middle;"><img src="../../img/jing.png" alt=""></span>
                            <p style="font-size: 12px">{{c.content}}</p>
                            </Col>
                            <Col span="2">
                            <span style="font-size: 12px;line-height: 26px;">{{c.creatorName}}</span>
                            <p style="font-size: 12px;line-height: 26px;">{{c.createTime}}</p>
                            </Col>
                            <Col span="1">
                            <p style="font-size: 12px;line-height: 26px;">{{c.commentNum}}</p>
                            <p style="font-size: 12px;line-height: 26px;">{{c.tourNum}}</p>
                            </Col>
                        </Row>
                    </div>
					</div>
                    </Col>
                      <Col span="6">
                    <div style="margin-bottom: 20px">
                        <div class="main-r-title2">
                            <h4>达人
                            <div style="float: right;font-size: 12px" size="small" > <Page :current="2" :total="50" simple></Page></div>
                            </h4>
                        </div>
                        <div class="daren-list" style="width: auto;height: 64px">
                            <div style="padding: 14px 0;width: 100%">
                                <img src="../../img/quanzi-user1.png" alt="" style="float: left">
                                <div style="float: left;margin-top: 3px;margin-left: 10px">
                                    <p class="text2">朱建威</p>
                                    <p class="text2"><span style="margin-left: 0;color: #999999">发帖  <span style="color: #ff8b3f;">765</span></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span style="margin-left: 0;color: #999999">粉丝 <span style="color: #4fac77;">75</span></span>
                                    </p>
                                </div>
                                <Button style="float: right;margin-top: 12px" size="small">+ 关注</Button>
                            </div>
                        </div>
                        <div class="daren-list" style="width: auto;height: 64px">
                            <div style="padding: 14px 0;width: 100%">
                                <img src="../../img/quanzi-user2.png" alt="" style="float: left">
                                <div style="float: left;margin-top: 3px;margin-left: 10px">
                                    <p class="text2">朱建威</p>
                                    <p class="text2"><span style="margin-left: 0;color: #999999">发帖  <span style="color: #ff8b3f;">765</span></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span style="margin-left: 0;color: #999999">粉丝 <span style="color: #4fac77;">75</span></span>
                                    </p>
                                </div>
                                <Button style="float: right;margin-top: 12px" size="small">+ 关注</Button>
                            </div>
                        </div>
                        <div class="daren-list" style="width: auto;height: 64px">
                            <div style="padding: 14px 0;width: 100%">
                                <img src="../../img/quanzi-user1.png" alt="" style="float: left">
                                <div style="float: left;margin-top: 3px;margin-left: 10px">
                                    <p class="text2">朱建威</p>
                                    <p class="text2"><span style="margin-left: 0;color: #999999">发帖  <span style="color: #ff8b3f;">765</span></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span style="margin-left: 0;color: #999999">粉丝 <span style="color: #4fac77;">75</span></span>
                                    </p>
                                </div>
                                <Button style="float: right;margin-top: 12px" size="small">+ 关注</Button>
                            </div>
                        </div>
                        <div class="daren-list" style="width: auto;height: 64px">
                            <div style="padding: 14px 0;width: 100%">
                                <img src="../../img/quanzi-user2.png" alt="" style="float: left">
                                <div style="float: left;margin-top: 3px;margin-left: 10px">
                                    <p class="text2">朱建威</p>
                                    <p class="text2"><span style="margin-left: 0;color: #999999">发帖  <span style="color: #ff8b3f;">765</span></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span style="margin-left: 0;color: #999999">粉丝 <span style="color: #4fac77;">75</span></span>
                                    </p>
                                </div>
                                <Button style="float: right;margin-top: 12px" size="small">+ 关注</Button>
                            </div>
                        </div>
                        <div class="daren-list" style="width: auto;height: 64px">
                            <div style="padding: 14px 0;width: 100%">
                                <img src="../../img/quanzi-user1.png" alt="" style="float: left">
                                <div style="float: left;margin-top: 3px;margin-left: 10px">
                                    <p class="text2">朱建威</p>
                                    <p class="text2"><span style="margin-left: 0;color: #999999">发帖  <span style="color: #ff8b3f;">765</span></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span style="margin-left: 0;color: #999999">粉丝 <span style="color: #4fac77;">75</span></span>
                                    </p>
                                </div>
                                <Button style="float: right;margin-top: 12px" size="small">+ 关注</Button>
                            </div>
                        </div>
                    </div>
                    </Col>
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
                    <div >Copyright©2015trecare.com All Rights Reserved 版权所有TREcare
                        <br/>备案号：蜀ICP备88888888号-1</div>
                </div>
                <div class="footer-r" >
                    <ul>
                        <li>微博</li>
                        <li>微信</li>
                        <li>Support:DGG Group</li>
                    </ul>
                </div>
            </div>
        </div>
        <Back-top :height="400" :bottom="80">
            <div class="top">返回顶端</div>
        </Back-top>
        <!--footer结束-->
    </div>
</template>
<script>
import axios from 'axios'
export default {   
    data() {
        return {
            loginuserinfo: JSON.parse(sessionStorage.getItem("user")),
            portal :'',
            theme1: 'light',
            value13:'',
            pageSize: 10,
            modal2: false,
            modal_loading: false,
            modal3: false,
            modal4: false,
            modal5: false,
            content: [],
            total: 0,
            currentPage: 1,
            moderator: [],
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                ],
                methods: {
                    del() {
                        this.modal_loading = true;
                        setTimeout(() => {
                            this.modal_loading = false;
                            this.modal2 = false;
                            this.$Message.success('删除成功');
                        }, 2000);
                    }
                }
            }
        }
    },
    methods: {
        show() {
            axios.get('http://localhost:1111/CoterieArticle/circleDetail/' + this.$route.query.id + '/' + this.currentPage)
                .then(response => {
                    this.content = response.data.list
                    this.total = response.data.total;
                    console.log("圈子详情。。。")
                    console.log(this.content)
                }).catch(function (error) {
                    console.log(error)
                })
        },
        nextPage(page) {
            this.currentPage = page;
            axios.get('http://localhost:1111/CoterieArticle/circleDetail/' + this.$route.query.id + '/' + this.currentPage)
                .then(response => {
                    this.content = response.data.list;
                    this.total = response.data.total;
                    console.log("圈子详情。。。" + this.total)
                    console.log(response.total)
                    console.log(this.content)
                }).catch(function (error) {
                    console.log(error)
                })
        },
        moderators() {
            axios.get('http://localhost:1111/CoterieArticle/moderator/' + this.$route.query.id)
                .then(response => {
                    this.moderator = response.data
                    console.log("副版主。。。")
                    console.log(this.moderator)
                }).catch(function (error) {
                    console.log(error)
                })
        },
        routeTo(e) {
			if(e == '/portal'){
				this.portal = 'http://192.168.7.61:8080/ovit/center/gateway.htm?uid='+this.loginuserinfo.uniqueId
				window.open(this.portal)
			}else{
				this.$router.push(e)
			}
		},
        logout(){
            axios.get('http://localhost:1111/login/logout')
                .then(response => {
                    console.log(response.data)
                })
                sessionStorage.removeItem("user")
                this.$router.push('/pro/firstPage')
        }
    },
    created: function () {
        this.show();
        this.moderators();
    }
}
</script>
