import Vue from "vue";
import VueRouter from "vue-router";
import Frame from "@v/frame/Frame.vue";
import Login from "@v/user/Login.vue";
import Errorinfo from "@v/errorinfo/Errorinfo.vue";
import Notfound from "@v/errorinfo/Notfound.vue";
import logisticsList from "@v/Logistics/logisticsList.vue";
import logisticsDetail from "@v/Logistics/logisticsDetail.vue";
import wayBillList from "@v/waybill/wayBillList.vue";
import wayBillDetail from "@v/waybill/wayBillDetail.vue";

import customerList from "@v/customer/customerList.vue";
import customerDetail from "@v/customer/customerDetail.vue";

import outList from "@v/lineout/outList.vue";
import outDetail from "@v/lineout/outDetail.vue";

import reportList from "@v/report/reportList.vue";
import reportDetail from "@v/report/reportDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/pc",
    component: Frame,
    children: [
      { path: "", redirect: "/pc/login" },
      { path: "/", redirect: "/pc/login" },
      {
        path: "errorinfo",
        component: Errorinfo,
        children: [
          {
            path: "",
            redirect: "/pc/errorinfo/notfound"
          },
          {
            path: "notfound",
            name: "notfound",
            component: Notfound,
            meta:{
              title:"页面错误"
            }
          }
        ]
      },

      {
        path: "login",
        name: "login",
        component: Login,
        meta:{
          title:"登录"
        }
      },
    ]
  },
  {
    path:"/page",
    component:Frame,
    children:[
      {//物流监控   列表
        path:"wllist",
        name:"logisticslist",
        component:logisticsList,
        meta:{
          title:"物流监控",
          defaultKey:"wl"
        }
      },
      {//物流监控   明细页面
        path:"wldetail",
        name:"logisticsdetail",
        component:logisticsDetail,
        meta:{
          title:"物流监控",
          defaultKey:"wl"
        }
      },
      {   //运单管理
        path:"ydlist",
        name:"waybilllist",
        component:wayBillList,
        meta:{
          title:"运单管理",
          defaultKey:"yd"
        }
      },
      {   //运单管理 明细
        path:"yddetail",
        name:"waybilldetail",
        component:wayBillDetail,
        meta:{
          title:"运单管理",
          defaultKey:"yd"
        }
      },
      {   //考核 列表
        path:"khlist",
        name:"reportlist",
        component:reportList,
        meta:{
          title:"考核报表",
          defaultKey:"kh"
        }
      },
      {   //考核 明细
        path:"khdetail",
        name:"reportdetail",
        component:reportDetail,
        meta:{
          title:"考核报表",
          defaultKey:"kh"
        }
      },
      {   //线路超时 列表
        path:"outlist",
        name:"outlist",
        component:outList,
        meta:{
          title:"线路超时管理",
          defaultKey:"out"
        }
      },
      {   //线路超时 明细
        path:"outdetail",
        name:"outdetail",
        component:outDetail,
        meta:{
          title:"线路超时管理",
          defaultKey:"out"
        }
      },
      {   //vip客户管理 列表
        path:"vlist",
        name:"customerlist",
        component:customerList,
        meta:{
          title:"客户VIP管理",
          defaultKey:"vip"
        }
      },
      {   //vip客户管理 明细
        path:"vdetail",
        name:"customerdetail",
        component:customerDetail,
        meta:{
          title:"客户VIP管理",
          defaultKey:"vip"
        }
      },
    ]
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
