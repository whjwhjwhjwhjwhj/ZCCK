/*
  这里面只用于对state的操作，不允许进行逻辑、流程、异步等操作
 */
import {
DECREMENT,
SHOPCARCONTENT,
TOTALPRICES,
TOTALPRICESRE,
ADDTOMYORDERS,
ADDTOMYORDERSUSER,
} from './types'

export default {
  //清空购物车
	[DECREMENT]: (state) => {
    state.shopcarcontent = [];
  },
  //购物车里的内容
  [SHOPCARCONTENT]: (state,data) => {
  	state.shopcarcontent.push(data);
  },
  //计算总价  增加
  [TOTALPRICES]: (state,val) => {
      state.totalPrice += val;
  },
  //计算总价  减少
  [TOTALPRICESRE]: (state,val) => {
      state.totalPrice -= val;
  },
  //把数据添加到addtomyorders中
  [ADDTOMYORDERS]: (state,val) => {
      state.addToMyorders.push(...val);
  },
  //把用户的数据赋值给addToMyordersUsers
  [ADDTOMYORDERSUSER]: (state,val) => {
      state.addToMyordersUsers = val;
  },
}