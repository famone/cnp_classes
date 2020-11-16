<template>

<div>
	<FilterBox />

	<section id="mylessons" v-if="courses">
			<div class="container-fluid">
				<div class="rowsd devider">
					<!-- <courseBox v-for="course in courses.slice(coursesMobile)" :course="course" v-if="coursesMobile" /> -->
					<courseBox v-for="course in courses.slice(0, coursesMobile)" :course="course" />
				</div>
				<!-- show more -->
					
				<button class="show-more" v-if="this.$route.path !== '/'">Показать еще</button>

				<div class="col-lg-12 text-center" v-else>
					<router-link tag="a" to="/courses" class="easy-link">
						Смотреть все уроки
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
			...mapGetters({ courses: "courses/getCourses"}),
			coursesMobile(){
				if (document.documentElement.clientWidth <= 672 && this.$route.path === '/') {
					return 3
				}else{
					this.courses.length
				}
			}
		}
	}
</script>