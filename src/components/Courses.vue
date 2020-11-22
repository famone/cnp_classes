<template>

<div>
	<FilterBox @getFilter="getFilter" />

	<section id="mylessons" v-if="courses">
			<div class="container-fluid">
				<div class="row devider">
					<courseBox v-for="course in filteredCourses.slice(0, coursesMobile)" :course="course" />
				</div>
				<!-- show more -->
					
				<button class="show-more" v-if="this.$route.path !== '/'" :class="{hidden: hideMore}" @click="showMore()">Показать еще</button>

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
		data(){
			return{
				filteredParam: 'Все категории',
				baseVisible: 8,
				hideMore: false,
				savedScroll: 0
			}
		},
		computed: {
			...mapGetters({ courses: "courses/getCourses"}),
			coursesMobile(){
				if (document.documentElement.clientWidth <= 672 && this.$route.path === '/') {
					return 4
				}else if(document.documentElement.clientWidth >= 672 && this.$route.path === '/'){
					return 8
				}else{
					return this.baseVisible
				}
			},
			filteredCourses(){
				if(this.filteredParam === 'Все категории'){
					return this.courses
				}else{
					return this.courses.filter(item => item.rubric.name === this.filteredParam)
				}
			}
		},
		mounted(){
			window.addEventListener('scroll', ()=>{

				let winScroll = document.documentElement.scrollTop;

				this.savedScroll = winScroll
			})

		},
		methods: {
			getFilter(param){
				this.hideMore = false
				this.filteredParam = param;
				this.baseVisible = 8

				if(this.filteredCourses.length <= 8){
					this.hideMore = true
				}
			},
			showMore(){

				let savedPos = this.savedScroll

				this.baseVisible = this.baseVisible + 4

				setTimeout(function(){
                    document.documentElement.scrollTop = parseInt(savedPos)
                }, 1);

				if(this.baseVisible >= this.filteredCourses.length){
					this.hideMore = true
				}

			}
		}
	}
</script>