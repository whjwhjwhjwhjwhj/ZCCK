<template>
    <div>
        <div class="ng-isolate-scope">
            <div class="shop-cart">
                <div class="shop-cartbasket" id="shopbasket" style="top: -208px; height: auto;">
                    <div class="ng-isolate-scope">
                        <!-- ngIf: shopCart.vm.groups.length > 1 -->
                        <div class="shop-grouphead single">
                            <!-- ngIf: shopCart.vm.groups.length === 1 -->
                            <a class="icon-cart-add ng-scope">
                            </a>
                            <!-- end ngIf: shopCart.vm.groups.length === 1 -->
                            <!-- ngIf: showGuide && shopCart.vm.groups.length === 1 -->
                            <div class="shop-grouphead-row">
                                <!-- ngIf: shopCart.vm.groups.length > 1 -->
                                购物车
                                <a v-on:click="emptyShopCar">
                                  [清空]
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- ngIf: !shopCart.vm.groups[shopCart.currentGroupIndex].length -->
                    <div id="shopCarcontent">
                      <p v-for="receivecontent in shopcarcontent">
                        <span>{{receivecontent.name}}</span>
                        数量：
                        <span>{{receivecontent.number}}</span>
                        价格：
                        <span>
                        {{receivecontent.price*receivecontent.number}}元
                        <!-- *$store.state.amounts -->
                        </span>
                      </p>
                    </div>
                    <div class="shop-cartbasket-empty isShow">
                        <div class="icon-cart">
                        </div>
                        <p>加入的内容</p>
                    </div>
                    <!-- end ngIf: !shopCart.vm.groups[shopCart.currentGroupIndex].length -->
                    <!-- ngRepeat: item in shopCart.vm.groups[shopCart.currentGroupIndex] -->
                    <!-- ngIf: shopCart.packingFee -->
                </div>
                <div class="shop-cartfooter">
                    <span class="icon-cart shop-carticon">
                        <!-- ngIf: shopCart.vm.quantity > 0 -->
                    </span>
                    <!-- ngIf: shopCart.vm.quantity > 0 -->
                    <!-- ngIf: shopCart.vm.extras.length && !shopCart.vm.button.disabled -->
                    <div class="shop-cartfooter-text extras ng-binding">
                        总价格¥{{this.totalPrices}}
                    </div>

                    <button v-on:click="modal1 = true" class="shop-cartfooter-checkout ng-binding disabled">去结账喽
                    </button>

                </div>
                <div class="shop-carthelper-opener">
                </div>
                <div class="shop-carthelper ng-isolate-scope" id="shophelper">
                    <div class="shopcarhelper-title clearfix">
                        <span>
                            凑一凑
                        </span>
                        <em>
                            轻松凑满起送价
                        </em>
                        <a>
                            [ 关闭 ]
                        </a>
                    </div>
                    <div class="shopcarthelper-container ui-scrollbar-light">
                        <!-- ngRepeat: item in group track by $index -->
                    </div>
                </div>
                <div class="shop-flyitem">
                </div>
            </div>
        </div>
        <Modal v-model="modal1" title="提交订单" v-on:on-ok="ok(shopcarcontent)" v-on:on-cancel="cancel">
        <p>您的用户名</p><input type="text" v-model="username">
        <p>您的电话</p><input type="text" v-model="userphone">
        <p>您的地址</p><input type="text" v-model="useraddress">
        </Modal>
    </div>
</template>

<script>
import { mapGetters } from "Vuex"
export default {
  data() {
    return{
      modal1: false,
      username:'默认',
      userphone:'默认',
      useraddress:'默认',
    }
  },
  methods: {
    //确定
    ok (shopcarcontent) {
      console.log(shopcarcontent)
      if(shopcarcontent.length!=0){
        this.$store.dispatch('addToMyorder',shopcarcontent);
        this.$store.dispatch('addToMyorderuser',{username:this.username,userphone:this.userphone,useraddress:this.useraddress});
        for(let i=0; i<shopcarcontent.length; i++){
          console.log(shopcarcontent[i].name,shopcarcontent[i].number,shopcarcontent[i].price*shopcarcontent[i].number);
        };
        localStorage.setItem('commodity', JSON.stringify(shopcarcontent));
        localStorage.setItem('usersname', JSON.stringify(this.username));
        localStorage.setItem('usersphone', JSON.stringify(this.userphone));
        localStorage.setItem('usersaddress', JSON.stringify(this.useraddress));
        alert("共计"+this.$store.state.totalPrice+'元');
        this.$Message.info('提交成功！');
      }
      this.$store.dispatch('decrement')
      if(shopcarcontent.length==0){
        alert("购物车不能为空")
      }
    },
    //取消
    cancel () {
      this.$Message.info('你取消了你的订单！');
    },
    emptyShopCar() {
      this.$store.dispatch('decrement')
    }
  },
  computed: {
    ...mapGetters([
        'shopcarcontent',
        'totalPrices'
     ])
  }
}
</script>

<style></style>