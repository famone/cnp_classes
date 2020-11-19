<template>
	<section id="firstScreen">
		<div class="container text-center wow fadeIn floatdiv">
			<img src="../../assets/img/logotype.svg" class="h-50">
			<h1 class="super-big">Больше, чем школа <br>видеомейкинга</h1>
			<p class="white-txt big-white">
				Практика в чистом виде
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
			        transform: 'scale(.8)',
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