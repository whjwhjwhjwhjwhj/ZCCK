/*
  这里面定义所有action，也就是store的dispatch方法，用于处理接收组件传入的请求
  所有的流程控制、逻辑处理、异步操作都放在这里面进行
  通过commit提交给mutations，通过type作为两者相连的唯一通道
 */
import * as types from './types.js';
import Router from '@/router/index'
export default {
  //清空购物车
  decrement: ({ commit, state }) => {
      commit(types.DECREMENT);
  },
  //VUEX传值到子组件
  addToShopcars: ({ commit, state },data) => {
  	if (state.shopcarcontent != null) {
    	commit(types.SHOPCARCONTENT,data);  
    }
  },
  //计算总价   增加
  totalPrices: ({ commit, state },val) => {
  	commit(types.TOTALPRICES,val);
  },
  //计算总价   减少
  totalPricesre: ({ commit, state },val) => {
  	commit(types.TOTALPRICESRE,val);
  },
  //把数据添加到myorder
  addToMyorder: ({ commit, state },val) => {
  	commit(types.ADDTOMYORDERS,val);
  },
  //把user数据添加到myorder
  addToMyorderuser: ({ commit, state },val) => {
  	commit(types.ADDTOMYORDERSUSER,val);
  },
}
