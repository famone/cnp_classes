<template>
	<div>
		<Inner :innerSec="innerSec"/>
		<Lessons />
		 <Faq />
	</div>
</template>

<script>
import Inner from '../components/Inner.vue'
import Lessons from '../components/Lessons.vue'
import Faq from '../components/Faq.vue'

export default{
	components: {Inner, Lessons, Faq},
	data(){
		return{
			innerSec: {
				title: 'Большие курсы',
				descr: 'Большие курсы позволяют в сжатые сроки освоить новый навык и <br> сразу же начать применять полученные знания на практике. Они<br> отлично подойдут как новичкам, так и тем, кто хочет продолжать<br> развиваться в новом направлении'
			}
		}
	}
}
</script>