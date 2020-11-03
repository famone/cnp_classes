<template>
	<section id="otsilki">
		<div class="container-fluid">
			
				<div class="row">
					<div class="col-lg-12">
						<div class="subline">
							<h2>Отсылки</h2>
							
						</div>
			    	</div>
				</div>

			<div class="row devider">	
				<div @click="goToLink(flash.ID)"  v-for="flash in flashbacks.linkCourse" class="col-lg-3 course-box">
			 		<!-- <div class="course-img" :style="{'background-image': 'url(' + course.img_blur + ')'}"></div>  -->
					<h4>{{flash.post_title}}</h4>
				<p class="grey-txt" v-html="flash.post_content.substr(0, 131) + '...' "></p> 
				</div>
			</div>
				
			


		</div>
	</section>
</template>


<script>
import courseBox from '../components/courseBox.vue'

	export default{
		props: {
			flashbacks: {
				type: Object,
				required: true
			}
		},
		components: {courseBox},
		methods: {
			goToLink(link){

				this.$router.push('/').then(() => {
	        		this.$router.replace('/courses/' + link);
	      		});

				// this.$router.push('/courses/15')
			

			}
		}
	}
</script>