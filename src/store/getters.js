/*
  这里面定义所有页面需要的展示数据，具体的内容根据具体组件要求来定义
 */
export default { 
	//返回计数器
  count: (state) => {
    return state.count;
  },
  shopcarcontent: (state) => {
  	return state.shopcarcontent;
  },
 	totalPrices: (state) => {
  	return state.totalPrice;
  },
  totalPricesre: (state) => {
  	return state.totalPrice;
  },
  addToMyorder: (state) => {
  	return state.addToMyorders;
  },
  addToMyordersUser: (state) => {
  	return state.addToMyordersUsers;
  },
}
