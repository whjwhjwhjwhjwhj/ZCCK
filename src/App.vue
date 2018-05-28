<template>
<div id="app">
    <div ng-switch="state.type" state="layoutState" class="ng-isolate-scope">    
      <div ng-switch-default="" topbar-default="" state="state" class="ng-scope ng-isolate-scope">
        <header class="topbar" role="navigation" ng-class="{shoptopbar: state.type === 'shop'}">
          <div class="container clearfix">
            <h1>
              <a href="/" class="topbar-logo icon-logo">
                <span>
                饿了么
                </span>
              </a>
            </h1>
            <a v-on:click="toHomepage" class="topbar-item topbar-homepage focus">
              首页
            </a> 
            <a class="topbar-item" v-on:click="toMyOrder">
              我的订单
            </a> 
            <a class="topbar-item cooperation">
              加盟合作
            </a> 
            <a class="topbar-item cooperation">
              我的客服
            </a>
            <nav class="topbar-nav">
              <a class="topbar-nav-link">
                规则中心
              </a>
              <div class="topbar-nav-link">
                <i class="topbar-nav-icon icon-mobile">
                  
                </i>
                  手机应用
                <div class="dropbox topbar-mobile-dropbox">
                  <span>
                    扫一扫, 手机订餐更方便
                  </span> 
                  <img src="//shadow.elemecdn.com/faas/desktop/media/img/appqc.95e532.png" class="topbar-nav-qrcode" alt="扫一扫下载饿了么手机 App">
                </div>
              </div>
              <div topbar-profilebox="">
                <div class="topbar-profilebox">
                  <!-- ngIf: $root.user.avatar && $root.topbarType !== 'checkout' --> 
                  <span></span> 
                  <span>
                    <a>
                      登录/注册
                    </a>
                  </span> 
                  <span class="topbar-profilebox-wrapper ng-hide" ng-show="$root.user.username">
                    <!-- ngIf: $root.topbarType === 'checkout' --> 
                    <span class="topbar-profilebox-username ng-binding">
                      
                    </span> 
                    <!-- ngIf: $root.topbarType === 'checkout' --> <!-- ngIf: $root.topbarType !== 'checkout' -->
                    <span class="topbar-profilebox-btn icon-arrow-down ng-scope" ng-if="$root.topbarType !== 'checkout'">
                      
                    </span>
                    <!-- end ngIf: $root.topbarType !== 'checkout' -->
                    <div class="dropbox topbar-profilebox-dropbox">
                      <a class="icon-profile" href="/profile" hardjump="">
                        个人中心
                      </a> 
                      <a class="icon-star" href="/profile/favor" hardjump="">
                        我的收藏
                      </a> 
                      <a class="icon-location" href="/profile/address" hardjump="">
                        我的地址
                      </a> 
                      <a class="icon-setting" href="/profile/security" hardjump="">
                        安全设置
                      </a> 
                      <a class="icon-logout" href="JavaScript:" ng-click="logout()">
                        退出登录
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
    <div class="importantnotification container" role="banner">
      <!-- ngIf: enable -->
    </div>
    <div class="sidebar" role="complementary" ng-hide="layoutState &amp;&amp; layoutState.hideSidebar">
      <div class="sidebar-tabs">
        <div class="toolbar-tabs-middle">
          <a class="toolbar-btn icon-order toolbar-close" href="/profile/order" hardjump="" tooltip="我的订单" tooltip-placement="left" ubt-click="toolbar_order">
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
          <a class="toolbar-btn icon-notice toolbar-open modal-hide" href="JavaScript:" template="message" ng-class="{'focus': (activeTemplate === 'message' &amp;&amp; isSidebarOpen), 'toolbar-open': user, 'modal-hide': user}" tooltip="我的信息" tooltip-placement="left" ubt-click="392">
            <!-- ngIf: messageCount.count -->
              
          </a>
        </div>
        <div class="toolbar-tabs-bottom">
          <div class="toolbar-btn icon-QR-code">
            <div class="dropbox toolbar-tabs-dropbox">
              <a href="http://static11.elemecdn.com/eleme/desktop/mobile/index.html" target="_blank">
                <img src="//shadow.elemecdn.com/faas/desktop/media/img/appqc.95e532.png" alt="下载手机应用">
                <p>
                下载手机应用
                </p>
                <p class="icon-QR-code-bonus">
                即可参加分享红包活动
                </p>
              </a>
            </div>
          </div>
          <a class="toolbar-btn sidebar-btn-backtop icon-top" tooltip="回到顶部" title="回到顶部" href="JavaScript:" tooltip-placement="left" style="visibility: hidden;">
            
          </a>
        </div>
      </div>
      <div class="sidebar-content">
        <!-- ngInclude: activeTemplate ? ('/common/page/_block/sidebar/sidebar-'+ activeTemplate + '/sidebar-'+ activeTemplate + '.html') : '' -->         
      </div>
    </div>

    <!-- 路由 -->
    <router-view></router-view>
    <!-- 路由 -->

    <footer class="footer" role="contentinfo">
      <div class="container clearfix">
        <div class="footer-link">
          <h3 class="footer-link-title">
          用户帮助
          </h3>
            <a class="footer-link-item" target="_blank">
              我的客服
            </a>
        </div>
        <div class="footer-link">
          <h3 class="footer-link-title">
            商务合作
          </h3>
          <a class="footer-link-item" target="_blank">
            我要开店
          </a> 
          <a class="footer-link-item" target="_blank">
            加盟指南
          </a> 
          <a class="footer-link-item" target="_blank">
            市场合作
          </a> 
          <a class="footer-link-item" target="_blank">
            开放平台
          </a>
        </div>
        <div class="footer-link">
          <h3 class="footer-link-title">
            关于我们
          </h3>
            <a class="footer-link-item" target="_blank">
              饿了么介绍
            </a> 
            <a class="footer-link-item" target="_blank">
              加入我们
            </a> 
            <a class="footer-link-item" target="_blank">
              联系我们
            </a> 
            <a class="footer-link-item" target="_blank">
              规则中心
            </a>
          </div>
          <div class="footer-contect">
            <div class="footer-contect-item">
              24小时客服热线 : 
              <a class="inherit">
                10105757
              </a>
            </div>
            <div class="footer-contect-item">
              关注我们 :
              <div href="JavaScript:" class="icon-wechat" ubt-click="402">
                <div class="dropbox dropbox-bottom footer-contect-dropbox" ubt-visit="402">
                  <img src="//shadow.elemecdn.com/faas/desktop/media/img/wexinqc100@2x.393ade.png" alt="微信号: elemeorder">
                  <p>
                    微信号: elemeorder
                  </p>
                  <p>
                    饿了么网上订餐
                  </p>
                </div>
              </div>
              <a class="icon-weibo" target="_blank">
                
              </a>
            </div>
          </div>
          <div class="footer-mobile">
            <a target="_blank">
              <img src="//shadow.elemecdn.com/faas/desktop/media/img/appqc.95e532.png" class="footer-mobile-icon" alt="扫一扫下载饿了么手机 App">
            </a>
            <div class="footer-mobile-content">
              <h3>
                下载手机版
              </h3>
              <p>
                扫一扫,手机订餐方便
              </p>
            </div>
          </div>
          <div class="footer-copyright serif">
            <h5 class="owner">
              所有方：上海拉扎斯信息科技有限公司
            </h5>
            <p>
                增值电信业务许可证 : 
                <a target="_blank">
                  沪B2-20150033
                </a> 
                  | 
                  <a href="http://www.miibeian.gov.cn/" target="_blank">
                    沪ICP备 09007032
                  </a> 
                    | 
                  <a href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20120305173227823" target="_blank">
                    上海工商行政管理
                  </a> 
                Copyright ?2008-2018 ele.me, All Rights Reserved.互联网药品信息服务资格证书 编号：（沪）-经营性-2016-0011
              </p>
            </div>
            <div class="footer-police container">
              <a href="http://www.zx110.org/picp/?sn=310100103568" rel="nofollow" target="_blank">
                <img alt="已通过沪公网备案，备案号 310100103568" src="//shadow.elemecdn.com/faas/desktop/media/img/picp_bg.e373b3.jpg" height="30">
              </a>
            </div>
          </div>
        </footer>
        <ShoppingCar></ShoppingCar>
    <!-- <script src="//crayfish.elemecdn.com/www.ele.me/home"></script> -->
    <!-- 遮罩层  mask遮罩  layer层-->
    <div class="masklayer" id="masklayerID"></div>
    <!-- 点击谁去拿外卖显示 -->
 <!--    <div v-bind:class="{'acitved':isActived,'erroe':isError}">
    </div> -->
  </div>
</div>
</template>

<script>
//含有购物车
import ShoppingCar from "@/components/ShoppingCar"
//导入 显示小游戏 的Vue文件
import showSmallgame from "@/components/SmallGame.vue"
// //导入 鼠标悬停和鼠标离开 显示或隐藏 内容的vue文件
// import loopContentLabelHover from "@/components/loop_ContentLabel_Hover.vue"
export default{
  name: 'App',
  components: {
    showSmallgame,
    ShoppingCar,
  },
  methods: {
    toMyOrder() {
      this.$router.push({name: 'myorder'})
    },
    toHomepage() {
      this.$router.push({name: 'homepage'})
    },
  }
}
</script>

<style></style>
