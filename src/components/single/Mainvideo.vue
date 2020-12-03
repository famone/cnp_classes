<template>
	<div class="mainVideo">
		<div class="fadebox">
	        <video src="https://nikitapugachev.com/wp-content/uploads/2020/11/fadevideo.mp4" 
	        autoplay="autoplay" 
	        loop="loop" 
	        playsinline="playsinline" 
	        muted="muted" 
	        class="bg-video__player">
			 </video>
	        <div class="col-lg-12 text-center lazer">
	        	<h1>Другой уровень контента</h1>
	        	<p class="white-txt big-white">
					Мы решили пойти своим путем и сделали уклон на визуально-практическую составляющую в нашем обучающем контенте, поэтому здесь вы не увидите скучных лекций.. Мы сами строим, пробуем, снимаем и рассказываем об этом на наших уроках и курсах! Только практика на реальных съемках и тестах: от постройки конструкций для спецэффектов до монтажа.</p>
	        </div>
		</div>
      </div>
</template>




<script>
	export default{
		mounted(){
			// 
			var tweenV = new TimelineMax()
					.from(".fadebox", 1, { opacity: 0})
					.to(".fadebox", 1, { opacity: 0, delay: 1.9});

			 const sceneV = this.$scrollmagic.scene({
				triggerElement: '.mainVideo',
			    triggerHook: 0,
			    duration: "180%",
			}).setTween(tweenV)
		    this.$scrollmagic.addScene(sceneV) 
		}
	}
</script>





<style scoped>
	.fadebox{
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		opacity: 1;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		padding-bottom: 60px;
	}
	.mainVideo{
		position: relative;
		height: 250vh;
		overflow:hidden;
		z-index: 0;
	}
	.fadebox:before {
	    display: block;
	    content: "";
	    position: absolute;
	    width: 100%;
	    height: 340px;
	    bottom: 0px;
	    background: linear-gradient(180deg, rgba(17, 17, 17, 0), #111);
	    z-index: 1;
	}
	.lazer{
		position: relative!important;
		z-index: 5!important;
		max-width: 900px;
	}
</style>