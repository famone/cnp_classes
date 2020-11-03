<template>
	<div>
		<!-- <preloader :class="{acPre : coursesNew === '' }" /> -->
		<Mainslider :courses="courses" v-if="courses !== '' " />
		
		<Courses />
		<Faq />
	</div>
</template>

<script>
import Mainslider from '../components/Mainslider.vue'
import Courses from '../components/Courses.vue'
import Faq from '../components/Faq.vue'
import axios from 'axios'
import preloader from '../components/preloader.vue'
import {mapGetters, mapState} from 'vuex'

	export default{
		components: {Mainslider, Courses, Faq, preloader},
		computed:{
			...mapState('courses', ['courses'])
		}
	}
</script>