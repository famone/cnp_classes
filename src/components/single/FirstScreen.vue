<template>
	<section id="firstScreen">
		<div class="container text-center wow fadeIn floatdiv">
			<img src="../../assets/img/logotype.svg" alt="">
			<h1>Онлайн площадка по <br>обучению видео</h1>
			<p class="white-txt big-white">
				Никакой скучной теории, сами снимаем, сами рассказываем...
			</p>
		</div>
	</section>
</template>


<script>
	export default{
		mounted(){

			if (document.documentElement.clientWidth <= 672) {
				return
			}else{
				const scene2 = this.$scrollmagic.scene({
				triggerElement: '#firstScreen',
			    triggerHook: 0,
			    duration: '100%'
				})

				.setTween('.floatdiv', { 
			      css: { 
			        transform: 'translateY(300px) scale(.8)',
			        opacity: '0'
			      }
			    })

			    this.$scrollmagic.addScene(scene2)
			}

		}
	}
</script>


<style>
	#firstScreen{
		height: calc(100vh - 60px);
		background: radial-gradient(50% 50% at 50% 50%, #1C1C1C 0%, #111111 78.2%);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.floatdiv{
		opacity: 1;
	}
</style>