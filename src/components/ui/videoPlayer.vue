<template>
	<div class="core-sceemer">
        <button class="shapka-btn gflscreen hidden-sm hidden-md hidden-lg" @click="showFsc">
          <span class="mdi mdi-arrow-expand"></span>
        </button>
        <vue-core-video-player
        :src="videoLink" 
        :controls="true" 
        :autoplay="false">
        </vue-core-video-player>
      </div>
</template>


<script>
import { mapGetters } from "vuex";
	export default{
		data(){
			return{
				videoPLayed: false 
			}
		},
		props: {
			videoLink: {
				type: Array,
				required: true
			}
		},
		computed: {
			...mapGetters({
		      user: "login/getUser",
		    }),
		},
		methods: {
			showFsc(){
				const vid = document.querySelector('.vcp-container video')
				vid.webkitEnterFullscreen();
			}
		},
		mounted(){
			let fscren = document.querySelector('.play-pause-layer')
			fscren.style.background = "url('http://nikitapugachev.com/text.php?email=" + this.user.user_email + "')"

			document.querySelector('.play-pause-layer').addEventListener('click', ()=>{
				const vid = document.querySelector('.vcp-container video')
				if(this.videoPLayed == false){
					vid.play();
					this.videoPLayed = true;
				}else{
					vid.pause();
					this.videoPLayed = false;
				}
			})
		}
	}
</script>
