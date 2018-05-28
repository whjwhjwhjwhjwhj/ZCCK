<template>
<div>
<div class="fetchtakeout-dialog ng-scope taketakeout"  id="taketakeoutgameID">
  <div class="fetchtakeout-dialog-header">
   <a href="#" class="fetchtakeout-close icon-close" v-on:click="Closetaketakeoutgame">
   </a>
   <h3>谁去拿外卖</h3>
  </div>
  <div class="fetchtakeout-dialog-body">
   <div class="fetchtakeout-wrapper">
    <h2 class="fetchtakeout-badge"></h2>
    <button class="fetchtakeout-btn">
    </button>
    <div class="fetchtakeout-rules">
    随机到最小数字的人去拿外卖
    </div>
    <div class="fetchtakeout-emptytext">
    ↓ Start
    </div>
    <ul class="fetchtakeout-list">
    </ul>
  </div>
 </div>
</div>

</div> 	
</template>

<script>
export default {
	methods: {
		Closetaketakeoutgame (){
			let taketakeoutgame_ID = document.getElementById("taketakeoutgameID");
			let masklayer_ID = document.getElementById("masklayerID");
			taketakeoutgame_ID.style.display = "none";
			masklayer_ID.style.display = "none";
		}
	}
}
</script>

<style>
.taketakeout{
	z-index: 1009;
	left: 503px;
	top: 0px;
	display: none;
}
</style>