<template>
	<div>
		<div class="place-tab clearfix container ng-scope">
   	 <div class="place-fetchtakeout ng-isolate-scope">
     	<img src="//shadow.elemecdn.com/faas/desktop/media/img/takeout.408a87.png" alt="谁去拿外卖" v-on:click="show_smallgame">
     </div>
    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			show_smallgame() {
				let taketakeoutgame_ID = document.getElementById("taketakeoutgameID");
				let masklayer_ID = document.getElementById("masklayerID");
				taketakeoutgame_ID.style.display="block";
				masklayer_ID.style.display="block";
			}
		}
	}
</script>

<style>
</style>