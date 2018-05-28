
import Vue from 'vue'
import Router from 'vue-router'
//购买页面
import ShopPage from '@/components/GoToShopPage'
//循环内容表单
import ContentLabel from "@/components/LoopContentLabel"
//我的订单
import MyOrder from "@/components/MyOrders"
//全部商品
import AllCommodity from "@/components/ShopAllCommodity"
//评价
import Evaluate from "@/components/ShopEvaluate"
//商家资质
import Qualification from "@/components/ShopQualification"



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'homepage',
        component: ContentLabel,
        redirect: '/index',
        children: [
          {
            path: '/index',
            name: 'index',
          },
        ]
      },
      {
        path: '/shoppage/:id',
        name: 'shoppage',
        component: ShopPage,
        children: [
          {
          path: '/shoppage/:id/allcommodity',
          name: 'allcommodity',
          component: AllCommodity,
          },
        {
          path: 'evaluate',
          name: 'evaluate',
          component: Evaluate,
        },
        {
          path: '/shoppage/:id/qualification',
          name: 'qualification',
          component: Qualification
        }
        ]
      },
      {
        path: '/MyOrder',
        name: 'myorder',
        component: MyOrder,
      },
    ]
})