<template>
	<section id="mylessons">
		<div class="container-fluid">
			<div class="row devider">
				<div class="col-lg-12">
					<h2>Все курсы</h2>
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