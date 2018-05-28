<template>
<div>
<div class="shopmenu ng-isolate-scope" display-type="shop.displayType" filter-data="shop.filter" ng-if="shopAction === 'menu'" perf-click="desktop/201" shop-cache="shopCache" shop-menu="">
<div class="shopmenu-nav ng-isolate-scope" ng-show="!loading && !searchEnv" sticky="" sticky-body-class="shopmenu-nav-sticky" sticky-class="sticky" sticky-fn="shopNavSticky">
<!-- ngRepeat: category in categorys -->
<a class="ng-binding ng-scope active" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
    热销
</a>
<!-- end ngRepeat: category in categorys -->
<a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
    优惠
</a>
<!-- end ngRepeat: category in categorys -->
<a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
    点餐前必看
</a>
<!-- end ngRepeat: category in categorys -->
<a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
    鸡排
</a>
<!-- end ngRepeat: category in categorys -->
<a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
    台湾手抓饼一一推出
</a>
<!-- end ngRepeat: category in categorys -->
<a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
    小吃
</a>
<!-- end ngRepeat: category in categorys -->
<a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
    炸鸡ps肉串
</a>
<!-- end ngRepeat: category in categorys -->
<a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
    超值套餐
</a>
<!-- end ngRepeat: category in categorys -->
<a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
    饮料
</a>
<!-- end ngRepeat: category in categorys -->
</div>


<div class="shopmenu-main grid" style="margin-top: 0px;">
<!-- ngIf: filterData === 'default' && !searchEnv -->
<div class="ng-scope"> 
    <!-- end ngRepeat: category in categorys -->
    <div class="shopmenu-list clearfix ng-scope">
        <h3 class="shopmenu-title ng-binding">
            鸡排
            <span class="shopmenu-des ng-binding">
                外酥里嫩。。。超好吃吃。。
            </span>
        </h3>
        <!-- ngRepeat: food in category.foods -->
        <div class="shopmenu-food ng-isolate-scope" v-for="food in content">
            <!-- ngIf: food.image_path -->
            <span class="col-1 ng-scope">
                <a>
                    <img src="//fuss10.elemecdn.com/1/03/dd9be4d635392598737159f639026jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85"/>
                </a>
            </span>
            <!-- end ngIf: food.image_path -->
            <div class="col-2 shopmenu-food-main">
                <h3 class="shopmenu-food-name ui-ellipsis ng-binding">
                    {{food.name}}
                </h3>
                <p class="color-mute ui-ellipsis ng-binding">
                    {{food.introduction}}
                </p>
                <p>
                    <div class="starrating icon-star ng-isolate-scope">
                        <span class="icon-star" v-bind:style="food.star">
                        </span>
                    </div>
                    <span class="color-mute ng-binding">
                        ({{food.pf}})
                    </span>
                    <span class="color-mute ng-binding">
                        月售{{food.add}}份
                    </span>
                </p>
            </div>
            <span class="col-3 shopmenu-food-price color-stress ng-binding">
              {{food.price}}
                <small class="ng-binding">
                  {{food.qisong}}起
                </small>
                <!-- ngIf: food.min_purchase && food.min_purchase > 1 -->
            </span>
            <span class="col-4">
                <div class="ng-isolate-scope">
                    <!-- ngIf: !menuFood.hasSpec -->
                    <!-- ngIf: menuFood.hasSpec -->


                    <div class="shop-cartctrl ng-scope" v-if="isShow">
                    <button class="ctrl minus" v-on:click="amountReduce(food)">-</button>
                    <input class="ctrl quantity ng-pristine ng-valid" min="1" v-bind:value="food.number">
                    <button class="ctrl plus" v-on:click="amountIncrease(food)">+</button>
                    </div>


                    <div class="ng-scope">
                        <button class="shop-cartbutton ng-scope ng-isolate-scope" v-on:click="addTOShopCar(food,$event)">
                            加入购物车
                        </button>
                    </div>

                    <!-- end ngIf: menuFood.hasSpec -->
                </div>
            </span>
        </div>
    </div>
</div>
<!-- end ngIf: filterData === 'default' && !searchEnv -->
<router-view></router-view>

<div class="dialog" dialog="ITEMINFO" role="dialog" style="display: none;">
    <div class="dialog-close icon-close">
    </div>
    <div class="dialog-content">
        <div class="ng-scope ng-isolate-scope">
            <div class="shop-iteminfo">
                <div class="iteminfo-imagegroup">
                    <img class="mainimage">
                        <div class="ng-hide">
                            <a class="imagegroup-ctrl icon-profile-left-arrow">
                            </a>
                            <ul class="imagelist">
                                <!-- ngRepeat: imagePath in imagesPath track by $index -->
                            </ul>
                            <a class="imagegroup-ctrl icon-profile-right-arrow">
                            </a>
                        </div>
                    </img>
                </div>
                <section class="iteminfo-info">
                    <h5 class="ng-binding" ng-bind="itemInfo.name">
                    </h5>
                    <p class="description ng-binding ng-hide">
                    </p>
                    <div class="iteminfo-cartitem">
                        <div class="iteminfo-price">
                            <span class="price">
                                <span class="yen">
                                    ¥
                                </span>
                                <span class="price ng-binding">
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="iteminfo-rate">
                        <ul class="rategroup">
                        </ul>
                        <div class=" pagination">
                            <ul>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</template>

<script>

export default {
  data() {
    return {
      isShow: true,
      content: [],
    }
  },
  created(){
    this.pageStartData()
  },
  methods: {
   pageStartData() {
    this.$http.post('/index')
    .then((val)=>{
      this.content = val.data.productList
    })
   },
    addTOShopCar(food,e) {
      e.currentTarget.parentNode.style.display = "none";
      this.$store.dispatch('addToShopcars',food);
      this.$store.dispatch('totalPrices',food.price)
    },
    //减少个数
    amountReduce(food) {
      if(food.number > 1){
        food.number--;
        this.$store.dispatch('totalPricesre',food.price)
      }
      if(food.number <= 1){
        alert("物品个数要大于1")
      }
    },
    //增加个数
    amountIncrease(food) {
      food.number++;
      this.$store.dispatch('totalPrices',food.price)
    },
  }
}
</script>

<style></style>
        
<!--         three:{id:'3'},
        four:{id:'4'},
        five:{id:'5'},
        six:{id:'6'},
        seven:{id:'7'},
        eight:{id:'8'}, -->