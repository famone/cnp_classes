<template>

<div>
	<FilterBox />

	<section id="mylessons" v-if="courses">
			<div class="container-fluid">
				<div class="rowsd devider">
					<courseBox v-for="course in courses" :course="course" />
				</div>
				<!-- show more -->
					
				<button class="show-more" v-if="this.$route.path !== '/'">Показать еще</button>

				<div class="col-lg-12 text-center" v-else>
					<router-link tag="a" to="/courses" class="easy-link">
						Смотреть все курсы
					</router-link>
				</div>
		</div>
		</section>

</div>	

</template>

<script>
import courseBox from '../components/ui/courseBox.vue'
import {mapGetters, mapState} from 'vuex'
import FilterBox from '../components/ui/FilterBox.vue'

	export default{
		components: {courseBox, FilterBox},
		computed: {
			...mapGetters({ courses: "courses/getCourses"})
		}
	}
</script>