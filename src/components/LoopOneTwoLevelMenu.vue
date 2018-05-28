<template>
	<div>
      <div class="excavator container">
       	<div class="excavator-filter ng-scope">
         	<span class="excavator-filter-name">商家分类:</span>
					<a href="#" class="excavator-filter-item" v-for="(oneLevelMenu,index) in oneLevelMenus" v-on:click="showSubattribute(index,$event)" v-bind:class="{oneLevelMenuclass:index == shuzi}">{{oneLevelMenu}}
					</a>
          <div class="excavator-filter-subbox ng-hide">
          	<a href="#" class="excavator-filter-items" v-for="(twoLevelMenu,index) in this.datas.get(this.noContent)" v-on:click="showbgColor(index,$event)" v-bind:class="{twoLevelMenuclass:index == suzi}">{{twoLevelMenu}}</a>
          </div>
         </div>
        </div>
      </div>
	</div>
</template>

<script>
export default{
  data() {
    return {
      isExist: true,
      noContent: '全部商家',
      shuzi:'0',
      suzi:'0',
      // 一级菜单中循环的数据
      oneLevelMenus: ["全部商家","美食","快餐便当","特色菜系","异国料理","小吃夜宵","甜品饮品","果蔬生鲜","商店超市","鲜花绿植","医药健康","早餐","午餐","下午茶","晚餐","夜宵"],
      //二级菜单中循环的数据
      datas:new Map([
      ['全部商家',['全部','简餐便当','地方菜系','小吃炸串','面食粥点','香锅冒菜','汉堡披萨','日韩料理','轻食西餐']],
      ['美食',['全部','简餐便当','地方菜系','小吃炸串','面食粥点','香锅冒菜','汉堡披萨','日韩料理','轻食西餐']],
      ['快餐便当',['全部','简餐','米粉面馆','麻辣烫','盖浇饭','香锅砂锅','饺子馄饨','包子粥店','汉堡','黄焖鸡米饭','烧腊饭','煲仔饭','生煎锅贴','咖喱饭']],
      ['特色菜系',['全部','川湘菜','火锅烤鱼','海鲜','其它菜系','粤菜','江浙菜','新疆菜','西北菜','东北菜','云南菜']],
      ['异国料理',['全部','日韩料理','西餐','披萨意面','东南亚菜']],
      ['小吃夜宵',['全部','地方小吃','小龙虾','烧烤','鸭脖卤味','炸鸡炸串','零食']],
      ['甜品饮品',['全部','甜品','面包蛋糕','奶茶果汁','咖啡']],
      ['果蔬生鲜',['全部','水果','蔬菜豆品','肉禽蛋品','海鲜水产']],
      ['商店超市',['全部','大型超市','便利店','名酒坊','休闲零食','饮料冰品','粮油副食','茶行','美妆母婴','水站','冷冻速食','宠物超市']],
      ['鲜花绿植',['全部','鲜花','绿植']],
      ['医药健康',['全部','药店','成人用品']],
      ['早餐',['全部','米粉面馆','奶茶果汁','饺子馄饨','包子粥店','汉堡','面包','生煎锅贴']],
      ['午餐',['全部','简餐','盖浇饭','包子粥店','汉堡']],
      ['下午茶',['全部','炸鸡小吃','甜品','面包蛋糕','奶茶果汁','水果','鸭脖卤味','咖啡']],
      ['晚餐',['全部','简餐','川湘菜','地方小吃','米粉面馆','奶茶果汁','麻辣烫','盖浇饭','炸鸡炸串','汉堡','披萨意面']],
      ['夜宵',['全部','地方小吃','米粉面馆','小龙虾','烧烤','麻辣烫','炸鸡炸串','汉堡']],
      ]),              
      }
    },
    methods: {
      showSubattribute (index,e) {
        this.noContent = e.currentTarget.innerText;
        this.shuzi = index;
        this.suzi = 0;
        this.$emit('ziSetData',index)
      },
      showbgColor (index,e) {
        this.suzi = index;
        this.$emit('ziSetData',index)
      }
    }
  }
</script>

<style>
.oneLevelMenuclass{
  background: #f6f6f6;
}
.twoLevelMenuclass{
  background: #0089dc;
}
.excavator-filter-items{
  color: #666;
  display: inline-block;
  margin: 5px 6px;
  box-sizing: inherit;
  line-height: 26px;
  font-size: 14px;
}
</style>