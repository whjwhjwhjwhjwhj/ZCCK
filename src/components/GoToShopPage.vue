<template>
    <div>
        <div class="importantnotification container">
            <!-- ngIf: enable -->
        </div>
        <div class="sidebar ng-hide">
            <div class="sidebar-tabs">
                <div class="toolbar-tabs-middle">
                    <a class="toolbar-btn icon-order toolbar-close">
                        <!-- ngIf: sidebarCount.uncompletedOrder > 0 -->
                    </a>
                    <div class="toolbar-separator">
                    </div>
                    <a class="toolbar-cartbtn icon-cart toolbar-open">
                        购物车
                        <!-- ngIf: foodCount.count -->
                    </a>
                    <div class="toolbar-separator">
                    </div>
                    <a class="toolbar-btn icon-notice toolbar-open modal-hide">
                        <!-- ngIf: messageCount.count -->
                    </a>
                </div>
                <div class="toolbar-tabs-bottom">
                    <div class="toolbar-btn icon-QR-code">
                        <div class="dropbox toolbar-tabs-dropbox">
                            <a>
                                <img alt="下载手机应用" src="//shadow.elemecdn.com/faas/desktop/media/img/appqc.95e532.png">
                                    <p>
                                        下载手机应用
                                    </p>
                                    <p class="icon-QR-code-bonus">
                                        即可参加分享红包活动
                                    </p>
                                </img>
                            </a>
                        </div>
                    </div>
                    <a class="toolbar-btn sidebar-btn-backtop icon-top" style="visibility: hidden;" title="回到顶部">
                    </a>
                </div>
            </div>
            <div class="sidebar-content">
                <!-- ngInclude: activeTemplate ? ('/common/page/_block/sidebar/sidebar-'+ activeTemplate + '/sidebar-'+ activeTemplate + '.html') : '' -->
            </div>
        </div>
        <!-- ngView:  -->
        <div class="ng-scope">
            <div class="shopguide ng-isolate-scope">
                <div class="container">
                    <div class="shopguide-info">
                        <meta>
                            <img src="//fuss10.elemecdn.com/c/e2/e9283d5967e6334051aba4014f1a8png.png?imageMogr2/thumbnail/95x95/format/webp/quality/85">
                                <div class="shopguide-info-wrapper">
                                    <div>
                                        <h1 class="ng-binding">
                                           {{this.receivingobject.name}}
                                        </h1>
                                        <!-- ngIf: shop.tip -->
                                        <a>
                                            <!-- ngIf: isJingHua -->
                                        </a>
                                    </div>
                                    <p class="shopguide-info-rate">
                                        <div class="starrating icon-star ng-isolate-scope" title="评分4.6分">
                                           <span class="icon-star" style="width: 92%;">
                                           </span>
                                        </div>
                                        (
                                        <a class="ng-binding">
                                            {{this.receivingobject.pf}}
                                        </a>
                                        )
                                    </p>
                                    <p>
                                        <!-- ngRepeat: flavor in shop.flavor -->
                                    </p>
                                </div>
                                <div class="shopguide-info-extra">
                                    <ul>
                                        <!-- ngIf: shopRatingScore -->
                                        <li class="shopguide-extra-item shopguide-extra-compete ng-scope">
                                            <div>
                                                <h2 class="color-stress ng-binding">
                                                    {{this.receivingobject.pf}}
                                                </h2>
                                                <meta>
                                                    <meta>
                                                        <p>
                                                            综合评价
                                                            <br>
                                                                <span class="color-mute ng-binding">
                                                                    高于周边商家
                                                                </span>
                                                                <!-- ngIf: shopRatingScore.compare_rating -->
                                                                <span class="color-stress ng-binding ng-scope">
                                                                    45.0%
                                                                </span>
                                                                <!-- end ngIf: shopRatingScore.compare_rating -->
                                                            </br>
                                                        </p>
                                                    </meta>
                                                </meta>
                                            </div>
                                            <div>
                                                <p>
                                                    服务态度
                                                    <div class="starrating icon-star ng-isolate-scope" title="评分4.8分">
                                                        <span class="icon-star" style="width: 96.0132%;">
                                                        </span>
                                                    </div>
                                                    <span class="color-stress ng-binding">
                                                        4.8分
                                                    </span>
                                                </p>
                                                <p>
                                                    菜品评价
                                                    <div class="starrating icon-star ng-isolate-scope" title="评分4.4分">
                                                        <span class="icon-star" style="width: 87.0444%;">
                                                        </span>
                                                    </div>
                                                    <span class="color-stress ng-binding">
                                                        4.4分
                                                    </span>
                                                </p>
                                            </div>
                                        </li>
                                        <!-- end ngIf: shopRatingScore -->
                                        <!-- ngIf: shop.description -->
                                        <li class="shopguide-extra-item address">
                                            <p>
                                                <span class="label">
                                                    商家地址：
                                                </span>
                                                <span class="ng-binding">
                                                    成都高新区交子大道399号附115号
                                                </span>
                                                <meta>
                                            </p>
                                            <p>
                                                <span class="label">
                                                    营业时间：
                                                </span>
                                                <span class="ng-binding">
                                                    10:00-23:55
                                                </span>
                                            </p>
                                        </li>
                                        <li class="shopguide-extra-item">
                                            <p class="shopguide-extra-delivery">
                                                由
                                                <span class="ng-binding">
                                                    第一佳大鸡排（中海店）
                                                </span>
                                                提供配送服务
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </img>
                        </meta>
                    </div>
                    <div class="shopguide-server">
                        <span class="">
                            <em>
                                起送价
                            </em>
                            <em class="shopguide-server-value ng-binding">
                                {{this.receivingobject.qisong}}元
                            </em>
                        </span>
                        <span class="">
                            <em>
                                配送费
                            </em>
                            <em class="shopguide-server-value ng-binding">
                                配送费¥{{this.receivingobject.RMB}}元
                            </em>
                            <!-- ngIf: shop.delivery_mode.description -->
                        </span>
                        <span class="">
                            <em>
                                平均送达速度
                            </em>
                            <em class="shopguide-server-value ng-binding">
                                {{this.receivingobject.TimeMinutes}}分钟
                            </em>
                        </span>
                    </div>
                    <a class="shopguide-favor">
                        <!-- ngIf: isFavorShop -->
                        <!-- ngIf: !isFavorShop -->
                        <i class="icon-favorite ng-scope">
                        </i>
                        <!-- end ngIf: !isFavorShop -->
                        <!-- ngIf: isFavorShop -->
                        <!-- ngIf: !isFavorShop -->
                        <span class="ng-scope">
                            收藏
                        </span>
                        <!-- end ngIf: !isFavorShop -->
                    </a>
                </div>
            </div>
            <div class="ng-scope ng-isolate-scope">
                <div class="shopnav">
                    <div class="container clearfix">
                        <div class="shopnav-left">

                            <a class="shopnav-tab" v-for="(maink,index) in mainkeys" v-bind:key="index" v-on:click="showmainkeypage(maink)">
                                {{maink.names}}
                            </a>

                            <!-- ngIf: shopAction === 'menu' -->
                            <span class="shopnav-filter ng-scope">
                                <a class="active">
                                    默认排序
                                </a>
                                <a>
                                    评分
                                    <i class="icon-uniE02D">
                                    </i>
                                </a>
                                <a>
                                    销量
                                    <i class="icon-uniE02D">
                                    </i>
                                </a>
                                <a>
                                    价格
                                    <i class="icon-uniE02D">
                                    </i>
                                    <i class="icon-uniE02C ng-hide">
                                    </i>
                                </a>
                                <span>
                                    <a class="shopnav-filter-display icon-grid active" title="以网格形式显示菜单">
                                    </a>
                                    <a class="shopnav-filter-display icon-list" title="以列表形式显示菜单">
                                    </a>
                                </span>
                            </span>
                            <!-- end ngIf: shopAction === 'menu' -->
                        </div>
                        <div class="shopnav-search">
                            <form class="place-search ng-pristine ng-valid">
                                <button class="place-search-btn icon-search" title="搜索商家或美食">
                                </button>
                                <label for="globalsearch">
                                    搜索商家或美食
                                </label>
                                <input class="place-search-input ng-pristine ng-valid" id="globalsearch" placeholder="搜索商家,美食..."/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shopmain clearfix container ng-scope">
                <!-- router-view -->

                <router-view></router-view>

                <!-- end router-view -->
                <!-- ngIf: shopAction === 'rate' -->
                <!-- ngIf: shopAction === 'info' -->
                <div class="shopmain-right ng-isolate-scope" data="shop" shop-bulletin="">
                    <div class="shopbulletin">
                        <div class="shopbulletin-section">
                            <h3 class="shopbulletin-section-title">
                                商家公告
                            </h3>
                            <p class="shopbulletin-content ng-binding">
                                1、本店推荐使用饿了么订餐，享受本店优先配送；
2、本店针对饿了么订单用户提供专属特价美食；
3、请尽量提前40分钟下单，尤其高峰期请尽量提前1小时；
4、投诉餐厅问题，请致电饿了么市场经理电话
5、APP使用意见反馈，开店申请请致电饿了么全国客服电话10105757。
                            </p>
                            <div class="shopbulletin-delivery">
                                <h4>
                                    配送说明：
                                </h4>
                                <p class="ng-binding">
                                    配送费¥4
                                </p>
                            </div>
                            <ul class="shopbulletin-supports">
                                <!-- ngRepeat: support in shop.supports -->
                                <li class="ng-binding ng-scope">
                                    <span class="ng-binding" style="background-color: rgb(153, 153, 153);">
                                        保
                                    </span>
                                    该商户食品安全已由中国太平洋保险承保，食品安全有保障
                                </li>
                                <!-- end ngRepeat: support in shop.supports -->
                            </ul>
                            <a class="shopcomplaint">
                                举报商家
                            </a>
                        </div>
                        <div class="dialog" style="display: none;">
                            <div class="dialog-close icon-close">
                            </div>
                            <div class="dialog-content">
                                <h5 class="complaint-title ng-scope">
                                    举报商家
                                </h5>
                                <form class="ng-scope ng-pristine ng-valid">
                                    <label class="complaint-field">
                                        <textarea class="shopcomplaint-textarea ng-pristine ng-valid" cols="40" rows="6">
                                        </textarea>
                                    </label>
                                    <div class="complaint-field">
                                        <button class="btn-primary" type="submit">
                                            提交
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidetools">
                <a class="sidetools-item icon-visit-history"title="我要开店">
                </a>
                <div class="sidetools-item icon-qrcode">
                    <img alt="扫描二维码免费下载手机App" class="sidetools-qrcode" src="//shadow.elemecdn.com/faas/desktop/media/img/appqc.95e532.png"/>
                </div>
                <a class="sidetools-item icon-arrow-up" title="回到顶部">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
	export default{
		data(){
			return {
        receivingobject:'',
		    mainkeys: [{
          names:'全部商品',
          path:'allcommodity'
        },{
          names:'评价',
          path:'evaluate'
        },{
          names:'商家资质',
          path:'qualification'
        }],
			}
		},
    created() {
      this.receivingobject = this.$route.params.item;
      if(this.receivingobject !== undefined ) {
        localStorage.setItem('suju', JSON.stringify(this.receivingobject));
      };
      this.receivingobject = JSON.parse(localStorage.getItem('suju'));
    },
		methods:{
      showmainkeypage(maink) {
		    this.$router.push(maink.path)
			},
		}
	}
</script>

<style>
</style>