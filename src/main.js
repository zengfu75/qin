import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./static/index.less";
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

Vue.use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path === "" || to.path === "/") {
    next("/pc/login");
  } else if (to.matched.length == 0) {
    next("/pc/errorinfo/notfound")
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
