<template>
	<router-link tag="div" :to="'/courses/' + course.id " class="col-lg-3 course-box">
		<!-- <div class="new">🔥Новинка</div> -->
		<div class="course-img" :style="{'background-image': 'url(' + course.img_blur + ')'}"></div>
		<h4>{{course.name}}</h4>
		<p class="grey-txt" v-html="course.description.substr(0, 131) + '...' "></p>
	</router-link>
</template>

<script>
	export default{
		props: {
			course: {
				type: Object,
				required: true
			}
		}
	}
</script>