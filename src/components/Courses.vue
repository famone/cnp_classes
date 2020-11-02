<template>
	<section id="courses">
		<div class="container-fluid">
			
				<div class="row">
					<div class="col-lg-12">
						<div class="subline">
							<h2>Популярные курсы</h2>
							<router-link tag="a" to="/courses">
								<button class="main-btn">Все уроки</button>
							</router-link>
						</div>
			    	</div>
				</div>

			<div class="row devider">
				<courseBox v-for="course in courses" :course="course" />
			</div>
				
			


		</div>
	</section>
</template>

<script>
import courseBox from '../components/courseBox.vue'
import {mapGetters, mapState} from 'vuex'

	export default{
		components: {courseBox},
		computed: {
			...mapGetters({ courses: "courses/getCourses"})
		}
	}
</script>