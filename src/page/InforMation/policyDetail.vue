<style scoped >
    .loginTab .ivu-tabs-bar {
        border-bottom: 1px solid #000;
    }

    .header{
        margin-top:15px;
    }
    .banner-logo{
        float:left;
        width:110px;
        margin:0 46px;
    }
    .btnReset{
        background:#4fac77;
        border:1px solid #4fac77;
    }
    .search{
        margin-left:-5px;
        border-radius:0 5px 5px 0;
    }
    .resultList li{
        margin-top:20px;
    }
    .resultList-title{
        margin-bottom:15px;
    }
    .resultList-title span{
        font-size:20px;
        margin-right:20px;
        color:#333;
    }
    .searchTip{
        font-size:12px;
        color:#999;
    }
    .resultList-img, .resultList-infor{
        float:left;
    }
    .resultList-infor{
        width:480px;
        margin-left:14px;
    }
    .resultList-infor p{
        font-size:14px;
        color:#666;
        line-height:20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .resultList-infor div{
        margin-top:8px;
        font-size:14px;
        color:#333;
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
    .footPager{
        margin-top:20px;
    }
    .login-r{
        position:absolute;
        top:0;
        right:44px;
    }
    button.login{
        margin-left:13px;
    }
    .borderLine{
        position: relative;
        top:36px;
        border-bottom:1px solid #ccc;
    }
    .searchList{
        margin-left:0px !important;
        margin-top: 20px;
    }
    .listLeft{
        width:640px;
        margin-right:130px;
        float:left;
    }
    /**资讯样式*/
    .zx-title{
        font-size:20px;
        margin-bottom:10px;
        color:#333;
    }
    .zx-time{
        margin-bottom:30px;
    }
    .zx-time span{
        margin-right:30px;
        font-size:12px;
        color:#999;
    }
    .zx-content{
        line-height:26px;
        font-size:16px;
        color:#666;
        text-indent:2em;
    }
    .zanBtn{
        width:140px;
        height:50px;
        margin:30px auto;
    }
    .zanBtn button span{
        margin-right:5px;
        font-size:16px;
        color:#4fac77;
    }
    .zanIcon{
        position:relative;
        top:5px;
        display:inline-block;
        width:22px;
        height:22px;
        background:url("../../img/zan-icon.png") no-repeat;
    }
    .loginTip{
        width:564px;
        height:80px;
        background: #f8f8f8;
        border:1px solid #e3e3e3;
    }
    .loginTip div{
        width:140px;
        height:40px;
        margin:20px auto;
        font-size:14px;
        color:#666;
    }
    .loginTip div button{
        margin-right:6px;
    }
    .userComment-list li{
        padding-bottom:35px;
        margin-top:25px;
        border-bottom:1px solid #ccc;
    }
    .userComment img,.userComment div{
        float:left;
    }
    .userComment img{
        margin-right:10px;
    }
    .userComment-infor span{
        font-size:14px;
        color:#333;
    }
    .userComment-infor p{
        margin-top:5px;
        font-size:12px;
        color:#999;
    }
    .userComment-content{
        margin:22px 0;
        font-size:16px;
        color:#333;
    }
    .comment span{
        margin-right:36px;
        cursor:pointer;
    }
    .comment img{
        position: relative;
        top:5px;
        margin-right:10px;
    }
    .xgzx{
        font-size:14px;
        color:#333;
        margin-bottom:10px;
        font-weight:normal;
    }
    .zx-time span.zx-right{
        float:right;
    }
    .jubao{
        float:right;
        margin-top:10px;
        padding-right:20px;
        background:url("../../img/jubao-icon.png") right center  no-repeat;
    }
    .marginTop{
        margin:32px 0;
    }
    .CommentTab{
        position: relative;
    }
    .CommentBars{
        position:absolute;
        right:0;
        top:5px;
        font-size:16px;
        color:#333;
    }
    .CommentBars span{
        color:#ff602f;
    }
    .replyContent{
        margin-left:48px;
    }
    .replyContent li{
        border-bottom:1px dashed #ccc;
        padding-bottom:0;
    }
    .replyContent p{
        color:#333;
        font-size:14px;
    }
    .replyName{
        font-size:14px;
        color:#3194d0;
    }
    .replyTime{
        margin:14px 0;
        color:#999;
        font-size:12px;
    }
    .replyTime div{
        float:right;
    }
    .replyTime div span{
        margin-left:30px;
    }
    .replyTime div img{
        position: relative;
        top:4px;
        margin-right:5px;
    }
    .jietu{
        margin:15px 0;
    }
    .jietu img{
        margin-right:16px;
        padding:5px;
        border:1px solid #ccc;
        border-radius:5px;
    }
    .jubao-list button{
        width:90%;
        margin-bottom:20px;
    }
    .jubao-list button.activeEle{
        color:#4fac77;
        border:1px solid #4fac77;
    }
    .container .ivu-col-span-3{
        width:10%;
    }
    .shouchang{
        float:left;
        margin-top:10px;
        padding-left:20px;
        background:url("../../img/xqsc.png") left  center  no-repeat;
        margin-right: 12px;
    }
    .love{
        float:left;
        margin-top:10px;
        padding-left:20px;
        background:url("../../img/love.png") left center  no-repeat;
    }
     .ivu-col-span-7{
        width:initial;
    }
</style>
<template>
    <div class="searchModal">
        <div class="header">
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
                        <Badge count="3" style="margin-top:30px;float: right;margin-right: 20px">
                            <a href="#" class="demo-badge">
                                <Icon type="ios-bell" size="22" style="color: #51ad79"></Icon>
                            </a>
                        </Badge>
                        </Col>
                    </Row>
                </div>
            </header>
        </div>
        <div class="container">
            <div class="searchList">
                <div style="margin-bottom: 30px;">
                <Breadcrumb separator=">">
                    <Breadcrumb-item href="/pro/firstPage">首页</Breadcrumb-item>
                    <Breadcrumb-item href="/pro/policyList?flag=2">政策</Breadcrumb-item>
                    <Breadcrumb-item>正文</Breadcrumb-item>
                </Breadcrumb>
                </div>
                <Row>
                    <i-col class="listLeft">
                        <h3 class="zx-title">{{title}}</h3>
                        <div class="zx-time clear">
                            <span>{{createTime}}</span>
                            <span>{{source}}</span>
                            <span>浏览次数：{{browseNumber}}</span>
                            <span class="zx-right">编辑：{{editer}}</span>
                        </div>
                        <div v-html="content"></div>
                        <div >
                            <div @click="collect" class="shouchang">
                                收藏
                            </div>
                            <div @click="follow" class="love">
                                关注
                            </div>
                            <div  @click="modal1 = true" class="jubao">
                                举报
                            </div>
                            <div class="zanBtn" v-if="Numberofpoints == ''">
                                <Button @click="upvote" shape="circle"><span class="zanIcon"></span><span>赞</span><span>|</span><span > {{thumbUpNum}}</span></Button>
                            </div>
                            <div class="zanBtn" v-else>
                                <Button @click="upvote" shape="circle"><span class="zanIcon"></span><span>赞</span><span>|</span><span v-html="Numberofpoints"> </span></Button>
                            </div>
                        </div>
                        <h3 class="xgzx">
                            上一篇： <a @click="goToPrevious(previousId)">{{previousTitle}}</a>
                        </h3>
                        <h3 class="xgzx">下一篇：<a @click="goToPrevious(nextId)">{{nextTitle}}</a></h3>
                        <div class="marginTop">
                            <Row>
                                <i-col span="2">
                                    <img src="../../img/user-icon.png"/>
                                </i-col>
                                <i-col span="21" class="loginTip" v-if="user == null">
                                    <div>
                                        <Button type="success"  class="btnReset">登录</Button>后发表评论
                                </div>
                                </i-col>
                            </Row>
                        </div>
                        <div class="CommentTab">
                            <span class="CommentBars"><span>{{tote}}</span>评论</span>
                            <Tabs value="name1">
                                <Tab-pane label="最新评论" name="name1">
                                    <ul class="userComment-list" v-if="list != null">
                                        <li v-for=" item in list">
                                            <div class="userComment clear">
                                                <img src="../../img/user-icon2.png">
                                                <div class="userComment-infor">
                                                    <span>{{item.userName}}</span>
                                                    <p>{{item.createTime}}</p>
                                                </div>
                                            </div>
                                            <p class="userComment-content">{{item.content}}</p>
                                            <div class="comment">
                                                <span  @click="dianzan(item.id)" ><img src="../../img/zan-icon1.png"  />赞{{item.thumbUpNum}}</span>
                                                <span @click="show(item.id)"><img src="../../img/huifu-icon.png"/>回复</span>
                                            </div>
                                            <div :id="item.id"  style="display: none">
                                                <Input  v-model="huifu" type="textarea"  placeholder="请输入..." style="width: 100%;margin: 30px 0px 10px 0;"></Input>
                                                <Button type="primary" size="small" style="float:right;margin-bottom:20px" @click="reply(item.id)">发送</Button>
                                            </div>
                                            <ul class="replyContent" >
                                                <li v-for="info in item.list">
                                                    <p><span class="replyName">{{info.userName}}:</span>{{info.content}}</p>
                                                    <div class="replyTime clear">
                                                        <span>{{info.createTime}}</span>
                                                        <div>
                                                            <span @click="dianzan(info.id)" ><img src="../../img/zan-icon1.png"  />赞{{info.thumbUpNum}}</span>
                                                            <span @click="show(info.id)"><img src="../../img/huifu-icon.png"/>回复</span>
                                                        </div>
                                                    </div>
                                                    <div :id="info.id"  style="display: none">
                                                        <Input  v-model="huifu" type="textarea"  placeholder="请输入..." style="width: 100%;margin: 30px 0px 10px 0;"></Input>
                                                        <Button type="primary" size="small" style="float:right;margin-bottom:20px" @click="reply(info.id)">发送</Button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                     <ul class="userComment-list"  v-else>
                                        <li>
                                            <div class="comment">
                                                <span><img src="../../img/huifu-icon.png"/>回复</span>
                                            </div>
                                            <div  v-if="user != null">
                                                <Input  v-model="huifu" type="textarea"  placeholder="请输入..." style="width: 100%;margin: 30px 0px 10px 0;"></Input>
                                                <Button type="primary" size="small" style="float:right;margin-bottom:20px" @click="reply(0)">发送</Button>
                                            </div>
                                        </li>
                                    </ul>
                                </Tab-pane>
                                <Tab-pane label="我的评论" name="name2" v-if="user != null">
                                    <ul class="userComment-list">
                                        <li v-for=" item in myComments">
                                            <div class="userComment clear">
                                                <img src="../../img/user-icon2.png">
                                                <div class="userComment-infor">
                                                    <span>{{item.userName}}</span>
                                                    <p>{{item.createTime}}</p>
                                                </div>
                                            </div>
                                            <div class="replyTime clear">
                                                <span  class="userComment-content">{{item.content}}</span>
                                                <div>
                                                    <span><img src="../../img/zan-icon1.png"  />赞{{item.thumbUpNum}}</span>
                                                </div>
                                            </div>
                                            <ul class="replyContent" >
                                                <li v-for="info in item.list">
                                                    <p><span class="replyName">{{info.userName}}:</span>{{info.content}}</p>
                                                    <div class="replyTime clear">
                                                        <span>{{info.createTime}}</span>
                                                        <div >
                                                            <span  ><img src="../../img/zan-icon1.png"  />赞{{info.thumbUpNum}}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </Tab-pane>
                            </Tabs>
                        </div>
                    </i-col>
                    <i-col class="xg-content">
                        <div>
                            <h3>相关应用</h3>
                            <ul class="search-xgyy clear">
                                <li>
                                    <img  src="../../img/xgyy-icon1.png"/>
                                    <div>物种百科</div>
                                </li>
                                <li>
                                    <img  src="../../img/xgyy-icon2.png"/>
                                    <div>物种资讯</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>相关专家</h3>
                            <ul class="search-xgyy clear">
                                <li>
                                    <img  src="http://www.ns51.cn/upload/userimg/experts/hbxy/%E7%99%BD%E6%A1%82%E8%90%8D.jpg"/>
                                    <div>白桂萍</div>
                                </li>
                                <li>
                                    <img  src="http://www.ns51.cn/upload/userimg/experts/hbxy/%E4%BB%98%E6%B8%85%E8%8F%8A.jpg"/>
                                    <div>付清菊</div>
                                </li>
                                <li>
                                    <img  src="http://www.ns51.cn/upload/userimg/experts/hbxy/%E6%A2%81%E6%B8%85%E5%BF%97.jpg"/>
                                    <div>梁清志</div>
                                </li>
                                <li>
                                    <img  src="http://www.ns51.cn/upload/userimg/experts/hbaas/%E6%9D%A8%E8%87%AA%E6%96%87.jpg"/>
                                    <div>杨自文</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>相关企业</h3>
                            <ul class="search-xgyy clear">
                                <li>
                                    <img  src="../../img/xgqy-icon1.png"/>
                                    <div>58同城</div>
                                </li>
                                <li>
                                    <img  src="../../img/xgqy-icon2.png"/>
                                    <div>智联招聘</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>相关搜索</h3>
                            <ul class="search-xgyy clear">
                                <li>
                                    <img  src="../../img/xgss-icon1.png"/>
                                    <div>水稻收割机</div>
                                </li>
                            </ul>
                        </div>
                    </i-col>
                </Row>
            </div>

        </div>
        <!--举报的弹框-->
        <Modal v-model="modal1">
            <p slot="header" style="text-align:center;">举报</p>
            <div>
                <Row class="jubao-list">
                    <i-col span="8" v-for="btn in btnlist"><Button :class="{activeEle:active}" @click="addActive($event,btn.text)">{{btn.text}}</Button></i-col>
                </Row>
                <div>
                    <h3>截图证明</h3>
                    <div class="jietu">
                        <img src="../../img/jietu-icon.png"/>
                        <img src="../../img/jietu-add.png"/>
                    </div>
                </div>
                <div>
                    <h3>举报详情</h3>
                    <textarea  v-model="jubaoDetail" rows="5" style="width:100%;border-radius:5px;margin-top:15px;"></textarea>
                </div>
            </div>
            <div slot="footer" style="text-align:center;">
                <Button type="primary" shape="circle" class="btnReset" style="width:200px;height:50px;" @click="submit">举报</Button>
                <span>取消</span>
            </div>
        </Modal>
    </div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
var text = "";
export default {
    created() {
        this.fetchData()
        this.findComment()
        this.myComment()
    },
    data() {
        return {
            loginuserinfo: JSON.parse(sessionStorage.getItem("user")),
            portal :'',
            theme1: 'light',
            currentPage: 1,
            pageSize: 10,
            total: 0,
            content: '',
            replyContent: false,
            modal1: false,
            active: false,
            list: [],
            myComments: [],
            Numberofpoints: '',
            thumbUpNum: '',
            tote: '',
            title: '',
            label:'',
            createTime: '',
            source: '',
            browseNumber: '',
            isReport: '',
            editer: '',
            previousId: '',
            previousTitle: '',
            nextId: '',
            nextTitle: '',
            btnlist: [
                { text: '垃圾广告' },
                { text: '色情淫秽' },
                { text: '政治反动' },
                { text: '钓鱼诈骗' },
                { text: '网络敲诈' }
            ],
            jubao: {
                type: '',
                link: '',
                description: ''
            },
            myfavorite:{
                type:'',
                link:'',
                title:''
            },
            myfollow:{
                type:'',
                link:'',
                label:''
            },
            policyComment: {
                postId: '',
                informationDetailId: '',
                content: ''
            },
            user: sessionStorage.getItem("user")
        }
    },
    mounted: function () {
        var oBox = $('#demo')
        var demoHtml = $(oBox).html().slice(0, 198) + '...'
        $(oBox).html(demoHtml)
    },
    methods: {
        fetchData: function () {
            this.list = []
            axios.get('http://localhost:1111/policy/findPolicyDetail?id=' + this.$route.query.id)
                .then(response => {
                    this.content = response.data.content
                    this.title = response.data.title
                    this.createTime = response.data.createTime
                    this.source = response.data.source
                    this.browseNumber = response.data.browseNumber
                    this.editer = response.data.editer
                    this.thumbUpNum = response.data.thumbUpNum
                    this.previousTitle = response.data.previousTitle
                    this.nextTitle = response.data.nextTitle
                    this.previousId = response.data.previousId
                    this.nextId = response.data.nextId
                    this.label = response.data.label
                }).catch(function (error) {
                    console.log(error)
                })
        },
        findComment() {
            axios.get('http://localhost:1111/policy/findPolicyComment/' + this.currentPage + '?id=' + this.$route.query.id + '&pageSize=' + this.pageSize)
                .then(response => {
                    this.list = response.data.list.list
                    this.tote = response.data.tote
                }).catch(function (error) {
                    console.log(error)
                })
        },
        myComment() {
            if (this.user) {
                axios.get('http://localhost:1111/policy/findMyComment/' + this.currentPage + '?id=' + this.$route.query.id + '&pageSize=' + this.pageSize)
                    .then(response => {
                        this.myComments = response.data.myComment
                    }).catch(function (error) {
                        console.log(error)
                    })
            }
        },
        upvote() {
            axios.get('http://localhost:1111/policy/upvote?id=' + this.$route.query.id)
                .then(response => {
                    this.flag = response.data.flag
                    this.number = response.data.number
                    if (this.flag == '1') {
                        this.Numberofpoints = "&nbsp;" + this.number
                    }
                }).catch(function (error) {
                    console.log(error)
                })
        },
        pageChange: function (event) {
            alert(event)
        },
        reply(id) {
            axios({
                method: 'post',
                url: 'http://localhost:1111/policy/saveHuiFu',
                data: {
                    postId: id,
                    informationDetailId: this.$route.query.id,
                    content: this.huifu
                }
            }).then(response => {
                this.flag = response.data.flag
                if (this.flag == '1') {
                    this.findComment()
                    this.huifu = ""
                    $("#" + id).find("textarea").val("")
                    $("#" + id).hide()
                }
            }).catch(function (error) {
                alert("回复失败!");
                console.log(error)
            })
        },
        dianzan(id) {
            axios.get('http://localhost:1111/policy/saveZan?id=' + id)
                .then(response => {
                    if (response.data.flag == '1') {
                        var div = $("#" + id).prev()
                        $.each($(div).find("span"), function (i, span) {
                            var txt = $(span).text()
                            if (txt.indexOf("赞") > -1) {
                                var html = $(span).html()
                                html = html.replace(txt, "")
                                $(span).html(html + "赞" + response.data.thumbUpNum)
                            }
                        })
                    }
                }).catch(function (error) {
                    console.log(error)
                })
        },
        addActive: function (event, value) {
            text = value;
            var btnDom = event.currentTarget
            btnDom.active = !btnDom.active
        },
        show(id) {
            if(this.loginuserinfo!=null){
                $.each($(".CommentTab div"), function (i, obj) {
                    if (obj.id) {
                        $(obj).hide()
                    }
                })
                if (this.user != '') {
                    $("#" + id).show()
                }
            }else{
                alert("请先登录！")
            }

        },
        submit() {
            axios({
                method: 'post',
                url: 'http://localhost:1111/report/saveReport',
                data: {
                    type: text,
                    link: this.$route.fullPath,
                    description: this.jubaoDetail
                }
            }).then(response => {
                this.flag = response.data.flag
                if (this.flag == '1') {
                    alert("举报成功!")
                    this.modal1 = false;
                }
            }).catch(function (error) {
                alert("举报失败!");
                console.log(error)
            })
        },
        collect(){
            if(this.loginuserinfo!=null){
                axios({
                    method: 'post',
                    url: 'http://localhost:1111/report/saveCollect',
                    data: {
                        type: 'policy',
                        link: this.$route.fullPath,
                        title:this.title
                    }
                }).then(response => {
                    this.flag = response.data.flag
                    if (this.flag == '1') {
                        alert("收藏成功!")

                    }else{
                        alert("已收藏!");
                    }
                }).catch(function (error) {
                    alert("收藏失败!");
                    console.log(error)
                })
            }else{
                alert("请先登录！")
            }

        },
        follow(){
            if(this.loginuserinfo!=null){
                axios({
                    method: 'post',
                    url: 'http://localhost:1111/report/saveFollow',
                    data: {
                        type: 'inforMation',
                        link: this.$route.fullPath,
                        label:this.label
                    }
                }).then(response => {
                    this.flag = response.data.flag
                    if (this.flag == '1') {
                        alert("关注成功!")

                    }else{
                        alert("已关注!");
                    }
                }).catch(function (error) {
                    alert("关注失败!");
                    console.log(error)
                })
            }else{
                alert("请先登录！")
            }

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
        },
         goToPrevious(id){
             axios.get('http://localhost:1111/policy/findPolicyDetail?id=' + id)
                .then(response => {
                    this.content = response.data.content
                    this.title = response.data.title
                    this.createTime = response.data.createTime
                    this.source = response.data.source
                    this.browseNumber = response.data.browseNumber
                    this.editer = response.data.editer
                    this.thumbUpNum = response.data.thumbUpNum
                    this.previousTitle = response.data.previousTitle
                    this.nextTitle = response.data.nextTitle
                    this.previousId = response.data.previousId
                    this.nextId = response.data.nextId
                    this.label = response.data.label
                }).catch(function (error) {
                    console.log(error)
            })
        }
    }
}
</script>