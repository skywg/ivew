
import proIndex from './page/pro/index'
import searchList from './page/search/searchList'
import firstPage from './page/pro/firstPage'

//搜索功能
import zixun from './page/search/InforMation.vue'
import zhengce from './page/search/policy.vue'
import zhishi from './page/search/knowledge.vue'
import zixunList from './page/search/InforMation.vue'
import zhengceList from './page/search/policy.vue'
import zhishiList from './page/search/knowledge.vue'
import zhuangjiaList from './page/search/expert.vue'
import memberSearch from './page/search/memberSearch.vue'

import memberIndex from  './page/member/member.vue'
//import daili from './page/member/daili.vue'

//我的无忧
import selfperson from './page/myWorries/selfPerson.vue'
import myAuthentiacation from  './page/myWorries/myAuthentication.vue'
import personalInformation from './page/myWorries/personalInformation.vue'
import customTag from './page/myWorries/customTag.vue'
import myStyle from './page/myWorries/myStyle'



import inforMation from './page/InforMation/InforMation.vue'
import findInforMationDetail from './page/InforMation/InforMationDetail.vue'
import policy from './page/InforMation/policy.vue'
import policyDetail from './page/InforMation/policyDetail.vue'
import knowledge from './page/InforMation/knowledge.vue'
import knowledgeDetail from './page/InforMation/knowledgeDetail.vue'
import expertDetail from './page/InforMation/expertDetail.vue'

import enterpriseDetail from './page/InforMation/enterpriseDetail.vue'

//企业注册
import corpRegister from './page/corpInfo/corpRegister.vue'
//机关注册
import govRegister from './page/corpInfo/govRegister.vue'

//圈子
import circle from './page/circle/indexCircle.vue'
import circleDetail from './page/circle/circleDetail.vue'

//應用中心
import center from './page/centers/indexCenter.vue'

//机关详情
import departmentDetail from './page/InforMation/departmentDetail.vue'


//商城
import good from './page/good/indexGood.vue'

//更多head
import summary from './page/pro/list.vue'
//资讯
import inforMationList from './page/pro/inforMationList.vue'
//政策
import policyList from './page/pro/policyList.vue'
//知识
import knowledgeList from './page/pro/knowledgeList.vue'
//产品
import productList from './page/pro/productList.vue'
//企业
import enterpriseList from './page/pro/enterpriseList.vue'
//机关
import departmentList from './page/pro/departmentList.vue'
//专家
import expertList from './page/pro/expertList.vue'
//实名认证
import identification  from './page/identification/identification.vue'
import certification01  from './page/identification/certification.vue'
import certification02  from './page/identification/certification01.vue'
import certification03  from './page/identification/certification02.vue'
import certification04  from './page/identification/certification02_1.vue'
import certification05  from './page/identification/certification03_1.vue'
import certificationSec06  from './page/identification/certificationSec03.vue'
import certificationSec07  from './page/identification/certificationSec003.vue'
import certification06  from './page/identification/certification03.vue'
import certification07  from './page/identification/certification003.vue'
import certification08  from './page/identification/certification03_2.vue'

import certification09  from './page/identification/certification03_6.vue'
import certification10  from './page/identification/certification03_7.vue'
import certification11  from './page/identification/certification03_5.vue'

import certification12  from './page/identification/certification03_3.vue'
import certification13  from './page/identification/certification03_4.vue'
import certification14  from './page/identification/certification03_8.vue'
import certification15  from './page/identification/certification03_9.vue'
import certification16  from './page/identification/certification03_10.vue'
import certification17  from './page/identification/certification03_11.vue'
import certification18  from './page/identification/certification03_12.vue'

import certification19  from './page/identification/certification04_1.vue'
import certification20  from './page/identification/certification04_2.vue'
import certification21  from './page/identification/certification04_3.vue'
import certification22  from './page/identification/certification05_1.vue'
import certification23  from './page/identification/certification05.vue'
import certificationSec23  from './page/identification/certificationSec05.vue'
import certification24  from './page/identification/certification05_2.vue'
import certification25  from './page/identification/certification05_3.vue'

import certification26  from './page/identification/certification05_4.vue'
import certification27 from './page/identification/certification05_5.vue'
import certification28  from './page/identification/certification05_6.vue'
import certification29  from './page/identification/certification05_7.vue'
import certification30  from './page/identification/certification05_8.vue'
import certification31  from './page/identification/certification05_9.vue'
import certification32  from './page/identification/certification05_10.vue'
import certification33  from './page/identification/certification6_1.vue'

// 公用导航开始
import head from './page/pro/head.vue'

// 商城
import mallIndex from './page/mall/index'
import ypAuction from './page/mall/ypAuction'
import hotGroupBuy from './page/mall/hotGroupBuy'
import fixPriceProduct from './page/mall/fixPriceProduct'
import stock from './page/mall/stock'
import newPresell from './page/mall/newPresell'
import ascend from './page/mall/ascend'
import hotGroupBuyDetail from './page/mall/hotGroupBuyDetail'
import fixPriceProductDetail from './page/mall/fixPriceProductDetail'
import ypAuctionDetail from './page/mall/ypAuctionDetail'
import newPresellDetail from './page/mall/newPresellDetail'
import stockDetail from './page/mall/stockDetail'
import ascendDetail from './page/mall/ascendDetail'

// 公用导航开始结束

import top from './top.vue'

   const  router=[
       {
           path: '/',
           component: proIndex,
           children:[
               {path:'/pro/firstPage',component:firstPage
               }
           ]
       },
       {path:'/pro/head',component:head},
       {path:'/top',component:top},
       //{path:'/pro/daili',component:daili},
       {path:'/pro/member',component:memberIndex,
	       children:[
	       //第一次认证路由
	       		{path:'step1',component:certification01},
	         	{path:'step2',component:certification02},
	         	{path:'step3',component:certification03},
	         	{path:'step4',component:certification04},
	         	{path:'step5',component:certification05},
	         	{path:'step6',component:certification06,
	         		children:[
	         		{path:'step7',component:certification07,
	         			children:[
				         	{path:'step8',component:certification08},
				         	{path:'step9',component:certification09},
				         	{path:'step10',component:certification10},
				         	{path:'step11',component:certification11},
				         	{path:'step12',component:certification12},
				         	{path:'step13',component:certification13}
	         			]},
	         			{path:'step14',component:certification14},
			         	{path:'step15',component:certification15},
			         	{path:'step16',component:certification16},
			         	{path:'step17',component:certification17},
			         	{path:'step18',component:certification18}
	         		]},


	         	{path:'step19',component:certification19},
	         	{path:'step20',component:certification20},
	         	{path:'step21',component:certification21},
	         	{path:'step22',component:certification22},
	         	{path:'step23',component:certification23,
	         		children:[
			         	{path:'step24',component:certification24},
			         	{path:'step25',component:certification25},
			         	{path:'step26',component:certification26},
			         	{path:'step27',component:certification27},
			         	{path:'step28',component:certification28},
			         	{path:'step29',component:certification29},
			         	{path:'step30',component:certification30},
			         	{path:'step31',component:certification31},
			         	{path:'step32',component:certification32}
	         		]},

	         	{path:'step33',component:certification33},



	         	//第二次认证路由
	         	{path:'progress1',component:certification01},
	         	{path:'progress2',component:certification02},
	         	{path:'progress3',component:certification03},
	         	{path:'progress4',component:certification04},
	         	{path:'progress5',component:certification05},
	         	{path:'progress6',component:certificationSec06,
	         		children:[
	         			{path:'progress7',component:certificationSec07,
	         				children:[
	         					{path:'progress8',component:certification08},
					         	{path:'progress9',component:certification09},
					         	{path:'progress10',component:certification10},
					         	{path:'progress11',component:certification11},
					         	{path:'progress12',component:certification12},
					         	{path:'progress13',component:certification13}
			         		]},
			         		{path:'progress14',component:certification14},
				         	{path:'progress15',component:certification15},
				         	{path:'progress16',component:certification16},
				         	{path:'progress17',component:certification17},
				         	{path:'progress18',component:certification18}
	         		]},
	         	{path:'progress19',component:certification19},
	         	{path:'progress20',component:certification20},
	         	{path:'progress21',component:certification21},
	         	{path:'progress22',component:certification22},
	         	{path:'progress23',component:certificationSec23,
	         		children:[
			         	{path:'progress24',component:certification24},
			         	{path:'progress25',component:certification25},
			         	{path:'progress26',component:certification26},
			         	{path:'progress27',component:certification27},
			         	{path:'progress28',component:certification28},
			         	{path:'progress29',component:certification29},
			         	{path:'progress30',component:certification30},
			         	{path:'progress31',component:certification31},
			         	{path:'progress32',component:certification32}
	         		]},

	         	{path:'progress33',component:certification33}
	       ]
       },

       //我的无忧
       {path:'/myWorries',component:selfperson,
           children:[
                {path:'myAuthentiacation',component:myAuthentiacation},
                {path:'personalInformation',component:personalInformation},
                {path:'customTag',component:customTag},
                {path:'myStyle',component:myStyle,
                // children:[
                // 	{path:'/myWorries/addPhoto',component:addPhoto},
                // 	{path:'/myWorries/createPhoto',component:createPhoto},
                // ]
            	},
           ]
       },
       //搜索
       {path: '/search', component: searchList,
           children:[
               {path:'InforMation',component:zixun},
               {path:'policy',component:zhengce},
               {path:'knowledge',component:zhishi},
               {path:'expert',component:zhuangjiaList},
               {path:'memberSearch',component:memberSearch}

           ]
       },

       {path: '/searchList', component: searchList,
           children:[
               {path:'InforMation',component:zixunList},
               {path:'policy',component:zhengceList},
               {path:'knowledge',component:zhishiList}

           ]
       },
       {path: '/InforMation/findInforMationDetail', component: findInforMationDetail},
       {path: '/InforMation/policy', component: policy},
       {path: '/InforMation/policyDetail', component: policyDetail},
       {path: '/InforMation/knowledge', component: knowledge},
       {path: '/InforMation/knowledgeDetail', component: knowledgeDetail},
       {path: '/InforMation/expertDetail', component: expertDetail},
       {path: '/enterprise/detail', component: enterpriseDetail},

       {path:'/departmentDetail',component:departmentDetail},
       //圈子
       {path: '/circle', component: circle},
       {path:'/circleDetail',component:circleDetail},


       {path: '/center', component: center},
       // 产品
       {path: '/mall/index', component: mallIndex},
       {path: '/mall/ypAuction', component: ypAuction},
       {path: '/mall/hotGroupBuy', component: hotGroupBuy},
       {path: '/mall/fixPriceProduct', component: fixPriceProduct},
       {path: '/mall/stock', component: stock},
       {path: '/mall/newPresell', component: newPresell},
       {path: '/mall/ascend', component: ascend},
       {path: '/mall/hotGroupBuyDetail', component: hotGroupBuyDetail},
       {path: '/mall/fixPriceProductDetail', component: fixPriceProductDetail},
       {path: '/mall/ypAuctionDetail', component: ypAuctionDetail},
       {path: '/mall/newPresellDetail', component: newPresellDetail},
       {path: '/mall/stockDetail', component: stockDetail},
       {path: '/mall/ascendDetail', component: ascendDetail},

       {path:'/corpInfo/corpRegister',component:corpRegister},

	    {path:'/good',component:good},

       {path:'/corpInfo/govRegister',component:govRegister},
       {path:'/pro',component:summary,
           children:[
                   {path:'inforMationList',component:inforMationList},
                   {path:'policyList',component:policyList},
                   {path:'knowledgeList',component:knowledgeList},
                   {path:'productList',component:productList},
                   {path:'enterpriseList',component:enterpriseList},
                   {path:'departmentList',component:departmentList},
                   {path:'expertList',component:expertList}
           ]},

      ];

export default router ;