import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './css/reset.css';
import axios from 'axios';
import store from './store.js';

import zone from './zone.js';
import minNav from './minNav.js';

Vue.prototype.$minNav = minNav;
Vue.prototype.$zone = zone;
Vue.use(VueRouter);
Vue.use(iView);

axios.defaults.withCredentials = true;

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
	console.log("path="+to.path)
	const path1=to.path
	if(path1=='/pro/member'||path1=='/myWorries/myAuthentiacation'){
		const user=sessionStorage.getItem('user');
		console.log("user="+user)
		if(null==user){
			alert("请先登录！")
			next({ path: '/pro/firstPage' });
		}else{
			next()
		}
	}else{
		next()
	}
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
	store: store,
    render: h => h(App)
});