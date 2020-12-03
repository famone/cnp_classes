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
					descr: 'Каждый урок направлен на обучение определенному навыку или решению конкретной задачи. Ты можешь быстро набраться скиллов по съемке, постройке конструкций для спецэффектов, обработке изображения и сразу начать этим пользоваться...'
				}
			}
	}
	}
</script>