<template>
	<section id="short_white">
		<div class="container-fluid text-center outZoom1">
			<h1 class="super-big" style="color: #262626;">Обучающие курсы</h1>
			<p class="black-txt">
				Домашние задания, обратная связь и разбор <br> полученного результата, все это тебя ждет на наших<br> онлайн-курсах, выбирай интересную тему!
			</p>
			<router-link tag="button" to="/lessons" class="trans-btn">Смотреть все курсы</router-link>
		</div>
	</section>
</template>

<script>
	export default{
		mounted(){

			const scene1 = this.$scrollmagic.scene({
				triggerElement: '#short_white',
			    triggerHook: 1 ,
			    duration: '100%'
			})
			.setTween('#short_white', { 
		      css: { 
		        background: '#ffffff' 
		      },
		      delay: .3
		    })
		    this.$scrollmagic.addScene(scene1)


		    // 

		   if (document.documentElement.clientWidth >= 672) {
		    	const scene2 = this.$scrollmagic.scene({
				triggerElement: '#short_white',
			    triggerHook: 1 ,
			    duration: '50%'
			})
			.setTween('.outZoom1', { 
		      css: { 
		        transform: 'scale(1) translateY(0px)',
		        opacity: '1'
		      }, 
		      delay: 0.5
		    })
		    this.$scrollmagic.addScene(scene2)
		    }
		}
	}
</script>




<style>
	#short_white{
		transition: all .6s ease;
		background: #111;
		padding: 150px 0 70px 0;
	}
	.outZoom1{
		transform: scale(1.3) translateY(10px);
		opacity: 0;
	}
</style>


