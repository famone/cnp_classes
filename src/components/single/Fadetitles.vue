<template>
	<div id="fadetitles" class="hidden-xs">

		<div class="fadebox2" id="scene2"> 
			<h1 class="tit2 super-big">Короткие уроки</h1>
		</div>
		<div class="fadebox3" id="scene3"> 
			<h1 class="tit3 super-big">Полноценнные <br class="hidden-sm hidden-md hidden-lg">курсы</h1>
		</div>
		<div class="fadebox4" id="scene4"> 
			<h1 class="tit4 super-big">Лучший старт для <br> новичков</h1>
		</div>
		<div class="fadebox5" id="scene5"> 
			<h1 class="tit5 super-big">Полезно<br class="hidden-sm hidden-md hidden-lg"> для профи</h1>
		</div>
		<div class="fadebox6" id="scene6"> 
			<h1 class="tit6 super-big"> Новый контент <br> каждый месяц</h1>
		</div>
	</div>
</template>






<script>
	export default{
		mounted(){




		   //


		   var tween2 = new TimelineMax()
					.from(".tit2", 1, { transform: 'translateY(300px)' , opacity: 0})
					.to(".tit2", 1, { transform: 'translateY(-300px)', opacity: 0});

			 const scene2 = this.$scrollmagic.scene({
				triggerElement: '#scene2',
			    triggerHook: 0,
			    duration: "100%",
			}).setTween(tween2)
		    this.$scrollmagic.addScene(scene2) 


		    //

		    var tween3 = new TimelineMax()
					.from(".tit3", 1, { transform: 'translateY(300px)' , opacity: 0})
					.to(".tit3", 1, { transform: 'translateY(-300px)', opacity: 0});

			 const scene3 = this.$scrollmagic.scene({
				triggerElement: '#scene3',
			    triggerHook: 0,
			    duration: "100%",
			}).setTween(tween3)
		    this.$scrollmagic.addScene(scene3) 

		     //

		    var tween4 = new TimelineMax()
					.from(".tit4", 1, { transform: 'translateY(300px)' , opacity: 0})
					.to(".tit4", 1, { transform: 'translateY(-300px)', opacity: 0});

			 const scene4 = this.$scrollmagic.scene({
				triggerElement: '#scene4',
			    triggerHook: 0,
			    duration: "100%",
			}).setTween(tween4)
		    this.$scrollmagic.addScene(scene4)

		    //

		    var tween5 = new TimelineMax()
					.from(".tit5", 1, { transform: 'translateY(300px)' , opacity: 0})
					.to(".tit5", 1, { transform: 'translateY(-300px)', opacity: 0});

			 const scene5 = this.$scrollmagic.scene({
				triggerElement: '#scene5',
			    triggerHook: 0,
			    duration: "100%",
			}).setTween(tween5)
		    this.$scrollmagic.addScene(scene5) 

		    //

		    var tween6 = new TimelineMax()
					.from(".tit6", 1, { transform: 'translateY(300px)' , opacity: 0})
					.to(".tit6", 1, { transform: 'translateY(-300px)', opacity: 0});

			 const scene6 = this.$scrollmagic.scene({
				triggerElement: '#scene6',
			    triggerHook: 0,
			    duration: "100%",
			}).setTween(tween6)

		    this.$scrollmagic.addScene(scene6) 
		}
	}
</script>


