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
						date: '4 января - 24 января',
						title: 'Съемка фуд-видео для начинающих',
						miniDescr: 'Полное онлайн-руководство по подготовке и съемке фуд-видео, от настройки камеры и постановки света до монтажа и цветокоррекции.',
						img: 'http://nikitapugachev.com/wp-content/uploads/2020/11/fd_bn.jpg'
					}
				]
			}
		}
	}
</script>