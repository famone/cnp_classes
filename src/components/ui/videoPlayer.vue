<template>
	<div class="core-sceemer">
		<div class="watermark"></div>
  <!--       <button class="shapka-btn gflscreen  hidden-md hidden-lg" @click="showFsc">
          <span class="mdi mdi-arrow-expand"></span>
        </button> -->
        <vue-core-video-player
        :src="videoLink" 
        :controls="true" 
        :autoplay="false">
        </vue-core-video-player>
      </div>
</template>



<!-- <div class="vue-core-video-player-control">
	<div class="btn-control btn-fullscreen">
		<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20"><g fill="#fff"><g data-name="6 7"><g data-name="4 1"><path data-name="7" d="M16 0h10v2H16z"></path><path data-name="8" d="M26 0h2v6h-2z"></path></g><g data-name="5 1"><path data-name="9" d="M18 18h10v2H18z"></path><path data-name="10" d="M26 14h2v6h-2z"></path></g></g><g data-name="6 8"><g data-name="4 1"><path data-name="7" d="M12 20H2v-2h10z"></path><path data-name="8" d="M2 20H0v-6h2z"></path></g><g data-name="5 1"><path data-name="9" d="M10 2H0V0h10z"></path><path data-name="10" d="M2 6H0V0h2z"></path></g></g></g></svg>
	<div class="tips">Во весь экран</div>
</div>
</div> -->


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
			let watmark = document.querySelector('.watermark')

			prgrs.style.overflow = 'inherit!important'

			fscren.style.background = "url('http://nikitapugachev.com/text.php?email=" + this.user.user_email + "')"
			watmark.style.background = "url('http://nikitapugachev.com/text.php?email=" + this.user.user_email + "')"

			document.querySelector('.play-pause-layer').addEventListener('click', ()=>{
				const vid = document.querySelector('.vcp-container video')
				if(this.videoPLayed == false){
					vid.play();
					this.videoPLayed = true;
				}else{
					vid.pause();
					this.videoPLayed = false;
				}
			});
			document.querySelector('.watermark').addEventListener('click', ()=>{
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

<style>
	.core-sceemer{
		position: relative;
	}
	.watermark{
		position: absolute;
		top:calc(50% - 15%);
		left: 0;
		background-color: red;
		opacity: .2;
		content: '';
		width: 100%;
		height: 30%;
		z-index: 2000;
		background-repeat: no-repeat!important;
		background-position: center!important;
		background-size: 70%!important;
		background-color: none!important;
	}
	.volume-control .btn-control-panel .progress{
		overflow: inherit!important;
	}
	.volume-control .btn-control-panel .progress .volume-current .thumb-drag{
		opacity: 1!important;
	}
	.volume-control .btn-control-panel .progress:hover{
		overflow: visible!important;
	}
</style>
