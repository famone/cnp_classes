<template>
	<section id="lessons" :class="{whBg : this.$route.path === '/' }">
		<div class="container-fluid">
			<div class="row devider">
				<Lessonbox v-for="less in lessons" :less="less" />
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
		components: { Lessonbox },
		data(){
			return{
				lessons: [
					{
						date: '15 февраля - 15 марта',
						title: 'Мобильная видеосъемка на смартфон',
						miniDescr: 'Хочешь круто снимать на смартфон',
						img: require('../assets/img/telka.jpg')
					}
				]
			}
		}
	}
</script>