<template>
	<section id="lessons" :class="{whBg : this.$route.path === '/' }">
		<div class="container-fluid">
			<div class="row devider">
				<Lessonbox />
			</div>
			<div class="col-lg-12 text-center" v-if="this.$route.path === '/'">
				<router-link tag="a" to="/lessons" class="easy-link">
					Смотреть все курсы
				</router-link>
			</div>
		</div>
	</section>
</template>


<script>
import Lessonbox from '../components/ui/Lessonbox.vue'

	export default{
		components: { Lessonbox }
	}
</script>