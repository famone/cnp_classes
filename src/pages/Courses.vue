<template>
	<div>

		<Inner :innerSec="innerSec" />
		
		<Courses />

		 <Faq />

	</div>	
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import Inner from '../components/Inner.vue'
import Faq from "../components/Faq.vue";
import Courses from '../components/Courses.vue'

export default{
		components: {Inner, Faq, Courses},
		computed: {
			...mapGetters({ courses: "courses/getCourses"})
		},
		data(){
			return{
				innerSec: {
					title: 'Короткие уроки',
					descr: 'Маленькие курсы позволяют в сжатые сроки освоить новый навык и <br>сразу же начать применять полученные знания на практике. Они отлично <br>подойдут как новичкам, так и тем, кто хочет продолжать <br>развиваться в новом направлении'
				}
			}
	}
	}
</script>