import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

	actions: {
		checkAge({
			commit
		}, obj) { //这个obj就是需要的参数，这个blur事件经过validator包装后的参数。随后的就跟官网上的一样了，随意写。
			console.log(typeof obj.value)
			if(!obj.value) {
				obj.cb(new Error('年龄不能为空'))
			} else if(typeof obj.value != 'number') {
				obj.cb(new Error('年龄必须为数字'))
			} else {
				if(obj.value > 100) {
					obj.cb(new Error("年龄要打破记录了"))
				} else if(obj.value < 0) {
					obj.cb(new Error('年龄小了点，无法接受'))
				} else {
					obj.cb()
				}
			}
			commit('dd')
		},

		//工商执照注册号
		checkCorp({
			commit
		}, obj) { //这个obj就是需要的参数，这个blur事件经过validator包装后的参数。随后的就跟官网上的一样了，随意写。
			console.log(typeof obj.value)
			if(!obj.value) {
				obj.cb(new Error('工商执照注册号不能为空'))
			} else {
				var corp = /^\d{15}/;
				if(!corp.test(obj.value)) {
					obj.cb(new Error('请填写正确的工商执照注册号！'))
				}
			}
			commit('dd')
		},
		//统一社会信用代码
		checkCredit({
			commit
		}, obj) { //这个obj就是需要的参数，这个blur事件经过validator包装后的参数。随后的就跟官网上的一样了，随意写。
			console.log(typeof obj.value)
			if(!obj.value) {
				obj.cb(new Error('统一社会信用代码不能为空'))
			} else {
				var credit = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}/g;
				if(!credit.test(obj.value)) {
					obj.cb(new Error('请填写正确的统一社会信用代码！'))
				}
			}
			commit('dd')
		},
		//手机号
		checkModle({
			commit
		}, obj) { //这个obj就是需要的参数，这个blur事件经过validator包装后的参数。随后的就跟官网上的一样了，随意写。
			console.log(typeof obj.value)
			if(!obj.value) {
				obj.cb(new Error('手机号不能为空'))
			} else {
				var modle = /^1(3|4|5|7|8)\d{9}$/;
				if(!modle.test(obj.value)) {
					obj.cb(new Error('请填写正确的手机号！'))
				}
			}
			commit('dd')
		},
		//座机号
		checkPhone({
			commit
		}, obj) { //这个obj就是需要的参数，这个blur事件经过validator包装后的参数。随后的就跟官网上的一样了，随意写。
			console.log(typeof obj.value)
			if(!obj.value) {
				obj.cb(new Error('座机号不能为空'))
			} else {
				var phone = /^0\d{2,3}-[1-9]\d{6,7}$/;
				if(!phone.test(obj.value)) {
					obj.cb(new Error('请填写正确的座机号！'))
				}
			}
			commit('dd')
		},
		//邮箱
		checkEmail({
			commit
		}, obj) { //这个obj就是需要的参数，这个blur事件经过validator包装后的参数。随后的就跟官网上的一样了，随意写。
			console.log(typeof obj.value)
			if(!obj.value) {
				obj.cb(new Error('邮箱不能为空'))
			} else {
				var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
				if(!email.test(obj.value)) {
					obj.cb(new Error('请填写正确的邮箱！'))
				}
			}
			commit('dd')
		},
		//身份证
		checkIdentification({
			commit
		}, obj) { //这个obj就是需要的参数，这个blur事件经过validator包装后的参数。随后的就跟官网上的一样了，随意写。
			console.log(typeof obj.value)
			if(!obj.value) {
				obj.cb(new Error('身份证号码不能为空'))
			} else {
				var identification = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/
				if(!identification.test(obj.value)) {
					obj.cb(new Error('请填写正确的身份证号码！'))
				}
			}
			commit('dd')
		}
	},
	state: {
		certification: {
			name: '',
			idcard: '',
			code: '',
			phone: '',
			city: []
		},
		settingColumn: {
			columnName: '',
			columnid: '',
			security: ''
		},
		baseck:{
			content:null,
			content1:null,
		},
		phone:{
			content:null,
			content1:null,
		},
		education:null
		,
		work:null
		,
		plant:null,
		honor:null,
		political:{
			content:null,
			content1:null,
		}
		,
		religion:{
			content:null,
			content1:null
		},
		account:{
			name:null,
			idcard:null,
			phone:null,
			bank:null,
			pwd:null,
			secpwd:null
		},
		app:{
			agent:null,
			level:null
		},
		column:[],
		friends:[],
		treeData:''



	},
	mutations: {
		dd(){},
		showUserName(state, certification) {
			state.certification=certification;
		},
		saveContent(state,con){
			state.baseck=con;
		},
		savePhone(state,con){
			state.phone=con;
		},
		saveEducation(state,con){
			state.education=con;
		},
		saveWork(state,con){
			state.work=con;
		},
		savePlant(state,con){
			state.plant=con;
		},
		saveHonor(state,con){
			state.honor=con;
		},
		savePolitical(state,con){
			state.political=con
		},
		saveReligion(state,con){
			state.religion=con
		},
		saveAccount(state,account){
			state.account=account;
		},
		//应用设置
		saveApp(state,agent){
			state.app=agent;
		},
		//栏目设置
		saveColumn(state,column){
			state.column=column;
		},
		//好友分组
		saveFriends(state,friend){
			state.friends=friend;
		},
		saveTree(state,tree){
			state.treeData=tree
		}


	},
	getters: {
    getCertification: state => {
      return state.certification;
    },
    getContent:state=>{
    	return state.baseck;
    },
    getPhone:state=>{
    	return state.phone;
    },
    getEducation:state=>{
    	return state.education;
    },
    getWork:state=>{
    	return state.work;
    },
    getPlant:state=>{
    	return state.plant;
    },
     getHonor:state=>{
    	return state.honor;
    },
    getAccount:state=>{
    	return state.account;
    },
    getApp:state=>{
    	return state.app;
    },
    getColumn:state=>{
    	return state.column;
    },
     getFriend:state=>{
    	return state.friends;
    },
    getPolitical:state=>{
    	return state.political
    },
    getReligion:state=>{
    	return state.religion
    },
    getTree:state=>{
    	return state.treeData
    }
  }
})