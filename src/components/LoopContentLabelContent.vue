<template>
	<div>

		<a v-for="item in items" v-bind:class="{'liLoop': isExist}" v-on:click="goto_shoppage(item)" v-show="ziGetData == item.oneLevelMenuType ||ziGetData == 0">
          <div>

				  	<div v-bind:class="{'rstblock-logo': isExist}">
				      <img v-bind:src="item.src" v-bind:class="{'rstblock-logo-icon':isExist}">
				      <p>{{item.TimeMinutes}} 分钟</p>
				  	</div>
				    <div v-bind:class="{'rstblock-content': isExist}">
				      <p v-bind:class="{'rstblock-title': isExist}">{{item.name}}</p>
				      <p v-bind:class="{'rstblock-cost': isExist}">配送费¥{{item.RMB}}</p>
              <p v-bind:class="{'rstblock-cost': isExist}">
              </p>
				    </div>
          </div>
				</a>

	</div>
</template>

<script>
export default {
	props: ['ziGetData'],
	data() {
    return {
	  	isShowContent: {},
    	isShow: false,
      isExist: true,
      items:[],
    }
  },
	created() {
    this.pageStartData()
  },

  methods: {
  	 pageStartData() {
    this.$http.post('/index')
    .then((val)=>{
      this.items = val.data.productList
    })
   },
   goto_shoppage(item) {
   	this.$router.push({
      name: 'allcommodity',
      params: {
        id: item.id,
        item,
      }
    })
   },
  }
}

</script>

<style>
</style>
<!-- <div class="rstpopover placeleft" style="width: 294px; left: 590.5px; top: 1px;"><div class="rstpopover-arrow"></div><div class="rstpopover-title">乡村基(环球中心店)</div><div class="rstpopover-flavors"><span>简餐</span></div><ul class="rstpopover-activities"><li><i style="background:#fff;color:#999999;border:1px solid;padding:0;">票</i>该商家支持开发票，开票订单金额15元起，请在下单时填写好发票抬头 <span></span></li></ul><ul class="rstpopover-delivery"><li>配送费¥4</li><li>平均<span class="color-stress plrtiny">20</span>分钟送达</li></ul><div class="rstpopover-notice">骑手拿餐从E5旁边的工商银行环球购物中心入口进来下负一楼乡村基，尊敬的小主们，为减少您的等餐时间，大单请提前下单，感谢您的理解与支持，期待您的光临！！！</div></div> -->
