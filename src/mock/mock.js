/**
 * mock用来模拟后端数据
 */
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
// const produceNewsData = function() {
//     let articles = [];
//     for (let i = 0; i < 100; i++) {
//         let newArticleObject = {
//             title: Random.csentence(5, 30), //  Random.csentence( min, max )
//             thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//             author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//             date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//         }
//         articles.push(newArticleObject)
//     }
 
//     return {
//         articles: articles,
//         code:true
//     }
// }
 
// // Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/news/index', 'post', produceNewsData);

const generatingNumber = function () {
  let data = [];
  let stars = ['width:96%','width:80%','width:84%','width:75%','width:90%'];
  let typesone = ["全部商家","美食","快餐便当","特色菜系","异国料理","小吃夜宵","甜品饮品","果蔬生鲜","商店超市","鲜花绿植","医药健康","早餐","午餐","下午茶","晚餐","夜宵"]
  let typestwo = ['全部','简餐便当','地方菜系','小吃炸串','面食粥点','香锅冒菜','汉堡披萨','日韩料理','轻食西餐'];
  for (let i=0; i<24; i++){
    let newData = {
      name: Random.cname(3, 7), // 商店名字 
      src: Random.dataImage('70x70'), //商店链接图片 
      add: Random.integer(100,1000), // 销量
      TimeMinutes: Random.integer(15,30),// 配送时间
      id:new Date().getTime(),
      oneLevelMenuType: Random.integer(1,7),
      twoLevelMenuType: Random.pick(typestwo),
      star: Random.pick(stars),// 星星
      RMB: Random.integer(3,10),// 配送费
      trademark: Random.boolean(), // 名牌
      introduction: Random.csentence(5,7),// 商家介绍||菜品介绍
      qisong: Random.integer(0,20), // 起送价
      price:Random.integer(1,50), //商品的价格
      pf:Random.integer(30,100),
      number:1,
    }
    data.push(newData)
  }
  return {
    productList: data,
    code: true
  }
}
Mock.mock('/index','post', generatingNumber);
