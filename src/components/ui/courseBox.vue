<template>
	<router-link tag="div" :to="'/courses/' + course.id " class="col-lg-3 col-md-4 col-sm-6 course-box wow fadeIn">
		<!-- <div class="new">🔥Новинка</div> -->
		<!-- <div class="course-img" :style="{'background-image': 'url(' + course.img_blur + ')'}"></div> -->
	<img :src="course.img_blur" style="width: 100%;border-radius: 5px;">
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