<template>
<div>
	 <!-- v-on:mouseover="showhovercontent($event)" v-on:mouseout="noshowhovercontent($event)" -->
	 <div class="ng-scope">
      <div class="container clearfix ng-scope">
        <div class="location">
          <span>当前位置:</span>
          <span class="location-current">
            <a class="inherit ng-binding" href="#">
            成都环球中心天堂洲际大饭店</a>
          </span>
          <span class="location-change">
            <a hardjump="" href="/home">[切换地址]</a>
            <ul class="dropbox location-dropbox">
              <li class="arrow"></li>
              <li class="changelocation">
                <a href="/home">修改收货地址
                  <span class="icon-location"></span>
                </a>
              </li>
            </ul>
          </span>
          <span></span>
        </div>
        <div class="place-search">
          <!-- a:ng-attr-ubt-data-keyword="{{searchText}}" -->
          <a class="place-search-btn icon-search" title="搜索商家或美食"></a>
          <label for="globalsearch">搜索商家或美食</label>
          <input id="globalsearch" class="place-search-input ng-pristine ng-valid" placeholder="搜索商家,美食...">
          <div class="searchbox">
            <div class="searchbox-list searchbox-rstlist ng-hide">
              <ul><!-- ngRepeat: restaurant in searchRestaurants | orderBy: [ '-is_opening', 'order_lead_time' ] | limitTo: 5 --></ul>
            </div>
            <div class="searchbox-list searchbox-foodlist ng-hide">
              <ul><!-- ngRepeat: food in searchFoods  | limitTo: 5 --></ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Who's going to take a takeout 谁去拿外卖-->
      <takeTakeout></takeTakeout>
      <div class="container ng-scope">
        <onetwoLevelmenu v-on:ziSetData="fuSetData"></onetwoLevelmenu>
				<div class="place-rstbox clearfix">
				<contentLabelContent v-bind:ziGetData="fuGetData"></contentLabelContent>
				</div>

      </div>
    </div>
    <!-- 嵌套 -->
    <router-view></router-view>

</div>
</template>

<script>
//循环 第一表单、第二表单 的Vue文件
import onetwoLevelmenu from "@/components/LoopOneTwoLevelMenu.vue"
//导入 谁去拿外卖
import takeTakeout from "@/components/TakeTakeout.vue"
//导入  中间内容
import contentLabelContent from "@/components/LoopContentLabelContent.vue"
export default {
	components: {
		onetwoLevelmenu,
    takeTakeout,
    contentLabelContent,
	},
	data() {
    return {
      // itemid:{
      //   one:{id:'1'},
      //   two:{id:'2'},
      //   three:{id:'3'},
      //   four:{id:'4'},
      //   five:{id:'5'},
      //   six:{id:'6'},
      //   seven:{id:'7'},
      //   eight:{id:'8'},
      // },
      fuGetData: '',
    }
  },
  methods: {
   fuSetData(acceptedThings) {
    this.fuGetData = acceptedThings;
    // console.log(acceptedThings)
    // alert(this.levelMenuContent)
    // if(this.levelMenuContent === item.oneLevelMenuType) {
    //   return this.isShowContent= true
    // };
    // if(this.levelMenuContent !== item.oneLevelMenuType) {
    //   return this.isShowContent= false
    // };
   }
  },
}
</script>

<style>
.contentlabelhover{
	position: absolute;
	left: 295.5px;
	top: 0px;
	width: 295px;
}
</style>